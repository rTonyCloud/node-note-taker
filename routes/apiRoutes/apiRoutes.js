const path = require('path');
// const { v4 } = require('uuid');
const router = require('express').Router();

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.


// instead of return file
// save the notes


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

router.get('/notes', (req, res) => {
    res.send('welcome!');
    
})

router.post('/notes', (req, res) => {
        res.send('welcome!');
})

// router.post



module.exports = router;
