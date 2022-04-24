const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(8000, () => {
    console.log('Server running in 8000 port');
});

app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/index.html'));
});

app.get ('/register', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/register.html'));
});

app.get ('/login', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/login.html'));
});