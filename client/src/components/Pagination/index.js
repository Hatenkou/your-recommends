import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons(totalPages) {
   debugger
   return (
      <Stack spacing={2} >
         <Pagination count={totalPages} showFirstButton showLastButton />
      </Stack>
   );
}