const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello, Jenkins and Node.js');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

function orderBurger(callback){
	console.log('Order placed. Waiting for the burger...');
	
	setTimeout(() => {
		callback();
	}, 2000);
}
function burgerReadyCallBack(){
	console.log('Burger is ready!');
}
orderBurger(burgerReadyCallBack);
