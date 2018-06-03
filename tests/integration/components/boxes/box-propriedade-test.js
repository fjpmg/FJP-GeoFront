import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boxes/box-propriedade', 'Integration | Component | boxes/box propriedade', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boxes/box-propriedade}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boxes/box-propriedade}}
      template block text
    {{/boxes/box-propriedade}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
