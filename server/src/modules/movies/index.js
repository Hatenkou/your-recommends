const axios = require('axios');
const { Movies } = require('./entities/Movies')
const { Movie } = require('./entities/Movie')
const { API_KEY } = require('../../config/index')

const getPopular = async (page, language) => {
   const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`);
   return new Movies(result.data);
};

const getDetails = (id, language) => {
   return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`);
}

const getMovie = async (id, language) => {
   const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`);
   return new Movie(result.data);
};

const discoverMovie = async (filter, language) => {
   const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`);
   return new Movies(result.data);
};




module.exports = {
   getPopular,
   getDetails,
   getMovie,
   discoverMovie,
}
