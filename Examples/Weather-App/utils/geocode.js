const request = require('request');
const geocode =(address, callback)=>{
    // Here without using template string it will still work
    const geourl= `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGFsaG1pbmciLCJhIjoiY2xjOTJmc2tkMWxyeDN2cDZ1eHAwYjVmbyJ9.IEHEi1VIVOjB9Qy1AttvvA`

    request({url: geourl, json: true}, (error, response)=>{

        if (error){
             callback('Unable to connect to location services', undefined); 
             // this callback matches the template of line 13
             // undefined is written as there are no response data     
        }

        else if(response.body.features.length === 0){
            callback('unable to find location. Search for another place. ',undefined);
        }
        // Here this follows the template in line 13 (error, response)
        // Here undefined is written because there is no error


        else callback( undefined, {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
        })        
       console.log(response.body);

    })
    
}

module.exports = geocode
