/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    },
    'ember-font-awesome': {
      useScss: true,
      useLess: false
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('vendor/jquery-mask-plugin/jquery.mask.min.js');
  app.import('node_modules/cesium/Build/CesiumUnminified/Cesium.js');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/VRButton/VRButton.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/CesiumInspector/CesiumInspector.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/SceneModePicker/SceneModePicker.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Geocoder/Geocoder.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Geocoder/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/FullscreenButton/FullscreenButton.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/lighterShared.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/widgets.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/BaseLayerPicker/BaseLayerPicker.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/BaseLayerPicker/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/PerformanceWatchdog/PerformanceWatchdog.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/InfoBox/InfoBox.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/InfoBox/InfoBoxDescription.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/shared.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/NavigationHelpButton/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/NavigationHelpButton/NavigationHelpButton.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Animation/Animation.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Animation/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/SelectionIndicator/SelectionIndicator.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Timeline/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Timeline/Timeline.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Viewer/Viewer.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/ProjectionPicker/ProjectionPicker.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/CesiumWidget/CesiumWidget.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/CesiumWidget/lighter.css');
  app.import('node_modules/cesium/Build/CesiumUnminified/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspector.css');

  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
