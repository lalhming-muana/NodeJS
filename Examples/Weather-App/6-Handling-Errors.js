//This file is for handling errors

const request = require('request')

const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGFsaG1pbmciLCJhIjoiY2xjOTJmc2tkMWxyeDN2cDZ1eHAwYjVmbyJ9.IEHEi1VIVOjB9Qy1AttvvA'

request({url: geourl, json: true}, (error,request)=>{

    if(error){
        console.log('Unable to connect to mapbox.com \nplease check your internet connection');
    }
    else{
        console.log(request.body.features[0].geometry.coordinates);
    }
  
}

)