import DS from 'ember-data';

export default DS.Model.extend({
  codIbge: DS.attr(),
  nome: DS.attr(),
  descricao: DS.attr(),
  area: DS.attr(),
  areaCafe: DS.attr(),
  areaPreservacao: DS.attr(),
  producao: DS.attr(),
  produtividade: DS.attr(),
  pib: DS.attr(),
  idhm: DS.attr(),
  imrs: DS.attr(),
  premio: DS.attr(),
  ano: DS.attr(),
  posicao: DS.attr(),
  selected: DS.attr(),

  // Relations
  propriedades: DS.hasMany('propriedade'),
  regioes: DS.hasMany('regiao')
});
