/****************************************************************
                       HTML, CSS, and DOM
****************************************************************/

/*** Single Page Appliation - Profile Page ***/

/*
CHALLENGE 1: TITLE

  1a) MANIPULATION

      In this file, using JavaScript:

      1)  Target the <title> and change its text so it no longer says "Codesmith
          Summer Academy of Code - Day 2" but instead says your name.
*/

let titleName = document.getElementsByTagName('title');
titleName[0].innerHTML = "Suzy&Jessica";
/*
CHALLENGE 2: NAVBAR

  2a) CREATION

      In this day-2-main-j.js file, using JavaScript:

      1)  Create a new <div> and set the id to 'nav'.

      2)  Append the 'nav' <div> to the existing 'container' <div>.

      3)  Create five buttons. Customize them as such:
  
          For each of the five text-id pairs listed below:

          text: INTRO             id: 'nav-intro'
          text: EDUCATION         id: 'nav-edu'
          text: PUBLICATIONS      id: 'nav-pubs' (or any other topic like)
          text: INTERESTS         id: 'nav-interests'
          test: CONTACT           id: 'nav-contact'

          a)  Set the <button> id to the corresponding id given above.
          b)  Set the <button> class to 'navlink' for all except the INTRO <button>.
              Set the INTRO <button> class to 'navlink navactive'.
          c)  Set the <button> text content to the corresponding text.
          d)  Append the <button> to the 'nav' <div>.

  2b) STYLING

      In the day-2-style-j.css file (also known as a stylesheet):

      1)  Make the necessary CSS rule(s) targeting the 'nav' <div> to center the nav
          buttons on the page. There are multiple ways to center elements in CSS, such as
          CSS3 Flexible Box (also known as 'flexbox'). Flexbox is native to major modern
          browsers.

      2)  Make the necessary CSS ruleset to target all elements with a 'navlink' class
          (knowing that only our buttons are in that category) and give them:

          a)  Spacing in between the buttons (possible tools are the 'margin' setting or
              flexbox).
          b)  A font size of 1.5em. The 'em' size system is preferred over 'px' (pixels)
              because it allows users to easily change the font size in their preferences.
          c)  No borders.
          d)  No outline (Outlines generally show up as a border around the button after
              clicking on them.)
          e)  A different font color for the text on each button on mouse hover.

      3)  Set the font of the text of the buttons to a non-standard font (one that is not
          already found on most computers, including your own). To do this:

          a)  Use @import (at the beginning of the CSS stylesheet) to instruct the browser
              to load a non-standard font from a CDN (content delivery network). The @import
              statement is generally placed at the top of the file to ensure that any
              reference to that font is understood by the browser. One such place to find
              free non-standard fonts that are CDN-hosted is https://fonts.google.com/
          b)  Implement a CSS rule that sets the font-family for text in the 'nav' <div> to
              the non-standard chosen.
*/
let navbar = document.createElement('div');
navbar.id = 'nav';
let cont = document.getElementById('container');
cont.appendChild(navbar);

function createButton(idtext, texts, classes='navlink') {
  let buttonElement = document.createElement('BUTTON');
  buttonElement.id = idtext;
  buttonElement.className = classes
  let textName = document.createTextNode(texts);
  buttonElement.appendChild(textName);
  return navbar.appendChild(buttonElement);
}

createButton('nav-intro', 'INTRO', 'navlink navactive');
createButton('nav-edu', 'EDUCATION');
createButton('nav-pubs', 'PUBLICATIONS');
createButton('nav-interest', 'INTERESTS');
createButton('nav-contact', 'CONTACT');



/*
CHALLENGE 3: MAIN

  3a) CREATION

      In this file, using JavaScript:

      1)  Create a new <div> and set the id to 'main'.

      2)  Append the 'main' <div> to the existing 'container' <div>.

      3)  Create five divs. Customize them as such:
      
          For each of the five text-id pairs listed below (corresponding to the five topics
          created in the nav bar):

          text: (Text giving an intro about yourself)                         id: 'main-intro'
          text: (Text giving your education history)                          id: 'main-edu'
          text: (Text describing your published work / or anything you like)  id: 'main-pubs'
          text: (Text about things that interest you)                         id: 'main-interests'
          text: (Text showing your contact information or social media)       id: 'main-contact'

          a)  Set the <div> id to the corresponding id.
          b)  Set the <div> class to 'maindiv' for all except the INTRO <div>.
              Set the INTRO <div> class to 'maindiv mainactive'.
          c)  Set the <div> text content to the corresponding text.
          d)  Append the <div> to the 'main' <div>.

  3b) STYLING

      Styling will now be used to aid in functionality purposes. Implement the following in the
      day-2-style-j.css file:

      1)  Navlink highlighting. The navlink relating to the currently selected topic will be highlighted,
          while the other navlinks will remain black.

          a)  Make a ruleset targeting all elements with the 'navlink' class and set the font color to
              black. This will default all text on our navlink buttons to black.
          b)  Make a ruleset targeting all elements with a 'navactive' class (knowing that there is only
              one, and there should only be one at any point in time), and set the font color to blue.
              This will result in only the selected navlink topic being blue, while all other navlink
              topics are black. It is important that the 'navactive' ruleset comes AFTER the ruleset for
              all 'navlink' class elements, so that the 'navactive' ruleset overrides the 'navlink'
              ruleset when both are present on one element.

      2)  Main <div> showing only the selected topic. When a topic on the navlink is selected (by click
          or by default on loading of the page, only the <div> (with the 'maindiv' class) describing
          that selected topic should be shown. When a different navlink is clicked, that navlink's
          corresponding 'maindiv' <div> should be shown while all the other 'maindiv' <divs> are hidden.
          This enables us to have a Single Page Application (SPA) - clicking links (or the equivalent of
          a link) will not take the user off the page, but instead show a different <div> that is persisting
          in memory.

          a)  Make a ruleset targeting all elements with the 'maindiv' class and set the display to 'none'.
              This will default all every 'maindiv' <div> to be invisible.
          b)  Make a ruleset targeting elements with the 'mainactive' class (knowing that there is only
              one, and there should only be one at any point in time), and set the 'display' to ''inherit''.
              This will default the 'display' field to whichever value it inherits from its parent element,
              which in turn should result in showing the 'maindiv' <div> that has the 'mainactive' class,
              while every other 'maindiv' <div> is invisible. It is important that the 'mainactive' ruleset
              comes AFTER the ruleset for all 'maindiv' class elements, so that the 'mainactive' ruleset
              overrides the 'maindiv' ruleset when both are present on one element.
*/

let main = document.createElement('div');
main.id = 'main';
cont.appendChild(main);

function createDiv(idtext, texts, classes='maindiv') {
  let newDiv = document.createElement('div');
  newDiv.id = idtext;
  newDiv.className = classes;
  let textName = document.createTextNode(texts);
  newDiv.appendChild(textName);
  return main.appendChild(newDiv);
}

createDiv('main-intro', 'Text giving an intro about yourself', 'maindiv mainactive');
createDiv('main-edu', 'Text giving your education history');
createDiv('main-pubs', 'Text describing your published work');
createDiv('main-interest', 'Text describing things that interest you');
createDiv('main-contact', 'Text showing your contact information');

// function turnOnText() {
// let active = document.getElementsByClassName('mainactive');
// active[0].className('blue');
// this.className = 'maindiv mainactive'
// console.log(active[0])
// }
// document.getElementsByClassName('maindiv').addEventListener('click', turnOnText());

/*
CHALLENGE 4: NAVBAR CLICK EVENTS

  4a) FUNCTIONALITY

      Although the styles are now set up to highlight / unhighlight navlinks and show / hide maindivs
      based on CSS class assignments, there is still a lack of the functionality of actually changing
      the CSS class assignments when a navlink is clicked, which would trigger the DOM to repaint based
      on the style rules that follow the CSS classes, in turn highlighting / unhighlighting navlinks,
      and showing / hiding maindivs. To enact this functionality:

      1)  Keeping references to the most recently selected navlink and maindiv will help unhighlight the
          currently hightlighted navlink and hide the shown maindiv when a different navlink is clicked,
          without needing to traverse through all navlinks and maindivs. So to do this:

          a)  Create two variables, 'selectedNav' and 'shownMain', to reference the currently selected
              navlink and the currently shown 'maindiv' <div>.
          b)  Immediately assign these variables to the INTRO navlink (id: 'nav-intro') and the maindiv
              associated with it (id: 'main-intro'), so the INTRO page is the page that will show by
              default when the page loads.

      2)  To add an event listener to every navlink, so that when it is clicked it will handle all
          highlighting / unhighlighting and showing / hiding functionality, every navlink must be first
          targeted. To implement this event listener on every navlink:
          
          a)  To conveniently target all the navlinks, collect all elements with a 'navlink' into an array.
              Be aware that the return value of an object that is formulated from collecting multiple elements
              from the DOM is an array-like object, not a real array. To use native array methods, Array.from
              can be utilized to convert an array-like object to a real array.
          b)  For every navlink in the array, add an event listener for the 'click' event, assigning it a
              function that will handle our CSS class re-assignments. The function that is passed into the
              method that adds listeners will need to:

              1)  Create a reference to the 'maindiv' <div> that corresponds to the navlink being clicked
                  upon and name it 'mDiv'. The naming convention of the 'id' fields of the navlink and 'maindiv'
                  <div> should help. To keep track of what navlink is being clicked upon, use the event object
                  that will be passed into the function that will be run on-click.
              2)  Using the 'shownMain' variable created earlier, set the class of the shown maindiv to
                  'maindiv', so it will no longer be 'maindiv mainactive';
              3)  Set the 'mDiv' class to 'maindiv mainactive' so the browser will show it on the DOM in
                  accordance with the CSS rules defined earlier, concerning the display being set to 'inherit'
                  vs 'none'.
              4)  Re-assign the 'shownMain' variable to point to 'mDiv' to reflect that it is now the shown
                  'mainDiv' <div>, which is important for future click events.
              5)  Using the 'selectedNav' variable created earlier, set the class of the highlighted navlink to
                  'navlink', so it will no longer be 'navlink navactive';
              6)  Set the 'mDiv' class to 'navlink navactive' so the browser will highlight it on the DOM in
                  accordance with the CSS rules defined earlier, concerning the font color property.
              7)  Re-assign the 'selectedNav' variable to point to the navlink being clicked (which can be
                  referenced through the event object) to reflect that it is now the highlighted navlink, which
                  is important for future click events.
*/
let selectedNav = document.getElementById('nav-intro');
// console.log(selectedNav)
let showMain = document.getElementById('main-intro');
let links =  document.getElementsByClassName('navlink');
links = Array.from(links);

function turnOnText(clicked) {
  let mButton = clicked.path[0];
  let tempID = mButton.getAttribute('id');
  let str = tempID.slice(3);
  // console.log(str);
  let mDiv = document.getElementById('main'+str)
  // console.log(mDiv);
  showMain.className='maindiv';
  mDiv.className = 'maindiv mainactive';
  showMain = mDiv;
  selectedNav.className = 'navlink';
  mButton.className = 'navlink navactive';
  selectedNav = mButton;
  // console.log(clicked.path[0].className);
  // console.log(clicked.path[0].id);
}
for (let i=0; i<links.length; i++) {
  links[i].addEventListener('click', turnOnText)
}

/*
BONUS CHALLENGE - Use JavaScript to make every <a> link open in a new window.
*/
function createBandEvents(name, url){
  let interestsDiv = document.getElementById('main-interest');
  let bandContainer = document.createElement('div');
  interestsDiv.appendChild(bandContainer);
  let bandTitleDiv = document.createElement('div');
  bandContainer.appendChild(bandTitleDiv);
  let t = document.createTextNode(name);
  bandTitleDiv.appendChild(t);
  bandTitleDiv.className = "bandTitle"
  let concertsDiv = document.createElement('div');
  bandContainer.appendChild(concertsDiv);

  const xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function() {
    if (xttp.readyState===4 && xttp.status ===200) {
      var res = JSON.parse(xttp.responseText)
      for ( var i = 0; i<res.length; i++){
        var string =  res[i].datetime+res[i].venue.name+res[i].venue.city;
        var eventDiv = document.createElement('div');
        var textEvent = document.createTextNode(string);
        eventDiv.appendChild(textEvent);
        concertsDiv.appendChild(eventDiv);
      }
    }
  }
  xttp.open("GET", url, true);
  xttp.send();
}

createBandEvents("Imagine Dragons", "https://rest.bandsintown.com/artists/Imagine%20Dragons/events?app_id=awesome")
createBandEvents("Coldplay", "https://rest.bandsintown.com/artists/Coldplay/events?app_id=hey%20there")


/****************************************************************
                        AJAX and APIs
****************************************************************/

/*** Using AJAX and an API to Update the Interests Section ***/

/*
CHALLENGE 5: AJAX / APIs

  5a) DOM TARGETTING AND SETUP / LABELING
  
      1)  The Interests Section will be an appropriate place to render results from the Bandsintown API, free API
          that requires no API keys. In this file, using JavaScript:

          a)  Create a variable to reference the 'main-interests' maindiv. Call it 'interestsDiv'.
          b)  Create a <div> and save it in a variable called 'bandContainer'. (This variable will be used to
              reference this <div> from now on, for the purpose of appending more <div> elements.) Then append the
              'bandContainer' <div> to the 'interestsDiv' <div>.
          c)  Create a <div> and save it in a variable called 'bandTitleDiv'. Set the text content to contain a
              sentence that states the name of a band you hope to see in person in your city. Then append the
              'bandTitleDiv' <div> to the 'bandContainer' <div>.
          d)  Create a <div> and save it in a variable called 'concertsDiv'. Then append the 'concertsDiv' <div> to
              the 'bandContainer' <div>.

      2)  Now that there is a 'concertsDiv' <div> element labeled and ready to receive results from an API, the next
          step is to make the AJAX call. Both jQuery and vanilla JavaScript offer ways to make AJAX requests. In
          either case, the method must be 'GET' and the URL will depend on the artist chosen. To obtain the
          appropriate URL to form the request, visit https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0 and
          click on the '/artist/{artistame}/events' option. Then on the right, click 'Try it out' and enter the name
          of the artist for the 'artistname' field. For the 'app_id' field, use any string of choice. Then click on
          the long horizontal 'Execute' button in blue. When the results show, you can glean the appropriate URL for
          the request, and response object format for the response. Then:

          a)  Initiate a GET request with the appropriate URL.
          b)  Include along with the request a callback function that:
              1)  Parses the response string and saves the resulting array into a variable called 'res'.
              2)  Each item in the array is an object of information pertaining to an event at which the artist is
                  performing. Iterating through the array for each object:
                  a)  Use variables to save data from the object, such as the date/time, venue name, and location of
                      the event. Combine all the data into one string.
                  b)  Make a <div> called 'eventDiv' and save the string of information in its text content.
                  c)  Append the 'eventDiv' <div> on the 'concertsDiv' <div>.
          c)  Now that the callback function is built, send the request. Now when the page loads, the Interests
              section should automatically update itself (specifically in the 'concertsDiv' <div>) with information
              on upcoming events where the artist is performing.
*/


/*
BONUS CHALLENGE - Render lists of events from multiple searches to the Bandsintown API, for different artists.
*/