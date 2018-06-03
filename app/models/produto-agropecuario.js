import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr(),
  descricao: DS.attr(),
  unidade_area: DS.attr(),
  unidade_produtividade: DS.attr(),
  unidade_producao: DS.attr(),

  // Relations
  producaoMunicipios: DS.hasMany('producaoMunicipio'),
  producaoPropriedades: DS.hasMany('producaoPropriedade'),
  producaoRegioes: DS.hasMany('producaoRegioes'),
});
