import apiKey from './Api-key.js';

const root = 'http://api.wunderground.com';

function apiGet (url) {
  return fetch(url).then( response => {
    response.json()
  })
}

export default {
  getWeather () {
    return apiGet(`http://api.wunderground.com/api/bd3ad8f9c9feb114/conditions/q/CA/San_Francisco.json`)
  }
}