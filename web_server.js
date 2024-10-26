const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions.js')
const {logger} = require('./middleware/logEvents.js')
const errorHandler = require('./middleware/errorhandler.js')
const PORT = process.env.PORT || 3500;
app.listen(PORT, console.log(`Server Listening on PORT:${PORT}`))


// Built In MiddleWare

// This middleware is used to handle data from client using form.
app.use(express.urlencoded({extended:false}))

// This middleware is used to handle JSON data from client.
app.use(express.json())

// This middleware static is used,so that the css properties & images loaded correctly.
app.use(express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))


// Customize Middleware


app.use(logger)

// Third Party Middleware --> cors


app.use(cors(corsOptions));

// Routing in Express

app.use('/', require('./routes/root.js'))
// /ggg/^/$|/newindex(.html)?-- routing is done for this url
// ggg is used before the existing url name
app.use('/ggg', require('./routes/subdir.js'))
app.use('/employees', require('./routes/api/employees.js'))


// using get to show up a html file,while calling the url

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/msdhoni',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','newindex.html'))
})




// Handling Error

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    } else if(req.accepts('json')){
        res.json({'error':"404 not found"});
    } else{
        res.type('txt').send('404 not found')
    }
})

app.use(errorHandler);