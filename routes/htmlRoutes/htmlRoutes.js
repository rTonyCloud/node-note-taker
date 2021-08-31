const path = require('path');
// const { v4 } = require('uuid');
const router = require('express').Router();

// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
    
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    
})





module.exports = router;