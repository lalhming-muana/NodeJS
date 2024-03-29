const express = require('express')
const path = require('path')

const app = express()



// Define the paths for configuring express.js
const viewsDirectory=path.join(__dirname,'../templates/views')
const publicDirectoryPath= path.join(__dirname,'../public');
const partialsPath= path.join(__dirname,'../templates/partials')



// Setup the handlebars engine and the views directory
app.set('view engine', 'hbs'); // sets which view engine we are going to use
app.set('views',viewsDirectory) // Customize the views directory by changing the name to templates



// app.use is a way to customize the server
// Setup the static directory for serving static pages
app.use(express.static(publicDirectoryPath))


// in app.get('') the url is empty for the homepage

app.get('', (req, res)=>{
    res.render('index',{
         title: 'Weather app',
         name: 'Howard'
    });
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title: "About me",
        name: 'Howard'
    })
})


app.get('/help',(req, res)=>{
    res.render('help',{
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