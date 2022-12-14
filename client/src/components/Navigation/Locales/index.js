import { useState, useContext, useCallback } from 'react';
import {
   Box,
   InputLabel,
   MenuItem,
   FormControl,
   Select,
} from '@mui/material/';
import { LOCALES } from '../../../const';
import { AppContext } from '../../../providers/appContext';

export default function Locales() {
   const { state, dispatch } = useContext(AppContext);

   const setLanguage = useCallback((locale) => {
      dispatch({
         type: 'setLocale',
         locale
      })
   }, []);


   const [locale, setLocale] = useState('');

   const handleChange = (event) => {
      setLocale(event.target.value);
   };

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={locale}
               label="Language"
               onChange={handleChange}
            >
               <MenuItem
                  onClick={() => setLanguage(LOCALES.UKRANIAN)}
                  disabled={state.locale === LOCALES.UKRANIAN}
                  value={'ukr'}
               >УКР.</MenuItem>
               <MenuItem
                  onClick={() => setLanguage(LOCALES.ENGLISH)}
                  disabled={state.locale === LOCALES.ENGLISH}
                  value={'eng'}
               >ENG.</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
}