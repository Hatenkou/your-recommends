
import { styled } from '@mui/material/styles';
import { Paper, Grid } from '@mui/material/';

import Movie from '../MovieCard/MovieCard';



const ListMovies = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),

   color: theme.palette.text.secondary,

}));


const ListMoviesSection = ({ data, onCardSelect, }) => {

   return (
      <Grid item xs={12} md={8}>


         <ListMovies>
            <Grid container spacing={2}>
               {
                  data.movies.results.map((movie) => (
                     <Grid key={movie.id} item xs={10} md={4} lg={3}>
                        <Movie
                           onCardSelect={onCardSelect}
                           movie={movie}
                        />
                     </Grid>
                  ))
               }
            </Grid >
         </ListMovies >



      </Grid >
   );

};

export default ListMoviesSection;