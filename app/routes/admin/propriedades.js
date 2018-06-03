import Ember from 'ember';
import RSVP from 'rsvp';
import config from '../../config/environment';

const { $ } = Ember;

export default Ember.Route.extend({
  perPage: 10,
  currentPage: 1,

  model(params){
    params.limit = params.limit ? params.limit : this.get('perPage');
    params.skip = params.page ? (params.page-1)*params.limit : (this.get('currentPage')-1);

    return RSVP.hash({
      propriedades: this.store.query('propriedade', {filter: params} ),
      totalCount: $.get({
        url:`${config.fjpGeoBack}/${config.namespace}/propriedades/count`,
        data: { where: params.where }
      }),
      municipios: this.store.findAll('municipio'),
      tecnicos: this.store.query('usuario', { filter: { where:{ perfil: 't'}}}),
      proprietarios: this.store.query('usuario', {filter: { where:{ perfil: 'u'}}})
    });

  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('propriedades', model.propriedades);
    controller.set('totalCount', model.totalCount.count);
    controller.set('perPage', this.get('perPage'));
    controller.set('currentPage', this.get('currentPage'));
    controller.set('skip', this.get('currentPage'));
    controller.set('params', {limit: this.get('perPage') });
  },
  actions: {
    toggleTab(btn) {
      var oldBtn = this.get('btn');
      if( oldBtn == btn){
        $('.tab-content').toggle();
      } else {
        $('.tab-content').show();
      }
      this.set('btn', btn);
    },
    resetParams(){
      this.controller.set('params', {limit: this.get('perPage')});
    },
    reloadModel(){
      let params = this.controller.get('params');
      let propriedades = this.store.query('propriedade', {filter: params});
      this.get('controller').set('propriedades', propriedades);
      let self = this;
      $.get({
        url:`${config.fjpGeoBack}/${config.namespace}/propriedades/count`,
        data: { where: params.where },
        success: function(response){
          self.get('controller').set('totalCount', response.count);
        }
      });

    }
  },
});
