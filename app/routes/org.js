import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('records', this.get('authentication.records'));
    // console.log('==== records ====', controller.get('records'));
  },

  actions: {
    addToRecords(value) {
      // console.log(this.get('authentication.records'));
      this.get('authentication.records').addObject({id: value});
    }
  }
});
