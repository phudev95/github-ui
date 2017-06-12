import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: true,

  actions: {
    toggleLinkSection() {
      //this.set('isExpanded', !this.get('isExpanded'));
      this.toggleProperty('isExpanded');
      this.sendAction('on-links-toggle');
    }
  }
});
