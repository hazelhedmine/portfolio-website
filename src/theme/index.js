// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

// colors from https://palx.jxnblk.com/

const overrides = {
  styles,
  colors: {
    base: '#f47f58',
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
    gray: {
      50: '#faf9f9',
      100: '#f0edec',
      200: '#e5e0de',
      300: '#d9d1cf',
      400: '#cdc2be',
      500: '#beb0ac',
      600: '#ad9c97',
      700: '#948682',
      800: '#756a66',
      900: '#443e3c',
    },
    yellow: {
      50: '#fef9ec',
      100: '#fbedc3',
      200: '#f8df95',
      300: '#f5cf60',
      400: '#e5c052',
      500: '#d1b04b',
      600: '#bb9d43',
      700: '#a0873a',
      800: '#7e6a2e',
      900: '#4a3e1b',
    },
  },
};

export default extendTheme(overrides);
