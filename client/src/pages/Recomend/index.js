import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material/';
import Typography from '@mui/material/Typography';
import { MOVIES_BY_IDS_QUERY } from "../../Queries/queries";
import Movie from "../../componennts/MovieCard/MovieCard";

const Recommend = () => {

   const [searchParams] = useSearchParams();


   const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
      variables: {
         ids: searchParams.get('ids')?.split(',').map((id) => +id)
      }
   });

   if (loading) {
      <div>loading...</div>
   }
   if (error) {
      <div>error. Try again</div>
   }

   return (
      <>
         <Typography variant="h4" gutterBottom>
            {searchParams.get('title')}
         </Typography>
         {data?.moviesByIds && (
            <Grid sx={{ margin: 1 }} container spacing={2}>
               {data.moviesByIds.map((movie) => (
                  <Grid key={movie.id} item xs={10} md={4} lg={3} >
                     <Movie
                        movie={movie}
                        isPreviewMode
                     />
                  </ Grid>
               ))}
            </Grid>
         )}
      </>
   );

};

export default Recommend;