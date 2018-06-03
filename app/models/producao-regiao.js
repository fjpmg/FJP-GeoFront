import DS from 'ember-data';

export default DS.Model.extend({
  ano: DS.attr(),
  area: DS.attr(),
  produtividade: DS.attr(),
  producao: DS.attr(),

  // Relation
  regiao: DS.belongsTo('regiao'),
  produtoAgropecuario: DS.belongsTo('produtoAgropecuario'),
});
