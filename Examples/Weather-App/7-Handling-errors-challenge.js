const request = require('request');

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Aizawl.json?access_token=api_key_dah tur"

/*
1. Setup an error handler for low level error.
2. Test by disbling network and testing the app.
3. Setup error handling for no matching results.
4. Test by altering the search term and running the app. 

*/

request({url: url, json: true}, (error,response) =>{
    
   

    //1. Setup an error handler for low level error.
    
    if(error){
        console.log('Unable to connect to mapbox \n Please check your internet connection');
    } 
    else if(response.body.features.length === 0){
            console.log('Unable to find location. Try again');
    }
    
    else{
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
        console.log('latitude: '+latitude);
        console.log('longitude: '+longitude);
    }
    
    if(response.body.error){
        console.log('Unable to find location');
    }
    
    
})

