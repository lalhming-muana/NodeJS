const request = require('request')
require('dotenv').config()

const mapbox_api_key =process.env.MAPBOX_API_KEY;
const weatherstack_api_key =process.env.WEATHERSTACK_API_KEY;
const latitude = 23.6249;
const longitude = 92.7245;

const url = `http://api.weatherstack.com/current?access_key=${weatherstack_api_key}&query=${latitude},${longitude}&units=f`

request({url: url, json: true}, (error, response)=>{
    console.log(response.body.location.name);
    console.log("it is "+response.body.current.temperature+" fahrenheit outside it feels like "+response.body.current.feelslike+" fahrenheit inside");
    console.log(response.body.current.weather_descriptions[0]);
})
