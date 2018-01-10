# Project: Weathrly

Primary goal for this project was to create a weather application that pulled data from Weather Underground. [Wireframe mocks](https://github.com/OphDub/weathrly/blob/master/src/Weathrly-wireframes.pdf) were also created for this project:

## Project Requirements
The project is separated into five phases. Each section breaks down general requirements.

#### Phase 1: Current Weather
Create a Current Weather component

User Interface should be able to accept mock data and display the following information:
* name of the current city
* current condition
* current day
* current temperature
* expected high and expected low for the day
* summary of what the weather is going to be like that day (“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)

Specific contraints for this phase also include:
  * Cannot use any nested if/else statements
  * Should not use anonymous functions (e.g. event listeners)
  * Use of callback functions is preferred
  * HTML must follow basic accessibility guidelines (semantic tagging, image attributes, roles)
  * No use of global variables
  * Functions cannot be longer than 8 lines (including event listeners)

#### Phase 2: 7 Hour Forecast and Location Not Found by API
Application should have a 7 hour weather forecast component. Each hour should be a card component and should display the following:
* specific hour
* image that reflects the weather
* projected temperature

Application should also handle when a user searches for a location that is not found by the API.

#### Phase 3: 10 Day Forecast
Application should have a 10 day forecast component. Each day should be a card component and should display the following:
* name of the day
* image that reflects the weather
* projected high and low temperature

#### Phase 4: Welcome Page and localStorage
Application should include the following:
* Welcome page
* Search input 

Search input should consist of the following:
  * input field
  * submit button
  * should work with both a zip code and city/state

User's location should persist after page refresh.

#### Phase 5: Auto-Complete
Application should have an auto-complete for the Search input. The auto-complete functionality is to be imported form a separate project ([Complete Me](https://github.com/OphDub/complete-me)). Auto-complete should provide suggestions to the user based on city/state or zip code.

#### Extensions
Optional extensions for this project included:

* If a user clicks on a specific day on the 10 day forecast the application should display an hourly breakdown of the forecasted weather for a 24-hour period.
  * For each hour it should display an image that reflects the weather
  * For each hour it should display the projected temperature and the hour

* Add one or two examples of Micro-Interactions found on Dribbble or Behance in your ReadMe that inspired your design

* The application is fully accessible.
  * The application can be used without a mouse
  * zero axe-core violations

* Use Sass / SCSS to style your projects

## Authors

* [**Ophus Wong**](https://github.com/ophdub) 
* [**Michelle Hoffman**](https://github.com/michellehoffman) 

## Additional Notes
This repo requires an API key from [WeatherUnderground](https://www.wunderground.com/weather/api/). Api key should be placed in a separate local file using this file path:

```
weathrly/lib/Api-key.js
```


Recommended template for Api-key.js file to function with this repo as follows:

```
const config = {
  key: [your Weather UnderGround API key here],
}

module.exports = config;
```

It also recommended that api keys are not exposed on a public repo and should be added to your local gitignore. Resources used for this project include:

* [Atlassian Git Ignore Tutorial](https://www.atlassian.com/git/tutorials/gitignore)
* [derzorngottes' gist](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25)

## Acknowledgements

* [derzorngottes](https://github.com/derzorngottes): Gist on ignoring API keys

## Installing this Repo

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```

