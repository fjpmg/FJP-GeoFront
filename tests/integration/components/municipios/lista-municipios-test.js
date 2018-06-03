import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('municipios/lista-municipios', 'Integration | Component | municipios/lista municipios', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{municipios/lista-municipios}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#municipios/lista-municipios}}
      template block text
    {{/municipios/lista-municipios}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
