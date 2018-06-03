import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ferramenta', function() {});
  this.route('entrar');
  this.route('sair');
  this.route('registrar');
  this.route('admin', function() {
    this.route('usuarios');
    this.route('propriedades');
    this.route('municipios');
    this.route('premios');
    this.route('tipos-de-produtos');
  });
});

export default Router;
