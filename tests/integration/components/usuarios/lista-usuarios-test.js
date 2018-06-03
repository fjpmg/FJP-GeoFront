import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('usuarios/lista-usuarios', 'Integration | Component | usuarios/lista usuarios', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{usuarios/lista-usuarios}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#usuarios/lista-usuarios}}
      template block text
    {{/usuarios/lista-usuarios}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
