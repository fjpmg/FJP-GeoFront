import Ember from 'ember';
//import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service } } = Ember;

//export default Ember.Route.extend(ApplicationRouteMixin, {
export default Ember.Route.extend({
/*  sessionAccount: service(),

  activate() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  },
  */

  beforeModel(){
    this._super(...arguments);
    this.transitionTo('ferramenta');
  }

});
