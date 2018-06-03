import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings:['selected'],

  actions: {
    toggleItem(){
      let selectionList = this.get('selectionList');
      let item = this.get('item');
      var selectedItem = selectionList.findBy('id', item.id);

      item.toggleProperty('selected');
      selectedItem.selected = this.get('item.selected');
    },
  }
});
