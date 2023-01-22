const express = require('express')
const path = require('path')

const app = express()



app.set('view engine', 'hbs'); // sets the view engine to use 

const publicDirectoryPath= path.join(__dirname,'../public');

// in app.get('') the url is empty for the homepage

// app.use is a way to customize the server
app.use(express.static(publicDirectoryPath))



//app.com
//app.help
//app.about

app.get('', (req, res)=>{
    res.render('index');
})


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




// The code below runs the server and will run it unless you shut it down manually

app.listen(3000, ()=>{
    console.log('The server is starting on port no: 3000');
})