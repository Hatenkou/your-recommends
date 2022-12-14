import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';;



export default function Loading() {

   return (
      <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
      >
         <Box
            sx={{
               m: '20px',
               width: '99%',
               height: '99%',
            }}
         >

            <Box sx={{
               position: 'relative',

            }}>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',

                  }}
               >
                  <CircularProgress color="inherit" />
               </Box>

            </Box>

         </Box>
      </Grid>
   );
}