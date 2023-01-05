//This file is for handling errors

const request = require('request')

const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=tokendahjtuir'

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