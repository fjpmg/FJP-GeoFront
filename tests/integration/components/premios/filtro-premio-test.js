import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('premios/filtro-premio', 'Integration | Component | premios/filtro premio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{premios/filtro-premio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#premios/filtro-premio}}
      template block text
    {{/premios/filtro-premio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
