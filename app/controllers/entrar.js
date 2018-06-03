import Ember from 'ember';

const { inject: { service }, $ } = Ember;

export default Ember.Controller.extend({
  session: service(),
  actions: {
    authenticate() {
      this.set('errorMessage', null);
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:loopback', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      }).then(() => {
        $.ajaxSetup({
          headers: {
            'Authorization': this.get('session.data.authenticated.id')
          }
        });
        this.transitionToRoute('ferramenta')});
    }
  }
});
