import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$("#btn-expand a").click(function(evt) {
      evt.preventDefault();
      Ember.$("body").toggleClass("menu-active");
    });
  },
  actions: {
    showFilterModal(){
      this.set('filterModal', true);
    },
    toggleProps(item){
      Ember.set(item, 'showProps', !item.showProps)
    },
    displayLayer(item){
      Ember.set(item, 'show', !item.show);
      this.get('displayLayer')(item.layer, item.show)
    }
  }
});
