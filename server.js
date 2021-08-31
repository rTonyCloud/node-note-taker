const express = require('express')
const { v4 } = require('uuid');
const path = require('path');


const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js');
const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
})


// Getting Started
// The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.


// Bonus
// You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
