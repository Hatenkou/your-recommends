const axios = require('axios');
const { Genre } = require('./Genre');

const { API_KEY } = require('../../../config/index')

const getList = async (language) => {
   const result = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${language}`);

   return result.data.genres.map((genre) => new Genre(genre));
}


module.exports = {
   getList
}