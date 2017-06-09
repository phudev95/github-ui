import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  addItem(org) {
    this.get('items').addObject(org);
    console.log(this.get('items').map(item => item.id).join(', '));
  }
});
