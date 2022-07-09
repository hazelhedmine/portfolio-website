// This component will always render the header,
// the footer, and any components that are passed as children.

// There are two ways in Chakra UI to define responsive styles.
// Depending on the occasion, you can choose the more appropriate
// and readable solution.
// First option
// maxW={[
//     "auto",    // 0-30em
//     "auto",    // 30em-48em
//     "auto",    // 48em-62em
//     "1200px",  // 62em+
//   ]}

// Second option
// maxW={{
//   base: "auto", // 0-80em
//   xl: "1200px" // 80em+
// }}

import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from '../sections/Header';

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      {...props}
    >
      <Header></Header>
      {props.children}
    </Flex>
  );
}
