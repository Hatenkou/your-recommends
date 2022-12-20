import React from 'react';
import { useQuery } from '@apollo/client';
import { MOVIE_BY_ID_QUERY } from "../../../queries/queries";
import Loading from '../../Loading/index';
import ErrorComponent from '../../ErrorComponent/index';
import { FormattedMessage } from "react-intl";
import './style.scss';


const MovieInfo = ({ movieId }) => {
   const ID = Number(movieId)
   const { loading, error, data } = useQuery(MOVIE_BY_ID_QUERY, { variables: { id: ID } });

   if (loading) {
      return <Loading />
   }

   if (error) {
      return <ErrorComponent />;
   };
   console.log(data.moviePage);
   return (

      <>
         {data?.moviePage && (
            <div className="movie_card" >
               <div className="info_section">
                  <div className="movie_header">
                     <img className="locandina" src={data.moviePage.image} alt={data.moviePage.title} />
                     <h1>{data.moviePage.title}</h1>
                     <h4>{data.moviePage.releaseDate}</h4>
                     <div className='type'>
                        {data.moviePage.genres.map((genre) => (
                           <p className="type" key={genre.id}>{genre.name}</p>

                        ))
                        }
                     </div>
                     <div className='header__info'>
                        <h4> {data.moviePage.tagline}</h4>
                        <span className="minutes">{data.moviePage.runTime} <FormattedMessage id="time" /></span>
                     </div>
                  </div>
                  <div className="movie_desc">
                     <h4 className="text"><FormattedMessage id="overview" /></h4>
                     <p className="text">
                        {data.moviePage.overview}
                     </p>
                  </div>
                  <div className="blur_back" style={{
                     position: `absolute`,
                     height: '100%',
                     top: `0`,
                     right: `0`,
                     backgroundSize: 'cover',
                     borderRadius: '11px',
                     backgroundImage: `url(${data.moviePage.imageBg})`,
                     zIndex: `-1`
                  }}
                  ></div>
               </div>
            </div>
         )
         }

      </>
   );
}

export default MovieInfo;
