const express = require('express');
const router = express.Router(); 
const User = require('../models/Users');

//Get back all the posts
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users);
    }
    catch(err) {
        res.json({message: err})
    }
})

//Get back a specific post 
router.get('/:id', async(req, res) => {
    try {
        const specificUser = await User.findById(req.params.id)
        res.json(specificUser); 
    }   
    catch(err) {
        res.json({message:err})

    }
})

//This function will get the url, and give back the id parameter used. 
router.get('/:id', (req, res) => {
    res.send(req.params.id); 
})

//This function will SUBMIT a post method. 
router.post('/', async (req, res) => {
   const userPost = new User({
    firstname: req.body.firstname, 
    middlename: req.body.middlename, 
    lastname: req.body.lastname, 
    dateofbirth: req.body.dateofbirth, 
    email: req.body.email, 
    phone: req.body.phone,
   });
   try {
   const savedUserPost = await userPost.save()
   res.json(savedUserPost); 
   } catch (err) { 
       res.json({message: err}); 
   } 

// This will delete a user based on the id from the database. 
router.delete('/:id',  async (req, res) => {
    try {   
        const removeUser = await User.deleteOne({_id: req.params.id}); 
        res.json(removeUser); 
    }
     catch (err) {
         res.status(404).json({message: err}); 

     }
}
)
// This will update a user based on the ID from the database. 
router.patch('/:id',  async (req, res) => {
    try {
        const updatedUser = await User.updateOne({_id: req.params.id},{$set: { firstname: req.body.firstname}}); 
        res.json(updatedUser); 
    }
     catch (err) {
         res.status(404).json({message: err}); 

     }
}
)



   /* 
   
   ## This was the old code, using promises>then>catch but async/await is much cleaner. 

   userPost.save() -> save was a promise that when resolved would go to then. 

   //if successful, this will respond with a response of the json data. 
   
   .then(data => {
       res.status(200).json(data)
   })
   
   //this will catch any error and respond with a 404 and error code
   
   .catch(err => {
    res.status(404).json({message: err})
   })*/



});


module.exports = router; 