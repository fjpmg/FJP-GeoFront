import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from '../config/environment';
export default Loopback.extend({
  loginEndpoint: `${config.fjpGeoBack}/api/usuarios/login`,
});
