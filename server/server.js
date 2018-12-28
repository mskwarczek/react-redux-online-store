const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, '../build')));
    server.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
}

server.listen(port, () => console.log(`Server listening on port ${port}!`));