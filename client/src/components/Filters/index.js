import { Form } from 'react-final-form'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SortField, SortDirectionField, AdultField, YearField, SubmitField, ReleaseYearField, GenreField } from './components';
import { GENRES_QUERY } from '../../queries/queries';
import { useQuery } from "@apollo/client";
import Loading from '../Loading';
import ErrorComponent from '../ErrorComponent';



export const Filters = ({ onSubmit, initialValues }) => {
   const { loading, error, data } = useQuery(GENRES_QUERY);

   if (loading) {
      return <Loading />
   }
   if (error) {
      return <ErrorComponent />
   }
   return (
      < Grid sx={{
         paddingBottom: 1,
      }} >
         <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
               <form onSubmit={handleSubmit}>
                  <Box sx={{ flexGrow: 1 }}>
                     <Grid container spacing={3}>
                        <Grid item xs>
                           <YearField />
                        </Grid>
                        <Grid item xs>
                           <ReleaseYearField />
                        </Grid>
                        <Grid item xs>
                           <GenreField data={data} />
                        </Grid>
                        <Grid item xs>
                           <SortField />
                        </Grid>
                        <Grid item xs>
                           <AdultField />
                        </Grid>
                        <Grid item xs>
                           <SortDirectionField />
                        </Grid>
                        <Grid item xs>
                           <SubmitField />
                        </Grid>
                     </Grid>
                  </Box>

               </form>
            )} />
      </ Grid >
   )
} 