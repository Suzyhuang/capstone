var sanFran = {lat: 37.7749, lng: -122.4194};

var body = document.body;

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


// var map1 = google.maps.Map(document.getElementById('map');

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: sanFran,
    });
    var marker = new google.maps.Marker({
      position: sanFran,
      map: map
    });
    // map.addListener('click',function(n){
    //   console.log(n.latLng)
    // })

    //everytime you click, it will initiate this callback function
    var clickEvent = google.maps.event.addListener(map, 'click', function(event) {
    // console.log("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());

    //makes the url to feed to yelp
    // var url = "https://api.yelp.com/v3/businesses/search?text=del&latitude="+event.latLng.lat()+"&longitude="+event.latLng.lng();
    // var url = "https://api.yelp.com/v3/businesses/search?text=del&latitude="+event.latLng.lat()+"&longitude="+event.latLng.lng();
    var url = "https://api.yelp.com/v3/businesses/search?latitude=37.7749&longitude=-122.4194";
        // https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972
         
    var data = "client_id=zF7C-v_Znn3ZGKrDTXFD3A&client_secret=21uirI09DQHyUEiYXc9YSmwuor2VCJ193GTbxIUaS2XXf9tew7VkL80hyVhjU2UT&grant_type=client_credentials";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://api.yelp.com/v3/businesses/search?latitude=37.7749&longitude=-122.4194");
    xhr.setRequestHeader("authorization", "Bearer XknB0X4UJx-0D5mSvz3P20P67Ohv4PqZXx5ff3unidzLf7xcPN6Ae3td5hKBfnqEb6B1vPpmRz7EoaqzzU7Lpg52bWzz6WBive2cAe9LPfCLfJtL4NDFrC2BueCVWXYx");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "dd02cad7-5c0a-98ce-bbe1-3f5884f9e241");
    xhr.send(data);
        //sends it to Yelp api to get info
      // const xmlHttp = new XMLHttpRequest(); //used Postman to get authorization token
      // xmlHttp.open("POST", 'https://api.yelp.com/oauth2/token', true);
      // xmlHttp.setRequestHeader('Authorization', 'Bearer XknB0X4UJx-0D5mSvz3P20P67Ohv4PqZXx5ff3unidzLf7xcPN6Ae3td5hKBfnqEb6B1vPpmRz7EoaqzzU7Lpg52bWzz6WBive2cAe9LPfCLfJtL4NDFrC2BueCVWXYx');


      // xmlHttp.onload = function() {
      //   console.log("loaded")
      //   console.log(JSON.parse(xmlHttp.response))
        // var response = JSON.parse(xmlHttp.response);
        // const stuff = document.createElement('div');
        // stuff.id = 'stuff';
        // if (response == null) {
        //   stuff.textContent += "None";
        // } else {
        //   var what = response.what;
        //   var type = response.type;
        //   var where = response.where;
        //   stuff.textContent += "I will be "+type + " "+ what +" on "+where;
        // }
        // body.appendChild(stuff);
        // console.log('hi')
    // const xttp = new XMLHttpRequest();

    // xttp.onreadystatechange = function() {
    //     console.log('hi')
    //     if (xttp.readyState===4 && xttp.status ===200) {
    //         var res = JSON.parse(xttp.responseText)
    //         console.log(res)
    //     // for ( var i = 0; i<res.length; i++){
    //     //   var string =  res[i].datetime+res[i].venue.name+res[i].venue.city;
    //     //   var concertDiv = document.createElement('div');
    //     //   var textEvent = document.createTextNode(string);
    //     //   eventDiv.appendChild(textEvent);
    //     //   eventsDiv.appendChild(concertDiv);

    //     }
    // };
    // // }
    // xttp.open("GET", url, true);
    // xttp.setRequestHeader('Access-Control-Allow-Origin','Content-type')
    // xttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization');
    // xttp.setRequestHeader('Access-Control-Allow-Origin', '*');

    // xttp.setRequestHeader('Content-Type', 'application/json' );

    // xttp.withCredentials = true;

    // console.log(xttp)
    // xttp.setRequestHeader(, false);
    // xttp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With', content-type, Authorization)
    // xttp.setRequestHeader('Authorization', 'Bearer XknB0X4UJx-0D5mSvz3P20P67Ohv4PqZXx5ff3unidzLf7xcPN6Ae3td5hKBfnqEb6B1vPpmRz7EoaqzzU7Lpg52bWzz6WBive2cAe9LPfCLfJtL4NDFrC2BueCVWXYx', false);
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