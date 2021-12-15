//How Node 'imports' a module/package. 
const mongoose = require('mongoose'); 

//Going to make schema, schema just means what the user is going to look like
const UserSchema = mongoose.Schema({
    firstname: String,
    middlename: String, 
    lastname: String, 
    dateofbirth: Date, 
    gender: String, 
    email: String, 
    phone: Number, 
})

