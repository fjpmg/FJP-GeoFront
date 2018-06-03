import Ember from 'ember';
import config from '../../config/environment';

const { $ } = Ember;

export default Ember.Route.extend({
  actions: {
    requestUpdate(){},
    resetParams(){
      this.controller.set('params', {limit: this.get('perPage')});
    },
    reloadModel(){
      let params = this.controller.get('params');
      let usuarios = this.store.query('usuario', {filter: params});
      this.get('controller').set('usuarios', usuarios);
      let self = this;
      $.get({
        url:`${config.fjpGeoBack}/${config.namespace}/usuarios/count`,
        data: { where: params.where },
        success: function(response){
          self.get('controller').set('totalCount', response.count);
        }
      });

    },
    toggleTab(btn) {
      var oldBtn = this.get('btn');
      if( oldBtn == btn){
        $('.tab-content').toggle();
      } else {
        $('.tab-content').show();
      }
      this.set('btn', btn);
    }
  },
});
