import * as React from 'react';
import { Link as RouterLink, } from 'react-router-dom';
import {
   Alert,
   Stack,
   Link,
} from '@mui/material/';


const ErrorComponent = () => {
   return (
      <Stack sx={{ width: '100%', height: '100%' }} spacing={2}>
         <Alert severity="error">Something went wrong</Alert>
         <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            Try again
         </Link>
      </Stack>
   );

};

export default ErrorComponent;