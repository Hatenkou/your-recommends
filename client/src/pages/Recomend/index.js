import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material/';
import Typography from '@mui/material/Typography';
import { MOVIES_BY_IDS_QUERY } from "../../queries/queries";
import Movie from "../../components/MovieCard/MovieCard";
import ErrorComponent from "../../components/ErrorComponent";
import Loading from "../../components/Loading";

const Recommend = () => {

   const [searchParams] = useSearchParams();


   const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
      variables: {
         ids: searchParams.get('ids')?.split(',').map((id) => +id)
      }
   });

   if (loading) {
      <Loading />
   }
   if (error) {
      <ErrorComponent />
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