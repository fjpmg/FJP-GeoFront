import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs(){
    let selectedLayer = this.get('selectedLayer');
    if(selectedLayer){
      this.set('altitudeMinima', selectedLayer.altitudeMinima)
      this.set('altitudeMaxima', selectedLayer.altitudeMaxima)
    }
  },

  actions: {
    saveChanges(){
      let min = this.get('altitudeMinima');
      let max = this.get('altitudeMaxima');
      let selectedLayer = this.get('selectedLayer');
      console.log('min: ', this.get('altitudeMinima'), ' max: ', this.get('altitudeMaxima'));

      Ember.set(selectedLayer, 'altitudeMinima', min);
      Ember.set(selectedLayer, 'altitudeMaxima', max);
      this.get('loadLayer')(selectedLayer.layer);
    },
    toggleModal(){
      this.toggleProperty('heightModal');
    }
  }
});
