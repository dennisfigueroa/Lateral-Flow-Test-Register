const express = require('express')
const app = express(); 
const mongoose = require('mongoose'); 
const router = express.Router(); 


//Connect to local mongoDB database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser : true});
const db = mongoose.connection;

//As soon as DB is on, log any errors if an error event is triggered. 
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

//Handle all the Requests for /users
const usersRoute = require('./routes/users');
//Use the usersRoute which will have all the routes for users. 
app.use('/users', usersRoute)

// HOME ROUTES
app.get('/', (req, res) => {
    res.send('This is the landing page.'); 
}); 

app.post('/', (req, res) => {
    res.send(req.body)
})

//How we start listening to this server. 
app.listen(3001, () => console.log("Server started"))
