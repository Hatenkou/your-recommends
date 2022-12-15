import { useState, useContext } from 'react';
import { AppContext } from '../../providers/appContext';
import PropTypes from 'prop-types';
import {
   IconButton,
   Link,
} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PageviewIcon from '@mui/icons-material/Pageview';
import './style.scss';
import { styled } from '@mui/material/styles';

const Pageview = styled(Link)(({ theme }) => ({
   background: 'rgba(255, 255, 255, 1)',
   borderRadius: '50%',
   color: 'blue',
   position: 'absolute',
   display: 'flex',
   top: -5,
   right: -10,
}));

const Favorite = styled(IconButton)(({ theme }) => ({
   background: 'rgba(255, 255, 255, .3)',
   borderRadius: '50%',
   position: 'absolute',
   display: 'flex',
   right: -19,
   bottom: 35,
}));

const Movie = ({ movie, onCardSelect, isPreviewMode }) => {

   const { state } = useContext(AppContext);
   const [link, setLink] = useState('');
   const onSubmit = () => {
      const id = movie.id
      const link = `https://sample-app.cyclic.app/movie?id=${id}&locale=${state.locale}`;
      const linkTwo = `https://sample-app.cyclic.app/movie?id=${id}&locale=${state.locale}`;
      if (!isPreviewMode) {
         return setLink(link);
      } else {
         return setLink(linkTwo);

      }
   };

   return (
      <div className="movie">
         <figure className="movie__figure">
            <figcaption className="movie__vote--container">
               <span className="movie__vote">{movie.voteAverage}</span>
               <Pageview
                  onClick={() => onSubmit(link)}
                  href={link}
                  target="_blank"
                  aria-label="add to favorites"

               >
                  <PageviewIcon />
               </Pageview>
               {!isPreviewMode && (
                  <Favorite
                     onClick={() => onCardSelect(movie)}
                     aria-label="add to favorites"
                  >
                     <FavoriteIcon style={{
                        color: 'red',
                     }} />
                  </Favorite>
               )}
               <img
                  alt={movie.title}
                  src={movie.image}
                  className="movie__poster"

               />
            </figcaption>
            <h2 className="movie__title">{movie.title}</h2>
         </figure>
      </div>
   );
};

Movie.propTypes = {
   movie: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      voteAverage: PropTypes.number.isRequired,
      releaseDate: PropTypes.string
   }).isRequired,
   onCardSelect: PropTypes.func,
   isPreviewMode: PropTypes.bool
}


export default Movie;