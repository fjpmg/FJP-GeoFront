import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleFilterModal(){
      this.set('selectedLayer', this.get('item'));
      this.toggleProperty('filterModal');
    },
    toggleHeightModal(){
      this.set('selectedLayer', this.get('item'));
      this.toggleProperty('heightModal');
    },
    setAlpha(n){
      let name = this.get('item').layer;
      this.get('setAlpha')(name, n);
    }
  }
});
