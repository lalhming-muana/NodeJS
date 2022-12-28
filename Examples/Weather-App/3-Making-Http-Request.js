// Go to weatherstack and register to get a free API key


// here you can use postman-request from npm
// this version of request is deprecated


const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=3034abb55d8bad1140b765253d4da48e&query=23.6249,92.7245'

request({url: url}, (error, response) => {

// the data is usually in the body section of the response

    const data = JSON.parse(response.body);
    console.log(data.current);

}) 