import Route from '@ember/routing/route';
import EmberObject from '@ember/object';


export default Route.extend({
  
    model(){      
        let emptyObject = EmberObject.create({
        
          });
       return emptyObject;
    },
    
   
    actions: {

        insertData(){
            let model = this.currentModel;      
            
            firebase.database().ref('customers/' + model.customerName).set({
                 companyName: model.companyName,
                customerId : model.customerId,
                 customerName : model.customerName,
                customerPhone : model.customerPhone,
                customerEmail: model.customerEmail,
                customerAddress : model.customerAddress,
                customerPin : model.customerPin
            });
           
          this.transitionTo('customers');
          }  
    }
});
