import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  session: service(),
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:loopback', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
