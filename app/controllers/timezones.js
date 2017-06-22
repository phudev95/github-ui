import Ember from 'ember';
import _ from 'lodash';

export default Ember.Controller.extend({
    /* create array of timezones with name & offset */
    init: function() {
		var timezones = [];
		for (var i in moment.tz._zones) {
		  timezones.push({
		    name: moment.tz._zones[i].name,
		    offset: moment.tz._zones[i].offsets[0]
		  });
		}
		this.set('timezones', timezones);
		this._super();
	},
	selectedTimezone: null,
	actions: {

		
		/* save a timezone record to our offline datastore */
		add: function() {
			var timezone = this.store.createRecord('timezone', {
				name: this.get('selectedTimezone').name,
				offset: this.get('selectedTimezone').offset
			});
			timezone.save();
		},        
		/* delete a timezone record from our offline datastore */
		remove: function(timezone) {
			timezone.destroyRecord();
		},
		setSelectedTimezone: function(timezoneName) {
			var timezone = _.find(this.get('timezones'), {name: timezoneName});
			this.set('selectedTimezone', timezone);
		}
	}
});
