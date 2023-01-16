const express = require('express')

const app = express()

app.get('',(req, res)=>{
    res.send('Hello express')
})
//app.com
//app.help
//app.about


// The code below runs the server and will run it unless you shut it down manually

app.listen(3000, ()=>{
    console.log('The server is starting on port no: 3000');
})