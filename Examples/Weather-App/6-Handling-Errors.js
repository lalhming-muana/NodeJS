//This file is for handling errors

const request = require('request')

const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=tokendahjtuir'


/*
In the context of the request module in Node.js, the json option is used to specify that the response body should be parsed as JSON.

When you make an HTTP request using the request module, the response object that is passed to the callback function will contain the data returned by the server. By default, the response.body property will contain the raw data as a buffer (a chunk of binary data). If you set the json option to true, the request module will parse the data as JSON and set the response.body property to the resulting JavaScript object.
*/
request({url: geourl, json: true}, (error,response)=>{

    if(error){
        console.log('Unable to connect to mapbox.com \nplease check your internet connection');
    }
    else if (response.body.error){
        console.log('unable to find location');
    }
    else{
        console.log('response successful');
    }
  
} 

)