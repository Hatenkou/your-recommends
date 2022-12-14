import * as React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CardSelected = ({ movie, onCardDelete }) => {


   return (
      <div className='movie-card' style={{
         backgroundImage: `url(${movie.imageBg})`
      }}>
         <div className='movie-card__container'>
            <div className='movie-card__container-top'>
               <h1 className='movie-card__title'> {movie.title}</h1>
               <p className='movie-card__release-date'>{movie.releaseDate}</p>

            </div>
            <div className='movie-card__container-bottom'>
               <div className='movie-card__container-delete'>
                  <button className='movie-card__delete' onClick={() => onCardDelete(movie)}><DeleteOutlineIcon /></button>
               </div>

            </div>


         </div>
      </div>

   )
}





CardSelected.propTypes = {
   movie: PropTypes.shape({
      imageBg: PropTypes.string.isRequired,
      voteAverage: PropTypes.number,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string,
      })),
      runtime: PropTypes.number
   }).isRequired,
   onDeleteClick: PropTypes.func
}

export default CardSelected;