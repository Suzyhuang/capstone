/*** Require in modules here ***/
var express = require('express');
var app = express();
var events = require('./data/events.js');
var activities = require('./data/activities.js');

const bodyParser = require('body-parser'); // Uncomment for Bonus Challenge 1


/*** Use built-in Express middleware here ***/

app.use(bodyParser.urlencoded({ extended: true })); // Uncomment for Bonus Challenge 1
app.use(bodyParser.json()); // Uncomment for Bonus Challenge 1



/*** Write functions here, to be used as Express middleware ***/

function logreq(req, res, next) {
  console.log(req.method + req.url);
  next();
}

function sendData(req, res, next) {
  if (req.url.match('/events')) {
    res.send(events);
  }
  if (req.url.match('/activities')) {
    res.send(activities);
  }
}

function searchData(req, res, next) {
  var key = req.body.search;
  console.log(key);
  if (req.url.match('/events')) {
    var returnedObject = null;
    for (let i = 0; i<events.length;i++){
      let keyArray = Object.keys(events[i]);
      let values = [];
      for (let k = 0; k<keyArray.length;k++){
        values.push(events[i][keyArray[k]]);
      }
      for (let j = 0; j<values.length;j++){
        if (values[j].indexOf(key) != -1) {
          returnedObject = events[i];
        }
      }
    }
  }
  if (req.url.match('/activities')) {
    var returnedObject = null;
    for (let i = 0; i<activities.length;i++){
      let keyArray = Object.keys(activities[i]);
      let values = [];
      for (let k = 0; k<keyArray.length;k++){
        values.push(activities[i][keyArray[k]]);
      }
      for (let j = 0; j<values.length;j++){
        if (values[j].indexOf(key) != -1) {
          returnedObject = activities[i];
        }
      }
    }
  }
  res.send(returnedObject);
}


/*** Define routes here ***/
app.use(express.static(__dirname));
app.get('/events', logreq, sendData);
app.get('/activities', logreq, sendData);

app.post('/events', logreq, searchData);
app.post('/activities', logreq, searchData);

/*** Listen on a port here ***/

app.listen(3000, function() {
  console.log('listening on port 3000');
});
