import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr(),
  area: DS.attr(),
});
