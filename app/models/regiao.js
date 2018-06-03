import DS from 'ember-data';

export default DS.Model.extend({
  cod_ibge: DS.attr(),
  nome: DS.attr(),
  descricao: DS.attr(),
  area: DS.attr(),
  populacao: DS.attr(),
  area_cafe: DS.attr(),
  area_preservacao: DS.attr(),
  producao: DS.attr(),
  produtividade : DS.attr(),
  pib: DS.attr(),
  idhm: DS.attr(),
  imrs: DS.attr(),

  // Relations
  regionalizacao: DS.belongsTo('regionalizacao'),
  municipios: DS.hasMany('municipio'),
  producoes: DS.hasMany('producaoRegiao'),
});
