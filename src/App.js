import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
    </ChakraProvider>
  );
}

export default App;
