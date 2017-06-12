import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const orgName = this.modelFor('org').id;
    const repoId = Ember.get(this.modelFor('org.repo'), 'id');

    return $.get(`https://api.github.com/repos/${orgName}/${repoId}/issues`)
            .then(function(rawIssues){
              return rawIssues.map(rawIssue => {
                rawIssue.oldId = rawIssue.id;
                rawIssue.id = rawIssue.name;
                return rawIssue;
              });
            });
  }
});
