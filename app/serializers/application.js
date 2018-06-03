import DS from 'ember-data';
import Ember from 'ember';

const underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },
  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});
