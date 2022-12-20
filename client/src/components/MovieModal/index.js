import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MovieInfo from './MovieInfo/index';



const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   display: 'block',
   width: '900px',
   height: '450px',
   borderRadius: '10px',
   transform: 'translate(-50%, -50%)',
   decoration: 'none'
};

export default function MovieModal({ open, onClose, id }) {

   return (
      <div>

         <Modal
            onClose={onClose}
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <MovieInfo
                  movieId={id}
               />
            </Box>
         </Modal>
      </div>
   );
}