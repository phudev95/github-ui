import Ember from 'ember';
import config from 'github-ui/config/environment';

export default Ember.Route.extend({
  model(params) {
    const orgId = this.modelFor('org').id;
    console.log('orgId', orgId);
    console.log('params.repoid', params.repoid);
    return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}?access_token=${config.APP.GITHUB_ACCESS_TOKEN}`)
            .then(function(rawRepo){
              rawRepo.oldId = rawRepo.id;
              rawRepo.id = rawRepo.name;
              console.log('rawRepo', rawRepo);
              return rawRepo;
            });
  }
});
