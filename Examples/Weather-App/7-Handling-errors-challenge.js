
const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=APIKEY'

request({url: url},(error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data);
})