// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city/landon',
  headers: {
    'X-RapidAPI-Key': 'b84eba0c0bmshed761cd57ecf37ep137c7ejsn6ae790ae5d90',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}