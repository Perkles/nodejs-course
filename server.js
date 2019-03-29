const http = require('http');
const express = require('express');
const app = express();

app.listen(3000, function(){
	console.log('Server running');
});

app.get('/', function(request, response){
	response.send(
		`
		<h1> Express </>
		`
	);
});