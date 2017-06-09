import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    console.log('params', params);
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=e53a4f8331c20c914ef421b36f03802b670a121e`)
            .then(function(rawOrg){
              rawOrg.oldId = rawOrg.id;
              rawOrg.id = rawOrg.name;
              return rawOrg;
            });
  },

  // authentication: Ember.inject.service(),
  //
  // setupController(controller) {
  //   this._super(...arguments);
  //   controller.set('records', this.get('authentication.records'));
  //   // console.log('==== records ====', controller.get('records'));
  // },
  //
  // actions: {
  //   addToRecords(value) {
  //     // console.log(this.get('authentication.records'));
  //     this.get('authentication.records').addObject({id: value});
  //   }
  // }
});
