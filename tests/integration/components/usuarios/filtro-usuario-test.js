import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('usuarios/filtro-usuario', 'Integration | Component | usuarios/filtro usuario', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{usuarios/filtro-usuario}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#usuarios/filtro-usuario}}
      template block text
    {{/usuarios/filtro-usuario}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
