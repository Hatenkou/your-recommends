const { discoverMovie, getDetails, getMovie } = require('../modules/movies/index.js')
const { Movie } = require('../modules/movies/entities/Movie');
const { getList } = require('../modules/genres/entities/index.js');
const { getVideo } = require('../modules/video/index.js')

async function movies(parent, args, { locale }) {

   const data = await discoverMovie(args.filter, locale);

   return data;


};


async function moviesByIds(parent, { ids }, { locale }) {

   const requests = ids.map((id) => getDetails(id, locale));

   const data = await Promise.all(requests);

   const movies = data.map(({ data }) => new Movie(data))

   return movies
};



async function moviePage(parent, args, { locale }) {

   const data = await getMovie(args.id, locale);

   return data;

};

async function genres(_, { }, { locale }) {
   return await getList(locale)
};

async function movieVideo(parent, args, { locale }) {

   const data = await getVideo(args.id, locale);

   return data;

};

/*movieVideo*/
module.exports = {
   movies,
   moviesByIds,
   moviePage,
   genres,

}