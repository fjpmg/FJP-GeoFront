import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('municipios/filtro-municipio', 'Integration | Component | municipios/filtro municipio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{municipios/filtro-municipio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#municipios/filtro-municipio}}
      template block text
    {{/municipios/filtro-municipio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
