
const { API_KEY } = require('../../config/index');
const { Video } = require('./entities/Video');



const getVideo = async (movie_id, language) => {
   const result = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=${language}`);
   return new Video(result.data);
}

module.exports = {
   getVideo,
}
