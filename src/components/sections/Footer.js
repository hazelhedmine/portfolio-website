import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box paddingY={4} align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Hazel Hedmine Tan. All Rights Reserved.
    </Box>
  );
};

export default Footer;
