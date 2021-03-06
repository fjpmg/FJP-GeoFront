import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  filterByLayerModel: null,
  filterByLayer: null,
  store: service(),

  didReceiveAttrs(){

    let model = this.get('model');
    this.set('regionalizacoes', model.regionalizacoes);
    this.set('municipiosList', model.municipios);
    this.set('municipios', model.municipios);
    this.set('regionalizacaoSelected', null);
    this.set('regiaoSelected', null);
    let regionalizacoes = this.get('regionalizacoes');
    let municipios = this.get('municipios');
    let municipiosList = this.get('municipiosList');
    let selectionList = this.get('filterOptions.selectionList');
    let filterOptions = this.get('filterOptions');

    regionalizacoes.forEach((regionalizacao) => {
      regionalizacao.set('open', false);
      regionalizacao.municipios = Ember.A();
      regionalizacao.get('regioes').forEach((regiao) => {
        regiao.get('municipios').then((municipios) => {
          municipios.forEach((municipio) => {
            regionalizacao.municipios.pushObject({id: municipio.id});
          })
        })
      })
    })
    this.set('municipiosList', this.get('getMunicipiosList')(municipiosList, municipios, selectionList));
  },


  getMunicipiosList(filterList, municipios, selectionList){
    var result = Ember.A();

    filterList.forEach((filter) => {
      var municipio = municipios.findBy('id', filter.id);
      var selected = selectionList.findBy('id', filter.id);
      if(municipio){
        municipio.set('selected', selected.selected);
        result.pushObject(municipio);
      }
    });

    result.sort(function(a, b){
      if(a.get('nome') < b.get('nome')) return -1;
      if(a.get('nome') > b.get('nome')) return 1;
      return 0;
    });

    return result;
  },

  actions: {
    search(text){
      let store = this.get('store');

      store.query('municipio', {
        filter: {
          order: 'nome ASC',
          fields: { nome: true, id: true },
          where: {
            nome: { ilike: text + '%'},
          },
          limit: 100
        }
      }).then((response) => {
        let municipios = this.get('municipios');
        let selectionList = this.get('filterOptions.selectionList');
        var  filterList = response.map((el) => { return {id: el.id} });
        this.set('municipiosList', this.get('getMunicipiosList')(filterList, municipios, selectionList));
      });
    },

    toggleRegionalizacao(regionalizacao){
      let municipios = this.get('municipios');
      let selectionList = this.get('filterOptions.selectionList');
      let filterList = regionalizacao.get('municipios');

      regionalizacao.toggleProperty('open');
      this.set('regiaoSelected', null);
      if(regionalizacao.get('open')){
        this.set('regionalizacaoSelected', regionalizacao);
        this.set('municipiosList', this.get('getMunicipiosList')(filterList, municipios, selectionList));
      } else {
        this.set('regionalizacaoSelected', null);
        this.set('municipiosList', this.get('getMunicipiosList')(this.get('municipios'), municipios, selectionList));
      }
    },

    selectRegiao(regiao){
      let municipios = this.get('municipios');
      let selectionList = this.get('filterOptions.selectionList');
      let filterList = regiao.get('municipios');

      this.set('regiaoSelected', regiao);
      this.set('municipiosList', this.get('getMunicipiosList')(filterList, municipios, selectionList));
    },
    clearText(){
      this.set('filterText', '');
    },

    saveChanges(){
      let selectionList = this.get('filterOptions.selectionList');
      var ids = selectionList.filterBy('selected', true).mapBy('id');
      let filterOptions = this.get('filterOptions');
      if(ids.length !==0){
        Ember.set(filterOptions, 'municipios', ids);
        Ember.set(filterOptions, 'todos', 0);
      } else {
        Ember.set(filterOptions, 'todos', 1);
      }
      this.get('loadLayers')();
    },

    clearAll(){
      let selectionList = this.get('filterOptions.selectionList');
      let municipios = this.get('municipios');
      var municipiosList = this.get('municipiosList');

      selectionList.forEach((el) => { el.selected = false; });
      this.set('municipiosList', this.get('getMunicipiosList')(municipiosList, municipios, selectionList));
    },
    checkAll(){
      let selectionList = this.get('filterOptions.selectionList');
      let municipios = this.get('municipios');
      var municipiosList = this.get('municipiosList');

      selectionList.forEach((el) => { el.selected = true; });
      this.set('municipiosList', this.get('getMunicipiosList')(municipiosList, municipios, selectionList));
    },

    toggleModal(){
      this.set('filterText', '');
      this.toggleProperty('filterModal');
    }
  }
});
