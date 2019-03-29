require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

// //Including axion npm package
// var axios = require('axios');

// //Storing all the arguments  in an array.
// var nodeArgs = process.argv;

// // Create an empty variable for holding the movie name
// var movieName = '';
// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {
//   if (i > 2 && i < nodeArgs.length) {
//     movieName = movieName + '+' + nodeArgs[i];
//   } else {
//     movieName += nodeArgs[i];
//   }
// }
// // Then run a request with axios to the OMDB API with the movie specified
// var queryUrl =
//   'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// axios.get(queryUrl).then(function(response) {
//   console.log('----------------Movies----------------');
//   console.log('Tittle of the movie: ' + response.data.Title);
//   console.log('Year of the movie: ' + response.data.Year);
//   console.log('IMDB Rating of the movie: ' + response.data.Rated);
//   console.log('Rotten Tomatoes Rating of the movie: ' + response.data.Source);
//   console.log('Country where the movie was produced: ' + response.data.Country);
//   console.log('Languaje of the movie: ' + response.data.Language);
//   console.log('Plot of the movie: ' + response.data.Plot);
//   console.log('Actors in the movie: ' + response.data.Actors);
//   console.log('--------------------------------');
// });

// Capturing


var song = process.argv[2];

spotify.search({ type: 'track', query: song}, function(err, data) {
  console.log("------------- Song Analysis -------------")
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
  console.log(JSON.stringify("The song's name: " + data.tracks.items[0].name, null, 2));
  console.log(JSON.stringify('Preview Link: ' + data.tracks.items[0].preview_url, null, 2));
  console.log(JSON.stringify('Album:        ' + data.tracks.items[0].album.name, null, 2));
    console.log("------------- Song Analysis -------------")

  });
