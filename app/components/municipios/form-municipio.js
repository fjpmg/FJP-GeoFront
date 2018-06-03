import Ember from 'ember';

export default Ember.Component.extend({
  perfilOptions: Ember.A([
    { value: 'u', display: 'Norte'},
    { value: 't', display: 'Sul'},
    { value: 'a', display: 'Sudeste'},
    { value: 'a', display: 'Nordeste'},
    { value: 'a', display: 'Centro-Oeste'},
  ]),
});
