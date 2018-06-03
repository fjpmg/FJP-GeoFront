import DS from 'ember-data';

export default DS.Model.extend({
  area: DS.attr(),
  altitudeMedia: DS.attr(),
  espacamento: DS.attr(),
  variedade: DS.attr()
});
