require('dotenv').config();
const express = require('express');
const app = express();

// Use the port from the .env file or fallback to 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/login', (req, res) => {
  res.send('<h1>Hello Imdad</h1>');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
