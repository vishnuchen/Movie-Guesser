var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const popular_movie = require("../data/popular_movie.js");
const movie_imgs = require("../data/movie_imgs.js");

app.get('/', function(req, res){
  res.sendFile('/home/vishnu/lighthouse/movieguesser/src/Lobby/LobbyNav.jsx'); //react file for visual
});

io.on('connection', function(socket){
  console.log('a user connected1');

  socket.on('test', function(msg){
    console.log(msg);
    io.emit('test', msg);
  });

  socket.on('player_entrance', (newPlayer) => {
    newPlayerList.push(newPlayer);
    console.log(newPlayerList)
    io.emit('name_display', newPlayerList)
  })

  socket.on('clear_result', () => {
    io.emit('clear_result')
  })

  socket.on('trigger_questions', () => {
    const questions = JSON.stringify(makeQuestionTypeOne());
    io.emit('trigger_questions', questions)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

let newPlayerList = [];

// Server functions

chooseMovie = () => {
  let movieInDb = popular_movie.length;
  let randomMovie = Math.floor(Math.random() * movieInDb);
  let movie = popular_movie[randomMovie];

  return movie
}

shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

makeQuestionTypeOne =  () => {
  // emit event to set result to empty
  io.emit('clear_result')

  let movie = chooseMovie();
  // let shuffledMoviePic = this.shuffle(this.state.image[movieId]);
  let shuffledMoviePic;
  for (let img of movie_imgs) {
    if (img.movie_api_id === movie.api_id) {
      shuffledMoviePic = shuffle(img.imgs);
    }
  }
  let moviePic = [];
  if (shuffledMoviePic.length >= 4){
    for (let i = 0; i < 4; i++) {
      moviePic.push(shuffledMoviePic[i]);
    }
  } else {
    for (let i = 0; i < shuffledMoviePic.length; i++) {
      moviePic.push(shuffledMoviePic[i]);
    }
  }
  let otherMovieArray = [];
  for (let mv of popular_movie) {
    if (mv.title != movie.title) {
      otherMovieArray.push(mv.title);
    }
  }
  let shuffledOtherMovieArray = shuffle(otherMovieArray)
  let questionChoice = [movie.title, shuffledOtherMovieArray[0], shuffledOtherMovieArray[1], shuffledOtherMovieArray[2]];
  let shuffledQuestionChoice = shuffle(questionChoice);

  io.emit('broadcast_title', movie.title)

  // emit event to send this obj back to client
  return {
    "moviePic": moviePic,
    "questionChoice": shuffledQuestionChoice
  }
}

http.listen(3001, function(){
  console.log('listening on *:3001');
});