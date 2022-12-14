import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Grid, Pagination } from '@mui/material/';
import { MOVIES_QUERY } from '../../queries/queries';
import {
   ListMoviesSection,
   Filters,
   SelectedMoviesSection,
} from '../../components/index';
import { useMovies } from '../../hooks/useMovies';
import { useFilters } from '../../hooks/useFilters';
import Loading from '../../components/Loading';
import ErrorComponent from '../../components/ErrorComponent';



const Home = () => {
   const { filter, setPage, setFilter } = useFilters();
   const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { filter } });
   const { selectedMovies, selectMovie, deleteMovie } = useMovies();


   const paginationHandler = (event, page) => {
      setPage(page)
   };


   if (error) {
      return <ErrorComponent />;
   };

   const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

   const onSubmit = (data) => {

      setFilter(data);
   };


   return (
      <Box sx={{ p: 2, flexGrow: 1 }}>
         <Filters onSubmit={onSubmit} initialValues={filter} />

         <Grid container spacing={2}>
            <Grid
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
               item xs={12} md={8}
            >
               {loading && <Loading />
               }
            </Grid>
            {data && (
               <ListMoviesSection onCardSelect={selectMovie} data={data} />

            )}
            <Grid item xs={12} md={4}>
               <SelectedMoviesSection
                  selectedMovies={selectedMovies}
                  deleteMovie={deleteMovie}

               />
            </Grid>

         </Grid>
         <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
         >
            <Pagination
               color="primary"
               count={pagesCount}
               page={filter.page}
               onChange={paginationHandler}
            />
         </Grid>

      </Box >
   );

};

export default Home;