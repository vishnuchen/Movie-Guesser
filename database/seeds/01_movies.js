// import data from api file
var data = require("../../data/popular_movie.js");
console.log(data);

var movies = []

for (movie of data) {
  movies.push({title: movie.title, api_id: movie.api_id, genres: movie.genre_ids, vote_average: movie.vote_average, release_date: movie.release_date})

}
exports.seed = function(knex) {
  // loop through data and add to db
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert(movies);
    });
};
