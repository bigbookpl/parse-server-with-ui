var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  // cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'MASTER_KEY', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://localhost:1338/parse",
      "appId": "myAppId",
      "masterKey": "MASTER_KEY",
      "appName": "MyApp"
    }
  ]
});



// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
app.use('/dashboard', dashboard);

// var httpServer = require('http').createServer(app);
// httpServer.listen(4040);

app.listen(1338, function() {
  console.log('parse-server-example running on port 1338.');
});
