import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  flashMessages: service(),
  queryParams: ['limit', 'page'],
  limit: 10,
  page: 1,

  actions: {
    requestUpdate() {
      var input = Ember.$("table input[type='checkbox']:not(#headerCheckbox)").
        filter((i, el) => el.checked);

      if(input.length > 0)
        this.get('flashMessages').success('Requisições enviadas com sucesso');
    }
  }
});
