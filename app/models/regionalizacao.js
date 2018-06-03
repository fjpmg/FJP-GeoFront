import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  nome: DS.attr(),

  // Relations
  regioes: DS.hasMany('regiao'),

  // Methods
  sortedRegioes: Ember.computed('regioes.[]', function() {
    let regioes = this.get('regioes');
    return regioes.sortBy('nome');
  })
});
