import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('filtro', {});
  },
  actions: {
    limpar(){
      this.set('filtro', {});
      this.get('resetParams')();
      this.get('reloadModel')();
    },
    filtrar(){
      let filtro = this.get('filtro');
      let params = this.get('params');
      params.where = { and: []};
      for( var key in filtro){
        var obj = {};
        obj[key] = {ilike: `%${filtro[key]}%`};
        params.where.and.push(obj);
      }

      this.get('reloadModel')();
    }
  }
});
