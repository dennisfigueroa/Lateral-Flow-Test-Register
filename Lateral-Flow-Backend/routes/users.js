const express = require('express');
const router = express.Router(); 

//This will be the 'home page' 
router.get('/', (req, res) => {
    res.send("Home Page for All Users"); 
})

//This function will get the url, and give back the id parameter used. 
router.get('/:id', (req, res) => {
    res.send(req.params.id); 
})

module.exports = router; 