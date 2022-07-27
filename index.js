const express = require('express');
const cors = require('cors');
const DomParser = require('dom-parser');

const app = express();
app.use(cors()); // using cors as middleware

const port = 8001; // arbitrary 
const parser = new DomParser();

app.get('/source/*', (req, res, next) => {
    fetch(req.params[0])
        .then(res => res.text()) // get response text from fetching RSS URL
        .then(contents => parser.parseFromString(contents, "application/xml")) // parse XML from RSS URL into visible format
        .then(data => { // process fetched RSS data
            res.send(data);
        })
        .catch(e => {
            console.error(e);
        });
});

app.listen(port, () => {
    console.log(`CORS RSS proxy running on ${port}`)
});
