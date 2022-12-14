import React from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from "react-router-dom";
import { MOVIE_BY_ID_QUERY } from "../../Queries/queries";
import { FormattedMessage } from "react-intl";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './style.scss';

const MoviePage = () => {

   const [searchParams] = useSearchParams();
   const id = Number(searchParams.get('id'));
   const { loading, error, data } = useQuery(MOVIE_BY_ID_QUERY, { variables: { id } });

   if (loading) {
      <div>loading...</div>
   }

   if (error) {
      return 'Error';
   };

   console.log(data);
   return (
      <>
         {data?.moviePage && (
            <div className='movie__container'>
               <section className='inner__container'>
                  <div className='img__container'>
                     <img className='poster__img' src={data.moviePage.image} alt={data.moviePage.title} />
                  </div>
                  <div className='header__poster'>
                     <div className='title__poster'>
                        <h2 className='title'>{data.moviePage.title} </h2>
                        <h6 className='tagline'>{data.moviePage.tagline} </h6>
                        <p>{data.moviePage.runTime} <FormattedMessage id="time" /></p>
                     </div>
                     <div className='facts'>
                        <ul>
                           {data.moviePage.genres.map((genre) => (
                              <li key={genre.id}>{genre.name}</li>

                           ))
                           }
                        </ul>

                        <span className='popularity'><ThumbUpOffAltIcon />{Math.round(data.moviePage.popularity)} </span>
                        <span className='release'>{data.moviePage.releaseDate}</span>
                     </div>
                     <div className='header__info'>
                        <h3 className='info__title'><FormattedMessage id="overview" /></h3>
                        <div className='overview'>
                           <p>{data.moviePage.overview}</p>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         )
         }


      </>

   );

};

export default MoviePage;