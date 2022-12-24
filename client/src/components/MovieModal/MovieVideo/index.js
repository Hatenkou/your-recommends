import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useQuery } from '@apollo/client';
import { MOVIE_VIDEO_QUERY } from "../../../queries/queries";
import Loading from '../../Loading/index';
import ErrorComponent from '../../ErrorComponent/index';
import { YOU_TUBE_URL } from '../../../const';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   p: 4,
};
const MovieVideo = ({ movieId, open, onClose }) => {

   const ID = Number(movieId)
   const { loading, error, data } = useQuery(MOVIE_VIDEO_QUERY, { variables: { videoId: ID } });
   if (loading) {
      return <Loading />
   }

   if (error) {

      return <ErrorComponent />;
   };
   console.log(data);
   return (
      <React.Fragment>

         <Modal
            hideBackdrop
            open={open}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
         >
            <Box sx={{ ...style }}>

               <Modal
                  open={open}
                  onClose={onClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
               >
                  <Box sx={style}>
                     {data.movieVideo.results.length > 0 && (
                        <iframe
                           width="560"
                           height="315"
                           src={`${YOU_TUBE_URL}${data.movieVideo.results[0].key}`}
                           title={`${data.movieVideo.results[0].name}`} />
                     )}

                  </Box>
               </Modal>

            </Box>
         </Modal>

      </React.Fragment>
   );
}

export default MovieVideo;


