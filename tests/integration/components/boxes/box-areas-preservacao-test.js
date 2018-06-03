import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boxes/box-areas-preservacao', 'Integration | Component | boxes/box areas preservacao', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boxes/box-areas-preservacao}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boxes/box-areas-preservacao}}
      template block text
    {{/boxes/box-areas-preservacao}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
