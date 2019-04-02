# Liri-node-app


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Contributors
@rcubillo

Technology
	• Node, Api's,
	
About 

This app is the creation of Liri. Liri is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

To retrieve the data that will power this app, I will be using the 'axios package to the Bands in Town, Spotify and OMDB Apis. 

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * I will use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
Instructions

1) First thing I did in order to start working on this project was to navigate to the root of my project and I ran "npm init -y", this initialize a "package.json" for my project.The `package.json` file is required for installing third party npm packages and saving their version numbers.

2) I created a .gitignore file to tell git not to track some files that contains some important information like api keys.

3) I created a named keys.js that will export the spotify id and the spotify secret to my main application file (liri.js).

4) I created a file name .env. This file will contain the the actual api keys for spotify.This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github.

5) There is also a file called random.txt. This file will contain  * spotify-this-song,"I Want it That Way"

6) Liri will take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`


Contributing Guidelines
All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.
Contact


Developer/Full-stack Web Software Developer
   
 * E-mail: ronaldcubillo92@gmail.com
 * [Twitter](https://twitter.com/rcubillo92)
 * [LinkedIn](https://linkedin.com/in/ronald-cubillo/)
