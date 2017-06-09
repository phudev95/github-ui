import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const orgId = this.modelFor('org').id;
    console.log('orgId', orgId);
    console.log('params.repoid', params.repoid);
    return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}?access_token=e53a4f8331c20c914ef421b36f03802b670a121e`)
            .then(function(rawRepo){
              rawRepo.oldId = rawRepo.id;
              rawRepo.id = rawRepo.name;
              console.log('rawRepo', rawRepo);
              return rawRepo;
            });
  }
});
