'use strict';
 
var express = require('express');
var http = require('http');
 
var app = express();
app.use(express.static( __dirname + '/app'));
app.set('port', process.env.PORT || 8000);

// Node API =================================

app.get('/api/yogaclasses', function(req, res) {
	var yogaClasses = require(__dirname + '/app/classes/classes.json');
	res.json(yogaClasses);
});

// Listen   =================================
 
var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server running on ' + app.get('port'));
});