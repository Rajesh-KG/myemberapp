import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    
    model(){
        var customers = firebase.database().ref('customers/');
        var data = null;
        var prom = new Promise(function(resolve,reject){
            
                customers.on('value', (snapshot) => {
                    data = snapshot.val();
                    console.log(data);
                    resolve(data);
                    
                })
            
        });
        return prom;
    }, 
    actions :{
        
        gotonewcustomer(){
            this.transitionTo('/newCustomer');
        },

        listCustomerDetails(post){
            this.transitionTo('/customers/customer/'+post);
            
        }
    }
});
