//How Node 'imports' a module/package. 
const mongoose = require('mongoose'); 

//Going to make schema, schema just means what the user 
//(being pushed to DB) is going to look like
const UserSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    middlename: {type: String, required: true},
    lastname: {type: String, required: true},
    dateofbirth: {type: Date, required: true},
    gender: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
})

module.exports = mongoose.model('AllUsers', UserSchema);