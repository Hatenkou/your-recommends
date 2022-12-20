import { FormattedMessage } from "react-intl";
import Button from '@mui/material/Button';

export const SubmitField = () => {
   return (
      <Button sx={{ bgcolor: "#0e062e" }} variant="contained" type="submit" size="large">
         <FormattedMessage id='filters.submit' />
      </Button>
   )
}