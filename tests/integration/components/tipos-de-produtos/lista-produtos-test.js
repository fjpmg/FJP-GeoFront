import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tipos-de-produtos/lista-produtos', 'Integration | Component | tipos de produtos/lista produtos', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tipos-de-produtos/lista-produtos}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tipos-de-produtos/lista-produtos}}
      template block text
    {{/tipos-de-produtos/lista-produtos}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
