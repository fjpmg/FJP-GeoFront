import Ember from 'ember';
import RSVP from 'rsvp';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
 // session: service(),

  model() {
    this._super(...arguments);
//    let userId = this.get('session.data.authenticated.userId');
    return RSVP.hash({
      regionalizacoes: this.store.query('regionalizacao', {filter: {order: 'nome ASC',  fields: {id: true, nome: true} } }),
      municipios: this.store.query('municipio', {filter: {order: 'nome ASC',  fields: {id: true, nome: true} } }),
  //    usuario: this.store.findRecord('usuario', userId)
    });
  },

  setupController(controller, model){
    this._super(...arguments);
    controller.set('layersList', Ember.A([
      { name: 'Área de preservação', layer:'mun_areas_preservacao',  showProps: false, show: false, alpha: 1, todos: 1,  municipios: Ember.A(), propName: 'area_preservacaoid', filterBy: { municipio: false, height: false } },
      { name: 'Glebas', layer: 'mun_glebas', showProps: false, show: false, alpha: 1,  todos: 1, municipios: Ember.A(), altitudeMinima: 0, altitudeMaxima: 500000, propName: 'glebaid', filterBy: { municipio: true, height: true} },
      { name: 'Hidrografias', layer: 'hidrografias', showProps: false, show: false, alpha: 1, propName: 'nome,area', filterBy: { municipio: false, height: false} },
      { name: 'Malhas Viárias', layer: 'malhas_viarias', showProps: false, show: false, alpha: 1, propName: 'nome,area', filterBy: { municipio: false, height: false} },
      { name: 'Municípios', model: 'municipio',  layer: 'municipios', showProps: false, show: false, alpha: 1, todos: 1, municipios: Ember.A(), propName: 'municipioid', filterBy: { municipio: true, height: false} },
      { name: 'Propriedades Certificadas',model: 'propriedade', layer: 'prop_certificadas', showProps: false, show: true, alpha: 1, todos: 1, municipios: Ember.A(), altitudeMinima: 0, altitudeMaxima: 500000, propName: 'propriedadeid', filterBy: { municipio: true, height: true} },
      { name: 'Propriedades',model: 'propriedade', layer: 'mun_prop', showProps: false, show: true, alpha: 1, todos: 1, municipios: Ember.A(), altitudeMinima: 0, altitudeMaxima: 500000, propName: 'propriedadeid', filterBy: { municipio: true, height: true} },
      //{ name: 'Relevo',model: 'relevo', layer: 'relevo_geom', showProps: false, show: false, alpha: 1, municipios: Ember.A(), altitudeMinima: 0, altitudeMaxima: 500000, propName: '', filterBy: { municipio: false, height: false} },
      // { name: 'Regiões', model: 'regiao', layer: 'regioes', showProps: false, show: false, alpha: 1, municipios: Ember.A(), altitudeMinima: null, altitudeMaxima: null, propName: 'nome' },
      { name: 'Ortofotos', model: 'ortofoto', layer: 'ortofotos', showProps: false, show: false, alpha: 1, propName: 'nome', filterBy: { municipio: false, height: false} },
      // { name: 'Teste', layer:'mun_prop_relevo',  showProps: false, show: false, alpha: 1, municipios: Ember.A(), altitudeMinima: null, altitudeMaxima: null, propName: 'nome' },
    ])
    );
    model.municipios.forEach((municipio) => {
      controller.get('filterOptions.selectionList').pushObject({id: municipio.id, selected: false});
    })
  },
});
