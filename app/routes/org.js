import Ember from 'ember';
import config from 'github-ui/config/environment';

export default Ember.Route.extend({
  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo('org.notfound');
      } else {
        return true;
      }
    }
  },
  model(params) {
    console.log('params', params);
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=${config.APP.GITHUB_ACCESS_TOKEN}`)
            .then(function(rawOrg){
              rawOrg.oldId = rawOrg.id;
              rawOrg.id = rawOrg.name;
              return rawOrg;
            }).then(function (data) {
              return new Ember.RSVP.Promise((res, rej) => {
                Ember.run.later(() => {
                  res(data);
                }, 2000);
              });
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
