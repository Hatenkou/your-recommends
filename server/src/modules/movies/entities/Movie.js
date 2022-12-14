const { format } = require('date-fns');
const { IMAGE_BASE_PATH, IMAGE_BASE_BG } = require('../../../config/index');


class Movie {
   constructor(movie) {
      this.movie = movie;
      this.id = movie.id;
      this.title = movie.title;
      this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
      this.adult = movie.adult;
      this.overview = movie.overview;
      this.originalLanguege = movie.original_language;
      this.backdropPath = `${IMAGE_BASE_BG}${movie.backdrop_path}`;
      this.popularity = movie.popularity;
      this.voteCount = movie.vote_count;
      this.video = movie.video;
      this.voteAverage = movie.vote_average;
      this.genres = movie.genres;
      this.runtime = movie.runtime;
      this.tagline = movie.tagline


   }

   releaseDate(params) {
      return params.format
         ? format(new Date(this.movie.release_date), params.format)
         : this.movie.release_date
   }


};

module.exports = {
   Movie
};