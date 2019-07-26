const axios = require("axios");
const fs = require("fs");
const movie_data = require("../data/popular_movie.js");

async function retrieveImgData () {
  let movieImgs = [];
  for (let movie of movie_data) {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.api_id}/images?api_key=395419fedfdc7d434dc7eb921479ad5f&language=null`);
    movieImgs.push({
      movie_api_id: response.data.id,
      imgs: response.data.backdrops
    })
  }
  return movieImgs;
}

retrieveImgData()
    .then (function(movieImgs) {
        fs.writeFile("../data/movie_imgs.js", JSON.stringify(movieImgs, null, 2));
    })