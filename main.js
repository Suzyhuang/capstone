var sanFran = {lat: 37.7749, lng: -122.4194};

var body = document.body;

// const main = document.getElementById('main');

var mainDiv = document.createElement('div');
mainDiv.id = 'main';
body.appendChild(mainDiv);

var eventContainer = document.createElement('div');
eventContainer.id = 'eventContain';
mainDiv.appendChild(eventContainer);
let eventTitleDiv = document.createElement('div');
eventContainer.appendChild(eventTitleDiv);
let t = document.createTextNode('You should try...');//creating text
eventTitleDiv.appendChild(t);
eventTitleDiv.className = "eventTitle" //to make things different font

let eventsDiv = document.createElement('div');
eventContainer.appendChild(eventsDiv);

// var clickEventTest = google.maps.event.addListener(map, 'click', function(event) {
//         console.log("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
//         console.log(clickEventTest);
//         var output = new Object();
//           output.search = searchInput.value;

//           const xmlHttp = new XMLHttpRequest();
//           xmlHttp.open("POST", '/events', true);
//           xmlHttp.setRequestHeader('Content-type', 'application/json');
//           xmlHttp.onload = function() {
//             var response = JSON.parse(xmlHttp.response);
//             const stuff = document.createElement('div');
//             stuff.id = 'stuff';
//             if (response == null) {
//               stuff.textContent += "None";
//             } else {
//               var what = response.what;
//               var type = response.type;
//               var where = response.where;
//               stuff.textContent += "I will be "+type + " "+ what +" on "+where;
//             }
//             body.appendChild(stuff);
//           }

//           xmlHttp.send(JSON.stringify(output));

//         });
//     };


// var map1 = google.maps.Map(document.getElementById('map');

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: sanFran,
    });
    // var marker = new google.maps.Marker({
    //   position: sanFran,
    //   map: map
    // });

    // map.addListener('click',function(n){
    //   console.log(n.latLng)
    // })

    //everytime you click, it will initiate this callback function
    var clickEvent = google.maps.event.addListener(map, 'click', function(event) {
        console.log("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
    // var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDgv5sWpAozwYjqs-bz-nZkHEzFuzD5RNI'


        const xttp = new XMLHttpRequest();
        xttp.open("GET", url, true);
        xttp.send();

        // var xhr = new XMLHttpRequest();
        // xhr.open('GET',
        //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&AIzaSyDgv5sWpAozwYjqs-bz-nZkHEzFuzD5RNI');
        // xhr.setRequestHeader('Authorization',
        //   'Bearer ' + 'AIzaSyDgv5sWpAozwYjqs-bz-nZkHEzFuzD5RNI');
        // xhr.send();






    //makes the url to feed to yelp
    
        //sends it to Yelp api to get info
    // const xttp = new XMLHttpRequest();

    // xttp.onreadystatechange = function() {
    //     console.log('checking state')
    //     if (xttp.readyState===4 && xttp.status ===200) {
    //         var res = JSON.parse(xttp.responseText)
    //         console.log(res)
    // //     // for ( var i = 0; i<res.length; i++){
    // //     //   var string =  res[i].datetime+res[i].venue.name+res[i].venue.city;
    // //     //   var concertDiv = document.createElement('div');
    // //     //   var textEvent = document.createTextNode(string);
    // //     //   eventDiv.appendChild(textEvent);
    // //     //   eventsDiv.appendChild(concertDiv);

    //     }
    // };
    // // // }
    // xttp.open("GET", url, true);
    // // xttp.setRequestHeader('Access-Control-Allow-Origin','Content-type')
    // // xttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization');
    // // xttp.setRequestHeader('Access-Control-Allow-Origin', '*');

    // xttp.setRequestHeader('Content-Type', 'application/json' );

    // // xttp.withCredentials = true;

    // // console.log(xttp)
    // // xttp.setRequestHeader(, false);
    // // xttp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With', content-type, Authorization)
    // // xttp.setRequestHeader('Authorization', 'Bearer XknB0X4UJx-0D5mSvz3P20P67Ohv4PqZXx5ff3unidzLf7xcPN6Ae3td5hKBfnqEb6B1vPpmRz7EoaqzzU7Lpg52bWzz6WBive2cAe9LPfCLfJtL4NDFrC2BueCVWXYx', false);
    // xttp.send();
      // }
      // xmlHttp.send();
          // xmlHttp.send(JSON.stringify(url));

        // const xttp = new XMLHttpRequest();
        // // xttp.onreadystatechange = function() {
        // // if (xttp.readyState===4 && xttp.status ===200) {
        // //      var res = JSON.parse(xttp.responseText)
        // //     // for ( var i = 0; i<res.length; i++){
        // //     //   var string =  res[i].datetime+res[i].venue.name+res[i].venue.city;
        // //     //   var concertDiv = document.createElement('div');
        // //     //   var textEvent = document.createTextNode(string);
        // //     //   eventDiv.appendChild(textEvent);
        // //     //   eventsDiv.appendChild(concertDiv);

        // //     // }
        // //     console.log(res)
        // //   }
        // // }
        // xttp.open("GET", url, true);
        // xttp.send();

    });

        // console.log(clickEvent);
 }



// console.log(clickEvent)