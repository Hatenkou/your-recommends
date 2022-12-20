import {
   AppBar,
   Box,
   Toolbar,
   Typography,
   Container,
   Link,
} from '@mui/material/';
import { Link as RouterLink, } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import Locales from './Locales';



const Navigation = () => {


   return (
      <Box >
         <AppBar position="static" sx={{ bgcolor: "#0e062e", padding: "5px" }}>

            <Container maxWidth="xl">
               <Toolbar>


                  <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', flexGrow: 1 }}>
                     <Typography variant="h6" component="div" sx={{ color: "white", flexGrow: 1 }}>
                        <FormattedMessage id="navigation.home" />
                     </Typography>
                  </Link>
                  <Box>
                     <Locales />
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
      </Box >
   );
}

export default Navigation;
