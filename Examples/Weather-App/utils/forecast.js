const request = require('request')
require('dotenv').config()
const forecast = (latitude,longitude,callback) => {

const mapbox_api_key =process.env.MAPBOX_API_KEY;
const weatherstack_api_key =process.env.WEATHERSTACK_API_KEY;

const url = `http://api.weatherstack.com/current?access_key=${weatherstack_api_key}&query=${latitude},${longitude}&units=f`

request({url: url, json: true}, (error, response)=>{
    
    if (error){
        callback("Unable to connect to the internet..",undefined);}
    else if(response.body.error){
        callback('You entered a wrong latitude or longitude',undefined);
    }
    else {
        callback(error, "it is "+response.body.current.temperature+" fahrenheit outside it feels like "+response.body.current.feelslike+" fahrenheit inside"+" The weather is: "+response.body.current.weather_descriptions[0])
    }
})
}
module.exports = forecast