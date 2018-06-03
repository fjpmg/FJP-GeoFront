import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('premios/lista-premios', 'Integration | Component | premios/lista premios', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{premios/lista-premios}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#premios/lista-premios}}
      template block text
    {{/premios/lista-premios}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
