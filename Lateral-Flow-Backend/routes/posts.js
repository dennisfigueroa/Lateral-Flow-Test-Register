const express = require('express'); 

const router = express.Router(); 

router.get('/posts', (req, res) => {
    res.send('This is the posts site'); 
});

module.exports = router; 

