import config from './Api-key.js';

const root = 'http://api.wunderground.com';

function apiGet (url) {
  return fetch(url).then( response => response.json() )
}

export default {
  getWeather (location) {
    return apiGet(`${root}/api/${config.key}/conditions/forecast10day/hourly/q/${location}.json`)
  }
}