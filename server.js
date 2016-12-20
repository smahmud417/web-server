// --Section 5, Lecture 45 --Express server
/*
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello Shaheed! \n Hello Express');
});

// --- Challenge 1----

app.get('/about', function(req, res){
	res.send('About us');
});

app.listen(3000);
*/
// --Section 5, Lecture 46 --Express server --- Serving up Static Web sites
/*
var express = require('express');
var app = express();
var PORT = 3000 ;

app.get('/about', function(req, res){
	res.send('About us');
});

// to find root directory
console.log('User directory name: ' + __dirname);

// to pass folder name that we want to expose 
app.use(express.static(__dirname + '/public'))

app.listen(PORT, function(){
	console.log('Express server started on port: ' + PORT );
}); 

*/
// --Section 5, Lecture 47 --Express server --- Adding Middleware

var express = require('express');
var app = express();
var PORT = 3000 ;
var date ;

var middleware = require('middleware.js');

//app.use(middleware.requireAuthentication);
// Geeting request name & URL
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About us!');
});

// to pass folder name that we want to expose 
app.use(express.static(__dirname + '/public'))

app.listen(PORT, function(){
	console.log('Express server started on port: ' + PORT );
}); 
