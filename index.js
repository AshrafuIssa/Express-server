const express = require('express');
const path = require('path');

const app = express();
const  PORT = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/home(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

app.listen(PORT, () => console.log(`server running on ${PORT}`));
