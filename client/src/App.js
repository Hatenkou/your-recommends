import { useContext } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  CssBaseline,
  Container,
  Box,
} from '@mui/material/';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from
} from "@apollo/client";

import I18nProvider from './providers/i18n';
import { AppContext } from './providers/appContext';
import { Navigation } from '../src/components/index';
import { Home, Reccomend, MoviePage } from './pages/index';

function App() {
  const { state } = useContext(AppContext);
  const httpLink = new HttpLink({ uri: `${window.location.origin}/graphql` });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale
      }
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <I18nProvider locale={state.locale}>
      <ApolloProvider client={client}>
        <Navigation />
        <CssBaseline />
        <Container maxWidth="xl" >
          <Box sx={{ backgroundColor: (theme) => theme.palette.grey[300] }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="recommend" element={<Reccomend />} />
              <Route path="movie" element={<MoviePage />} />
            </Routes>
          </Box>
        </Container>
      </ApolloProvider>
    </I18nProvider>
  );
}

export default App;
