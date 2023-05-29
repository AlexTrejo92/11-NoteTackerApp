// Variable to import Express.js
const express = require('express');
// Variable to import built-in Node.js package 'path' to resolve path of files that are loca ted on the server
const path = require('path');
// this variable initializes an instance of Express.js
const APIroutes = require('./routes/index.js')
const app = express();
// This variable specifies on which port the Express.js server will run
const PORT = 3001;

// Middleware pointing to the public folder &
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', APIroutes);
// app.use('/api', api);


// GET Route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to index.html
// app.get('*', (req, res) =>
//     res.sendFile(path.join(_dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);