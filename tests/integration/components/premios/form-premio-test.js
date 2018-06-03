import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('premios/form-premio', 'Integration | Component | premios/form premio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{premios/form-premio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#premios/form-premio}}
      template block text
    {{/premios/form-premio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
