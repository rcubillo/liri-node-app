# Liri-node-app


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Contributors
@rcubillo

## Technology
• Node, Api's,
	
## About 

This app is the creation of Liri. Liri is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

To retrieve the data that will power this app, I will be using the 'axios package to the Bands in Town, Spotify and OMDB Apis. 

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios) --> I will use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
## Instructions

1) First thing I did in order to start working on this project was to navigate to the root of my project and I ran "npm init -y", this initialize a "package.json" for my project. The `package.json` file is required for installing third party npm packages and saving their version numbers.

2) I created a .gitignore file to tell git not to track some files that contains some important information like api keys and the node modules.

3) I created a file named keys.js that will export the Spotify Id and the Spotify Secret to my main application file (liri.js).

4) I created a file name .env. This file will contain the actual api keys for spotify.This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github.

5) There is also a file called random.txt. This file will contain: `spotify-this-song,"I Want it That Way"`

6) Liri will take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   
   
## What each command shoud do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
  [concert-this screenshot]    

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from
  
  [spotify-this-song screenshot
     
      * If no song is provided then your program will default to "The Sign" by Ace of Base.
      
   [spotify-this-song without screenshot
 

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
	
[movie-this screenshot ]


   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     * It's on Netflix!

[movie-this without screenshot ]


4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.
     
     
 [Do what it says screenshot]



## Contributing Guidelines

All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.

## Contact

Developer/Full-stack Web Software Developer
   
 * E-mail: ronaldcubillo92@gmail.com
 * [Twitter](https://twitter.com/rcubillo92)
 * [LinkedIn](https://linkedin.com/in/ronald-cubillo/)
