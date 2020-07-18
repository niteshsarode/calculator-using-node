const express = require('express');
const path = require('path');
const app = express(),
	  bodyParser = require("body-parser");
	  port = 3080;

const operations = [];

function calculate(operation) {
	const firstNumber = parseInt(operation.firstNumber);
	const secondNumber = parseInt(operation.secondNumber);
	const operator = operation.operator;

	if (operator == "+")
		return(firstNumber+secondNumber)
	else if(operator == "-")
		return(firstNumber-secondNumber)
	else if(operator == "/")
		return(firstNumber/secondNumber)
	else if(operator == "*")
		return(firstNumber*secondNumber)
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/operations', (req, res) => {
	console.log('api/operations called!')
	res.json(operations.slice(0,10));
});

app.post('/api/calculate', (req, res) => {
	const operation = req.body.operation;
	result = calculate(operation);
	operation.answer = result;
	operations.splice(0,0,operation);
	res.json(result.toString());
});

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`);
});