var sanFran = {lat: 37.7749, lng: -122.4194};

var body = document.body;

var mainDiv = document.createElement('div');
mainDiv.id = 'main';
body.appendChild(mainDiv);

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
        var url = "https://api.yelp.com/v2/search?term=food&ll="+event.latLng.lat()+","+event.latLng.lng();
        console.log(url)

        //sends it to Yelp api to get info
        let interestsDiv = document.getElementById('main');
        let eventContainer = document.createElement('div');
        interestsDiv.appendChild(eventContainer);
        let eventTitleDiv = document.createElement('div');
        eventContainer.appendChild(eventTitleDiv);
        let t = document.createTextNode(name);
        eventTitleDiv.appendChild(t);
        eventTitleDiv.className = "eventTitle"
        // let concertsDiv = document.createElement('div');
        // bandContainer.appendChild(concertsDiv);

        // const xttp = new XMLHttpRequest();
        // xttp.onreadystatechange = function() {
        //   if (xttp.readyState===4 && xttp.status ===200) {
        //     var res = JSON.parse(xttp.responseText)
        //     for ( var i = 0; i<res.length; i++){
        //       var string =  res[i].datetime+res[i].venue.name+res[i].venue.city;
        //       var eventDiv = document.createElement('div');
        //       var textEvent = document.createTextNode(string);
        //       eventDiv.appendChild(textEvent);
        //       concertsDiv.appendChild(eventDiv);
        //     }
        //   }
        // }
        // xttp.open("GET", url, true);
        // xttp.send();

        });

        // console.log(clickEvent);
 }



// console.log(clickEvent)