/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'fjp-geo-front',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:loopback',
    authenticationRoute: 'entrar',
    routeAfterAuthentication: 'ferramenta',
    routeIfAlreadyAuthenticated: 'ferramenta'
  };

  ENV.emblemOptions = {
    blueprints: false
  }


  if (environment === 'development') {
    ENV.fjpGeoBack = 'http://18.204.103.104:3000';
    ENV.fjpGeoServer = 'http://18.204.103.104:8080/geoserver';
    //    ENV.fjpGeoBack = 'http://localhost:3000';
    //    ENV.fjpGeoServer = 'http://localhost:8080/geoserver/fjpgeoserver';
    ENV.namespace = 'api';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.namespace = 'api';
    ENV.fjpGeoBack = 'http://fjp.verkn.com.br:3000';
    ENV.fjpGeoServer = 'http://fjp.verkn.com.br:8080/geoserver/fjpgeoserver';
  }

  return ENV;
};
