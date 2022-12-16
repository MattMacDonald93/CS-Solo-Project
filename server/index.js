const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('hello world')
});

app.listen(3001, () => {
    console.log('server started on 3001')
});
