/** 
In Node.js, a callback is a function that is passed as an argument to another function and is executed after the first function completes. The callback abstraction allows for non-blocking, event-driven programming, which is well-suited to building highly concurrent applications. This is because a callback function is called only after an event has occurred, such as a file being read or a network request completing, rather than waiting for the event to occur before continuing execution. This approach allows Node.js to handle multiple events simultaneously and improves the performance of the application.
*
*/

const request = require("request");



const geocode =(address, callback)=>{
    const geourl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibGFsaG1pbmciLCJhIjoiY2xjOTJmc2tkMWxyeDN2cDZ1eHAwYjVmbyJ9.IEHEi1VIVOjB9Qy1AttvvA'

    request({url: geourl, json: true}, (error, response)=>{

        if (error){
             callback('Unable to connect to location services', undefined);      
        }

        else if(response.body.features.length === 0){
            callback('unable to find location. Search for another place. ',undefined);
        }

    })
    
}


geocode('Philadelphia', (error, data)=>{
    console.log('Error: ',  error);
    console.log('Data: ', data);
})

