import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('usuarios/form-usuario', 'Integration | Component | usuarios/form usuario', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{usuarios/form-usuario}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#usuarios/form-usuario}}
      template block text
    {{/usuarios/form-usuario}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
