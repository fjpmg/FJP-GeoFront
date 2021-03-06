/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "bootstrap" }]*/
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import bootstrap from 'npm:bootstrap';
import './models/custom-inflector-rules';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
