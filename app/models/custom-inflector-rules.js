import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('producaoMunicipio', 'producaoMunicipios');
inflector.irregular('producaoPropriedade', 'producaoPropriedades');
inflector.irregular('producaoRegiao', 'producaoRegioes');
inflector.irregular('regiao', 'regioes');
inflector.irregular('regionalizacao', 'regionalizacoes');
inflector.irregular('areas_preservacao', 'areas_preservacao');

// Meet Ember Inspector's expectation of an export
export default {};
