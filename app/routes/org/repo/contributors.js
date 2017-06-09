import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const orgName = this.modelFor('org').id;
    const repoId = Ember.get(this.modelFor('org.repo'), 'id');

    return $.get(`https://api.github.com/repos/${orgName}/${repoId}/contributors`)
            .then(function(rawContributors){
              return rawContributors.map(rawContributor => {
                rawContributor.oldId = rawContributor.id;
                rawContributor.id = rawContributor.name;
                return rawContributor;
              });
            });
  }
});
