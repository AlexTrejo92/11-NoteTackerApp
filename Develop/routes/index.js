const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    res.json(db)
}
)

router.post('/api/notes', (req, res) => {
    // console.log(req.body)
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    console.log(newNote);
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db)
})

router.delete('/api/notes/:id', (req, res) => {
    console.log(req.params)
}
)


module.exports = router;