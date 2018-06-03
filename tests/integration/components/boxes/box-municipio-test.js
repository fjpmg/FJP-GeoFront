import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boxes/box-municipio', 'Integration | Component | boxes/box municipio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boxes/box-municipio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boxes/box-municipio}}
      template block text
    {{/boxes/box-municipio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
