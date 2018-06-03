import DS from 'ember-data';

export default DS.Model.extend({
  nomeCompleto: DS.attr(),
  nomeAmigavel: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  cpf: DS.attr(),
  telefone: DS.attr(),
  perfil: DS.attr(),
});
