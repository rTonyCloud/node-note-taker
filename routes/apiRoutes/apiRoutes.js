const {
    readFile,
    writeFile
} = require('fs');
const { join } = require('path');
const path = require('path');
const { v4 } = require('uuid');
const router = require('express').Router();

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.


// instead of return file
// save the notes


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// router.get('/notes', (req, res) => {
//     res.send('welcome!');

// })

// router.post("/notes", (req, res) => {
//     readFile("", "utf8", function (err, data) {
//         let noteData = [];
//         if (err) {
//             throw err;
//         }
//     })
// })



// app.get
router.get("/notes", (req, res) => {
    readFile("./db/db.json", "utf8", function (err, data) {
        let apiNote = [];
        if (err) {
            throw err;    
        };
        apiNote = JSON.parse(data);
        return res.json(apiNote);
    });
});

// router.post

router.post("/notes", (req, res) => {
    let postNotes = req.body;
    readFile("./db/db.json", "utf8", function (err, data) {
        if (err) {
            console.log('err at database ${err}');
        } else {
            if (data.length > 0) {
                noteObj = JSON.parse(data);
            } else {
                noteObj = [];
            };
            postNotes.id = v4().substring(0);
            noteObj.push(postNotes);
        }
        writeFile("./db/db.json", JSON.stringify(noteObj), "utf8", (err) => {
            if (err)
                throw err;
            return res.json(postNotes);
        })
    })
});

// DELETE /api/notes/:id
router.delete("/notes/:id", (req, res) => {
    readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        let delObject = JSON.parse(data);
        // parse an immutable database.json 
        const deleteThis = delObject.findIndex((note) => note.id === req.params.id);

        delObject.splice(deleteThis, 1);
        const postObject = writeFile("./db/db.json", JSON.stringify(delObject), (err) => {
            if (err) {
                throw err;
            }
            console.log("Note deleted");
        });
        res.send(postObject);
    });

});





module.exports = router;