var express = require('express');
var app = express();
var date_generator = require('./date_generator');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/:appDate', function(request, response) {
	var paramDate = request.params.appDate;
	if (!paramDate)
  		response.render('index.html');
  	else
  		response.writeHead(200, { 'Content-Type': 'application/json' });
  		response.end(date_generator.getJsonDates(paramDate));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
