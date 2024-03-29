// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('frontend'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
