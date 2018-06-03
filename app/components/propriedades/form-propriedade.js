import Ember from 'ember';

const { inject: { service }, $ } = Ember;

export default Ember.Component.extend({
  store: service(),
  flashMessages: service(),

  init(){
    this._super(...arguments);
    this.set('moreOptions', false);
    let store = this.get('store');
    let propriedade = store.createRecord('propriedade', {
      alteracoesProprietario: null,
      anoPlantio: null,
      area: "",
      areaCafe: "",
      areaPreservacao: "",
      cnpj: "",
      codCar: "",
      codEmater: "",
      edicaoProprietario: false,
      emailProprietario: "",
      espacamento: "",
      especies: "",
      exibirAnoPlantio: false,
      exibirArea: false,
      exibirAreaCafe: false,
      exibirAreaPreservacao: false,
      exibirEmailProprietario: false,
      exibirNomeProprietario: false,
      exibirProducao: false,
      exibirProdutividade: false,
      exibirTelefoneProprietario: false,
      facebook: "",
      historico: "",
      idMunicipio: null,
      idProprietario: null,
      idTecnico: null,
      imagemDestaque: "",
      latitude: "",
      liberado: false,
      longitude: "",
      nome: "",
      nomeProprietario: "",
      perfilPublico: false,
      producao: "",
      produtividade: "",
      propriedadeCertificada: false,
      publicado: false,
      site: "",
      telefoneProprietario: "",
      variedade: "",
    })

    this.set('propriedade', propriedade);
  },
  didInsertElement(){
    $('.cnpj').mask('00.000.000/0000-00')
  },

  actions: {
    criarNovo(){
      const flashMessages = Ember.get(this, 'flashMessages');
      let store = this.get('store');
      let propriedade = this.get('propriedade');
      propriedade.save()
        .then(
          () => {
            let propriedadeNovo = store.createRecord({
              alteracoesProprietario: "",
              anoPlantio: "",
              area: "",
              areaCafe: "",
              areaPreservacao: "",
              cnpj: "",
              codCar: "",
              codEmater: "",
              edicaoProprietario: false,
              emailProprietario: "",
              espacamento: "",
              especies: "",
              exibirAnoPlantio: false,
              exibirArea: false,
              exibirAreaCafe: false,
              exibirAreaPreservacao: false,
              exibirEmailProprietario: false,
              exibirNomeProprietario: false,
              exibirProducao: false,
              exibirProdutividade: false,
              exibirTelefoneProprietario: false,
              facebook: "",
              historico: "",
              idMunicipio: "",
              idProprietario: "",
              idTecnico: "",
              imagemDestaque: "",
              latitude: "",
              liberado: false,
              longitude: "",
              nome: "",
              nomeProprietario: "",
              perfilPublico: false,
              producao: "",
              produtividade: "",
              propriedadeCertificada: false,
              publicado: false,
              site: "",
              telefoneProprietario: "",
              variedade: "",
            });
            this.set('propriedade', propriedadeNovo)
            flashMessages.success('Propriedade criada com sucesso');
            this.get('reloadModel')();
          },
          (error) => {
            console.log(error);
          });
    },
    toggleMoreOptions(){
      this.toggleProperty('moreOptions');
    },
  },
});
