import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// / -> /orgs
// /org/emberjs -> /org/emberjs/repos
// /org/emberjs/ember.js -> /org/emberjs/ember.js/

Router.map(function() {
  this.route('home', function() {
    this.route('phu');
  });

  //# LIST OF ORGS
  // /orgs
  this.route('orgs');

  // INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() {

    // LIST OF REPO
    // org/jquery/repos
    this.route('repos');

    // INDIVIDUAL REPO
    // org/jquery/jquery-ui/contributors
    // org/jquery/jquery-ui/issues
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    });
  });

  // 404
  this.route('notfound', {path: '*path'});
});

export default Router;
