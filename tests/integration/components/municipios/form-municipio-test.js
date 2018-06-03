import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('municipios/form-municipio', 'Integration | Component | municipios/form municipio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{municipios/form-municipio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#municipios/form-municipio}}
      template block text
    {{/municipios/form-municipio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
