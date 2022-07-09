// global style overrides

import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('coral.50', 'coral.900')(props), // light mode, dark mode
      color: mode('gray.900', 'gray.50')(props),
    },
  }),
};

export default styles;
