import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  log() {
    console.log(this.get('items').map(item => item.id).join(', '));
  },

  favoriteItem(org) {
    this.get('items').addObject(org);
    this.log();
  },

  unfavoriteItem(org) {
    this.get('items').removeObject(org);
    this.log();
  }
});
