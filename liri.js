require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
//Including axion npm package
var axios = require('axios');
//Including the moment npm package
var moment = require('moment');

// fs is a core Node package for reading and writing files
var fs = require("fs");

var options = process.argv[2];

var song = process.argv[3];

switch (options) {
  case 'spotify-this-song':
    spotifiando();
    break;
  case 'movie-this':
    movies();
    break;
  case 'concert-this':
    concerts();
    break;
  case 'do-what-it-says':
    listen();
    break;
  default:
  // code block
}

function spotifiando() {
  // Catch empty input
  if (!song) {
    song = "The Sign Ace of Base";
  }

  spotify.search({ type: 'track', query: song }, function (err, data) {
    console.log('------------- Song Analysis -------------');
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
      if (i === 0) {
        console.log('Artist(s):    ' + data.tracks.items[0].artists[i].name);
      } else {
        console.log('              ' + data.tracks.items[0].artists[i].name);
      }
    }
    console.log(
      JSON.stringify("The song's name: " + data.tracks.items[0].name, null, 2)
    );
    console.log(
      JSON.stringify(
        'Preview Link: ' + data.tracks.items[0].preview_url,
        null,
        2
      )
    );
    console.log(
      JSON.stringify(
        'Album:        ' + data.tracks.items[0].album.name,
        null,
        2
      )
    );
    console.log('------------- Song Analysis -------------');
  });
}

function movies() {
  // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
  var axios = require('axios');

  // Grab the movieName which will always be the third node argument.
  var movieName = process.argv[3];

  // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  if (movieName === undefined) {
    movieName = 'Mr. Nobody';
  }
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl =
    'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  // "Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"37%"}

  axios.get(queryUrl).then(function(response) {
    console.log('----------------Movies----------------');
    console.log('Tittle of the movie: ' + response.data.Title);
    console.log('Year of the movie: ' + response.data.Year);
    console.log('IMDB Rating of the movie: ' + response.data.Rated);
    console.log('Rotten Tomatoes Rating of the movie: ' + response.data.Ratings[1].Value);
    console.log('Country where the movie was produced: ' + response.data.Country);
    console.log('Languaje of the movie: ' + response.data.Language);
    console.log('Plot of the movie: ' + response.data.Plot);
    console.log('Actors in the movie: ' + response.data.Actors);
    console.log('--------------------------------');
  });
}

function concerts() {
  var artist = process.argv.slice(3).join(" ");
  // Then run a request with axios to the OMDB API with the movie specified
  axios
    .get(
      'https://rest.bandsintown.com/artists/' +
        artist +
        '/events?app_id=codingbootcamp'
    )
    .then(function(response) {
      //For loop to show each event
      for (var i = 0; i < response.data.length; i++) {
        console.log('Venue Name: ' + response.data[i].venue.name);
        console.log(
          'Venue Location: ' +
            response.data[i].venue.city +
            ', ' +
            response.data[i].venue.country
        );
        console.log(
          'Date of the Event: ' + moment(response.data[i].datetime).format('L')
        );
        console.log('-------------------');
      }
    });
}

function listen(){
// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");
        song = dataArr[1];

         spotifiando(song);

  // We will then re-display the content as an array for later use.
  // console.log(dataArr);
});
}
