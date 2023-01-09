
// Here we learn how to customize the request 

// to change unit add &unit=f at the end of the url string
// to learn how to change the units read the documentation


const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=3034a48e&query=23.6249,92.7245&units=f'

request({url: url, json: true}, (error, response) => {

// the data is usually in the body section of the response

// print a small forecast to the user
// print the degree outside, and chance of rain.

    console.log("it is "+response.body.current.temperature+" fahrenheit outside it feels like "+response.body.current.feelslike+" fahrenheit inside");
    console.log(response.body.current.weather_descriptions[0]);

})

