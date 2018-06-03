import Ember from 'ember';

const { $ } = Ember;

export default Ember.Component.extend({
  actions: {
    updateCheckbox() {
      var checkbox = Ember.$("#headerCheckbox");
      var isChecked = checkbox[0].checked;
      var table = checkbox.parent().parent().parent().parent();

      $('td input:checkbox', table).prop('checked', isChecked);
    }
  }
});
