
// Geocoding service (Take a location and get the latitude and logitude )
// from the API


const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=3034abb55d8bad1140b765253d4da48e&query=23.6249,92.7245&units=f'

request({url: url, json: true}, (error, response) => {



    console.log("it is "+response.body.current.temperature+" fahrenheit outside it feels like "+response.body.current.feelslike+" fahrenheit inside");
    console.log(response.body.current.weather_descriptions[0]);

})

