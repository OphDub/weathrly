import config from './api-key.js';

const root = 'http://api.wunderground.com';
const requestInfo = 'conditions/forecast10day/hourly/q';

function apiGet (url) {
  return fetch(url).then(response => response.json());
}

export default {
  getWeather (location) {
    return apiGet(`${root}/api/${config.key}/${requestInfo}/${location}.json`);
  }
};