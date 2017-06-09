import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),
  actions: {
    favoritedClicked(org) {
      this.get('favorites').addItem(org);
    }
  },
  model() {
    return [
      {id: 'emberjs'},
      {id: 'ember-cli'},
      {id: 'microsoft'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'facebook'}
    ];
  }
});
