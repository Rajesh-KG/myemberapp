import newRoute from 'booksdemo/routes/new-customer';

export default newRoute.extend({
    templateName : 'newCustomer',
    queryParams: {
        name: {
          refreshModel: true
        }
    },
    model(params){
      var customer = firebase.database().ref('customers/'+params.name);
      var data = null;
      var prom = new Promise(function(resolve,reject){
              customer.on('value', (snapshot) => {
                  data = snapshot.val();
                  resolve(data);
              }); 
      });
      return prom;
    }
   
});
