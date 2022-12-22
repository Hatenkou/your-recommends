import { useState, useCallback } from 'react';
import {
   IconButton,
   Link,
} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PageviewIcon from '@mui/icons-material/Pageview';
import './style.scss';
import { styled } from '@mui/material/styles';
import noImege from '../../assets/noImage.png'
import MovieModal from '../MovieModal'


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

const Movie = ({ movie, onCardSelect, isPreviewMode, }) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [movieId, setMovieId] = useState();


   const toggleModal = useCallback((id) => () => {
      handleOpen();
      setMovieId((prev) => id);
   }, []);



   const onCloseMovieModal = () => {
      handleClose();
   };

   return (
      <>

         <div className="movie">
            <figure className="movie__figure">
               <figcaption className="movie__vote--container">
                  <span className="movie__vote">{movie.voteAverage}</span>
                  <Pageview
                     onClick={toggleModal(movie.id)}
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
                     src={movie.image}
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImege;
                     }}
                     alt={movie.title}
                     className="movie__poster"

                  />
               </figcaption>
               <h2 className="movie__title">{movie.title}</h2>
            </figure>

         </div>
         <MovieModal
            onClose={onCloseMovieModal}
            open={open}
            id={movieId} />
      </>
   );
};



export default Movie;