import Ember from 'ember';
import config from 'github-ui/config/environment';

export default Ember.Route.extend({
  model(params) {
    const orgName = this.modelFor('org').id;
    return $.get(`https://api.github.com/orgs/${orgName}/repos?access_token=${config.APP.GITHUB_ACCESS_TOKEN}`)
            .then(function(rawOrgs){
              return rawOrgs.map(rawOrg => {
                rawOrg.oldId = rawOrg.id;
                rawOrg.id = rawOrg.name;
                return rawOrg;
              });
            });
  }
});
