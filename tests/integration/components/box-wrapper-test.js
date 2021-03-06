import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('box-wrapper', 'Integration | Component | box wrapper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{box-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#box-wrapper}}
      template block text
    {{/box-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
