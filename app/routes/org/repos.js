import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const orgName = this.modelFor('org').id;
    return $.get(`https://api.github.com/orgs/${orgName}/repos?access_token=e53a4f8331c20c914ef421b36f03802b670a121e`)
            .then(function(rawOrgs){
              return rawOrgs.map(rawOrg => {
                rawOrg.oldId = rawOrg.id;
                rawOrg.id = rawOrg.name;
                return rawOrg;
              });
            });
  }
});
