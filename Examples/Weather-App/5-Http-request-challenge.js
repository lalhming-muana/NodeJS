// Geocoding service (Take a location and get the latitude and logitude )
// from the API


const request = require('request')

const geocodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/AIzawl.json?access_token=APIKEYDAHTURH'

request({url: geocodeurl, json: true}, (error, response) => {



    console.log("Aizawl latitude: "+response.body.features[0].geometry.coordinates[1]);
    console.log("Aizawl longitude: "+response.body.features[0].geometry.coordinates[0]);
    

})

