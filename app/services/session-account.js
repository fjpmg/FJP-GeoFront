import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend ({
  session: service('session'),
  store: service(),
  serverValidationComplete: false,
  server422: false,


  // Create a Promise to handle a server request that validates the current LocalStorage
  // If valid, then set SessionAccount User.
  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      let data = this.get('session.data.authenticated');
      let store = this.get('store');
      let account = this;
      let usuario =  store.find('usuario', data.userId );

      RSVP.all([usuario]).then((response) => {
        account.set('usuario', response[0]);
      })
        .catch((reason) => {
          console.log(reason.errors);
          var possible404 = reason.errors.filterBy('status', 404);
          var possible500 = reason.errors.filterBy('status', 500);
          // User has tampered the Local Storage.
          if(possible404.length !== 0) {
            alert('404 | Invalid Account Credentials.');
            this.get('session').invalidate();
          } else if(possible500.length !== 0) {
            alert('500 | Server Error');
            this.get('session').invalidate();
          }
        });
    } else {
      // Session is empty...
    }
  },
});
