/* global Cesium */
import Ember from 'ember';
import config from '../config/environment';
import RSVP from 'rsvp';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  store: service(),

  didInsertElement(){
    let store = this.get('store');
    Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(-74, -45, -15, 7);
    Cesium.BingMapsApi.defaultKey = "5nJKk3ndRGDC5dVlYICy~bMO94qf_93QD2HcajSQzLg~Amuuv4iE4lMvulkGWlBI-KD5LPRHhK9WZOj1AdLj8F_YhEyTv8mh1NKOdn-CQYof"

    function customGeocoder() { }
    customGeocoder.prototype.geocode = function (input) {
      var makeUrl = function(typeName){
        return `${config.fjpGeoServer}/wfs?` +
          'service=wfs&' +
          'version=2.0.0&' +
          'request=GetFeature&' +
          'outputFormat=JSON&' +
          `typeName=fjpgeoserver:${typeName}&` +
          'propertyName=nome&' +
          `CQL_FILTER=nome%20ILIKE%20%27${input}%25%27`;
      }

      var municipios = Cesium.loadJson(makeUrl('municipios'));
      var propriedades = Cesium.loadJson(makeUrl('propriedades'));
      return RSVP.all([municipios, propriedades]).then((array) => {
        var results = [];
        array[0].features.forEach((resultObject) => {
          results.push({
            displayName: resultObject.properties.nome,
            destination: Cesium.Rectangle.fromDegrees(
              resultObject.properties.bbox[0],
              resultObject.properties.bbox[1],
              resultObject.properties.bbox[2],
              resultObject.properties.bbox[3]
            )
          });
        });

        array[1].features.forEach((resultObject) => {
          results.push({
            displayName: resultObject.properties.nome,
            destination: Cesium.Rectangle.fromDegrees(
              resultObject.properties.bbox[1],
              resultObject.properties.bbox[2],
              resultObject.properties.bbox[3],
              resultObject.properties.bbox[0]
            )
          });
        });

        return results;
      });
    };

    this.set('cesiumViewer', ( new Cesium.Viewer('map-container', {
      geocoder: new customGeocoder(),
      timeline: false,
      animation: false,
      infoBox : false
    })) );
    var self = this;
    var viewer = this.get('cesiumViewer');
    let imageryLayers = viewer.imageryLayers;
    let layers = viewer.scene.imageryLayers;
    var layersList = this.get('layersList');
    viewer.camera.zoomIn(3000000);

    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function(click) {
      self.set('entityBox', false);
      var pickRay = viewer.camera.getPickRay(click.position);
      var featuresPromise = viewer.imageryLayers.pickImageryLayerFeatures(pickRay, viewer.scene);

      if(Cesium.defined(featuresPromise)) {
        Cesium.when(featuresPromise, function(features) {
          var key = Object.keys(features[0].properties)[0];
          var id = features[0].properties[key];
          var model = key.replace('id','');
          var elem = store.findRecord(model, id);
          return RSVP.all([elem]).then((el) => {
            var tmp = { model: model, elem: el[0]}
            self.set('selectedEntity', tmp);
            self.set('entityBox', true);
          })
        });
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    layersList.forEach((el) => {
      var params = {
        transparent : 'true',
        tiled : 'true',
        format : 'image/png',
        tileWidth : 256,
        tileHeight : 256,
        maximumLevel : 25,
      };
      if(el.todos){
        params.viewparams = 'todos:' + el.todos;
      }
      var imageryProvider = new Cesium.WebMapServiceImageryProvider({
        url: config.fjpGeoServer + "/wms",
        layers: `fjpgeoserver:${el.layer}`,
        enablePickFeatures: true,
        parameters : params,
        getFeatureInfoParameters : {
          propertyName: el.propName
        },
      });
      var layer = imageryLayers.addImageryProvider(imageryProvider, el.index);
      layer.alpha = Cesium.defaultValue(el.alpha, 0.5);
      layer.show = Cesium.defaultValue(el.show, true);
      layer.name = el.layer;
    })

    this.get('updateLayerList')(layers, layersList);
    this.set('insertMapContainer', true);
  }
});
