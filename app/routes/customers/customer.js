import Route from '@ember/routing/route';

export default Route.extend({    
   
    model(params){
        const {
            customer_id
        } = params;
        var customer = firebase.database().ref('customers/'+customer_id);
        const prom = new Promise(function(resolve,reject){
            customer.on('value',(snapshot) => {
                var data = snapshot.val();
                resolve(data);
            });
        });
        return prom;
    },
    
    actions:{
        editCustomer(name){
            this.transitionTo('editCustomer', { queryParams: { name: name }});
        },
        deleteCustomer(name){
            firebase.database().ref('customers/'+name).remove();
            this.transitionTo('customers');
        }
    }
});
