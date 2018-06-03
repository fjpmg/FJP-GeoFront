/* global Cesium*/
import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Controller.extend({
  layerList: null,
  cesiumViewer: null,
  selectedLayer: null,
  selectedEntity: null,
  entityBox: false,
  filterModal: false,
  heightModal: false,
  filterOptions: Ember.Object.create({
    selectionList: Ember.A(),
    height: 0,
    altitudeMinima: undefined,
    altitudeMaxima: undefined,
    todos: null,
    municipios: Ember.A(),
    propriedadeName: ''
  }),

  init() {
    this._super(...arguments);
    this.addObserver('layersList', this, 'didSortList');
  },

  didSortList(){
    if(this.get('cesiumViewer')){
      let layers = this.get('cesiumViewer').scene.imageryLayers;
      let layersList = this.get('layersList');
      this.get('updateLayerList')(layers, layersList);
    }
  },

  updateLayerList(layers, layersList) {
    var numLayers = layersList.length;
    for(var i=0; i < numLayers; i++){
      var name = layersList[i].layer;
      var layer = layers._layers.findBy('name', name);
      if(layer){ layers.lowerToBottom(layer) }
    }
    var terrain = layers.get(numLayers);
    layers.lowerToBottom(terrain)
  },

  actions: {
    loadLayers(){
      let layersNames = ['mun_glebas', 'municipios', 'prop_certificadas', 'mun_prop'];
      let viewer = this.get('cesiumViewer');
      let imageryLayers = viewer.imageryLayers;
      let layersList = this.get('layersList');
      let layers = viewer.scene.imageryLayers;
      let filterOptions = this.get('filterOptions');

      layersNames.forEach((name) => {
        let oldLayer = layers._layers.findBy('name', name);
        var show = true;
        var alpha = 1;
        let layerModel = layersList.findBy('layer', name);
        var municipiosIds = filterOptions.municipios;
        var propName = layerModel.propName;

        if(oldLayer){
          alpha = oldLayer.alpha;
          show = oldLayer.show;
          layers.remove(oldLayer, true);
        }

        var  params = {
          transparent : 'true',
          tiled : 'true',
          format : 'image/png',
          tileWidth : 256,
          tileHeight : 256,
          maximumLevel : 25,
        };
        if(name === 'municipios'){
          if(municipiosIds.length !== 0) {
            params.featureid =  municipiosIds.join(',');
          }
        } else {
          params.viewparams = '';
          if(municipiosIds.length !== 0) {
            params.viewparams = params.viewparams + `municipioids:${municipiosIds.join('\\,')};`;
          }
          if(filterOptions.height !== "0"){
            params.viewparams = params.viewparams + `height:${filterOptions.height};`
          }
          if(filterOptions.propriedadeName !== ""){
            params.viewparams = params.viewparams + `propriedade:${filterOptions.propriedadeName};`
          }
          if(filterOptions.todos !== undefined){
            params.viewparams = params.viewparams +  `todos:${filterOptions.todos};`;
          }
        }

        var imageryProvider = new Cesium.WebMapServiceImageryProvider({
          url: config.fjpGeoServer + "/wms",
          layers: `fjpgeoserver:${name}`,
          enablePickFeatures: true,
          getFeatureInfoParameters : {
            propertyName: propName,
          },
          parameters: params
        });
        var layer = imageryLayers.addImageryProvider(imageryProvider);
        layer.alpha = Cesium.defaultValue(alpha, 0.5);
        layer.show = Cesium.defaultValue(show, true);
        layer.name = name;
        let elem = layersList.findBy('layer', name);
        Ember.set(elem, 'show', show);
        this.get('updateLayerList')(layers, layersList);
        this.set('filterModal', false);
        this.set('heightModal', false);

      });
    },
    loadLayer(name){
      let viewer = this.get('cesiumViewer');
      let imageryLayers = viewer.imageryLayers;
      let layersList = this.get('layersList');
      let layers = viewer.scene.imageryLayers;
      let oldLayer = layers._layers.findBy('name', name);
      var show = true;
      var alpha = 1;
      let layerModel = layersList.findBy('layer', name)
        var municipiosIds = layerModel.municipios;
      var propName = layerModel.propName;
      let filterOptions = this.get('filterOptions');

      if(oldLayer){
        alpha = oldLayer.alpha;
        show = oldLayer.show;
        layers.remove(oldLayer, true);
      }

      var  params = {
        transparent : 'true',
        tiled : 'true',
        format : 'image/png',
        tileWidth : 256,
        tileHeight : 256,
        maximumLevel : 25,
      };
      if(name === 'municipios'){
        if(municipiosIds.length !== 0) {
          params.featureid =  municipiosIds.join(',');
        }
      } else {
        params.viewparams = '';
        if(municipiosIds.length !== 0) {
          params.viewparams = params.viewparams + `municipioids:${municipiosIds.join('\\,')};`;
        }
          if(filterOptions.height !== 0){
            console.log(filterOptions.height)
            params.viewparams = params.viewparams + `height:${filterOptions.height};`
          }

        if(layerModel.todos !== undefined){
          params.viewparams = params.viewparams +  `todos:${layerModel.todos};`;
        }
      }

      var imageryProvider = new Cesium.WebMapServiceImageryProvider({
        url: config.fjpGeoServer + "/wms",
        layers: `fjpgeoserver:${name}`,
        enablePickFeatures: true,
        getFeatureInfoParameters : {
          propertyName: propName,
        },
        parameters: params
      });
      var layer = imageryLayers.addImageryProvider(imageryProvider);
      layer.alpha = Cesium.defaultValue(alpha, 0.5);
      layer.show = Cesium.defaultValue(show, true);
      layer.name = name;
      let elem = layersList.findBy('layer', name);
      Ember.set(elem, 'show', true);
      this.get('updateLayerList')(layers, layersList);
      this.set('filterModal', false);
      this.set('heightModal', false);
    },

    displayLayer(name, show){
      let layers = this.get('cesiumViewer').scene.imageryLayers;
      let layer = layers._layers.findBy('name', name);
      if(layer){ layer.show = show; }
    },

    setAlpha(name, alpha){
      let layers = this.get('cesiumViewer').scene.imageryLayers;
      let layer = layers._layers.findBy('name', name);
      if(layer){ layer.alpha = alpha; }
    },
  },
});
