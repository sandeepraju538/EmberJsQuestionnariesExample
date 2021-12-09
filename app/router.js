import EmberRouter from '@ember/routing/router';
import config from 'questionnaire/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('questionnarie', { path: '/questionnarie/:questionnarie_id' });
  this.route('questionnaries-list');
  this.route('not-found', { path: '/*path' });
});
