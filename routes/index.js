// Creation of a router to handle the /api paths
const router = require('express').Router();
//We install uuid an npm package to generate unique id's
const { v4: uuidv4 } = require('uuid');
// We require the db.json file to print to front end
const db = require('../db/db.json');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    res.json(db)
}
);

router.post('/api/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        // we call the uuidv4 package to generate an unique ID to each of the notes the user will add.
        id: uuidv4()
    }
    // We use push method in order to add the new note generated to the db array
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db)
});
//TODO: Use .delete method to delete notes from the application.
// router.delete('/api/notes/:id', (req, res) => {
//     console.log(req.params)
// }
// )


module.exports = router;