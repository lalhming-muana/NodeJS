const express = require('express')

const app = express()

// in app.get('') the url is empty for the homepage

app.get('',(req, res)=>{
    res.send('<h1>Express server starting up</h1>')
})
//app.com
//app.help
//app.about


app.get('/help',(req, res)=>{
    res.send({
        name: "Lalhming",
        age: 40
    });

})

app.get('/weather',(req, res)=>{
    res.send({
        forecast: "It is sunny",
        location: 'Aizawl'
    });

})



app.get('/about',(req,res)=>{
    res.send('This is a weather forecast website');

})

// The code below runs the server and will run it unless you shut it down manually

app.listen(3000, ()=>{
    console.log('The server is starting on port no: 3000');
})