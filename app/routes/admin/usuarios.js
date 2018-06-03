import Ember from 'ember';
import RSVP from 'rsvp';
import config from '../../config/environment';

const { $ } = Ember;

export default Ember.Route.extend({
  perPage: 10,
  currentPage: 1,
  btn: 'hide',

  model(params){
    params.limit = params.limit ? params.limit : this.get('perPage');
    params.skip = params.page ? (params.page-1)*params.limit : (this.get('currentPage')-1);

    return RSVP.hash({
      usuarios: this.store.query('usuario', {filter: params} ),
      totalCount: $.get({
        url:`${config.fjpGeoBack}/${config.namespace}/usuarios/count`,
        data: { where: params.where }
      })
    });

  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('usuarios', model.usuarios);
    controller.set('totalCount', model.totalCount.count);
    controller.set('perPage', this.get('perPage'));
    controller.set('currentPage', this.get('currentPage'));
    controller.set('skip', this.get('currentPage'));
    controller.set('params', {limit: this.get('perPage') });
  },
  actions: {
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
