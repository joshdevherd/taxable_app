const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3003);

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index', {footerAction: "Go To Calculator"})
})

app.get('/calculator', (req, res) => {
    res.render('calculator', {footerAction: "Reset Calculator"})
})

app.get('/about', (req, res) => {
    res.render('about', {footerAction: "Go To Calculator"})
})

