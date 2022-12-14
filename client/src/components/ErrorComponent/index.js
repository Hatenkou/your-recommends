import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorComponent = () => {
   return (
      <Stack sx={{ width: '100%' }} spacing={2}>
         <Alert severity="error">Something went wrong</Alert>

      </Stack>
   );

};

export default ErrorComponent;