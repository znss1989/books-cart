'use strict'

const express = require('express');
const path = require('path');

let app = express();
// for static files
app.use(express.static('public'));
// main entry point
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log("App web server listening on Port 3000...");
});