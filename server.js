const http = require('http');

const server = http.createServer(function(request, response){
	response.end(`
			<h1> vai tomar no cu olho no lance </>


		`
		);
});
server.listen(3000);