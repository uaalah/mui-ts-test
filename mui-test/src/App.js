import React from 'react'
import { Box, Container } from '@mui/material';

import { useFetch } from './hooks/useFetch';

import Cardlist from './components/Cardlist';
import Layout from './components/layout/Layout';
import Loader from './components/Loader'
import { testTheme } from './styles/theme'


function App() {
  const { loading, data } = useFetch('https://fakestoreapi.com/products');
  console.log('loading', loading)
  return (
    <>

      <Layout>
        {loading ? (
          <Container sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Loader color={testTheme.palette.secondary.main} size={50} />
            </Box>
          </Container>
        ) : (
          <Cardlist data={data} />
        )}
      </Layout>

    </>
  );
}

export default App;
