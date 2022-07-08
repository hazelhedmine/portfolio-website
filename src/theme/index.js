// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

const overrides = {
  styles,
  colors: {
    coral: {
      50: '#ffebe0',
      100: '#fdc7b4',
      200: '#f8a387',
      300: '#f47f58', //base
      400: '#ef5b29',
      500: '#d64111',
      600: '#a7320b',
      700: '#782307',
      800: '#4a1302',
      900: '#1f0400',
    },
  },
};

export default extendTheme(overrides);
