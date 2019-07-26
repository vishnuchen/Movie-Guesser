//connect to api

//download data

//format data for seeding

//save data to filesystem (look at node system utilities to save)

const axios = require("axios");
const fs = require("fs");


async function retrievePopularMovies () {
  let filteredPopularMovies = [];

  for (let page = 1; page < 11; page++) {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=395419fedfdc7d434dc7eb921479ad5f&language=en-US&page=${page}`);
    
    let popularMovies = response.data.results;
    
    for (let movie of popularMovies) {
      if (movie.adult == false) {
        filteredPopularMovies.push(
          {
            api_id: movie.id,
            vote_average: movie.vote_average,
            title: movie.title,
            genre_ids: movie.genre_ids,
            release_date: movie.release_date
          }
        )
      }
    }
  }

  let genreList = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=395419fedfdc7d434dc7eb921479ad5f");
  let matchIdToGenre = (id) => {
    for (let genre of genreList.data.genres) {
      if (id === genre.id) {
        return genre.name;
      }
    }
    return "";
  }
  for (let movie of filteredPopularMovies) {
    movie.genre_ids = movie.genre_ids.map(matchIdToGenre);
  }

  return filteredPopularMovies;
}


  retrievePopularMovies()
    .then (function(filteredPopularMovies) {
        fs.writeFile("../data/popular_movie.js", JSON.stringify(filteredPopularMovies, null, 2));
    })
    