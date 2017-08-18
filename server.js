/*** Require in modules here ***/
var express = require('express');
var app = express();
var path = require('path');
var request = require('express');


const Factual = require('factual-api');
const factual = new Factual('Jr4VU8j7IWGNP3P8tg2x21WVC58Opn0w7Zr5EUeo', 'rYkYbju3AROrBb3E4HM9PriEsCfrgzXvoTaQNJet');



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
  res.send();
  // if (req.url.match('/events')) {
  //   res.send(events);
  // }
  // if (req.url.match('/activities')) {
  //   res.send(activities);
  // }
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

  res.send(returnedObject);
}


/*** Define routes here ***/
app.use(express.static(__dirname)); //Allow access with app.use
// app.get('/', logreq, sendData);
// // app.get('/activities', logreq, sendData);

// app.post('/', logreq, searchData);
// app.post('/activities', logreq, searchData);
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/capstone.html'));
});
let data;
let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDgv5sWpAozwYjqs-bz-nZkHEzFuzD5RNI'

app.get(url, function(req, res){
  // data = req.body;
  res.send('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDgv5sWpAozwYjqs-bz-nZkHEzFuzD5RNI')
  console.log('testing');
  // res.send(data);
  res.end();
})

// app.post(url,function(req,res)){
//   res.send(data);
//   console.log(req);
//   console.log(res);
// }

/*** Listen on a port here ***/

app.listen(5000, function() {
  console.log('listening on port 5000');
});
