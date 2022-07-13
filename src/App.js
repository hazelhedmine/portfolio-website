import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage></LandingPage>
    </ChakraProvider>
  );
}

export default App;
