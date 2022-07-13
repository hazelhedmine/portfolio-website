import { Box, Button, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Flex justify="center" direction="column">
      <Box align="center">
        <Button
          size="sm"
          fontSize="sm"
          aria-label={`Go to Repository`}
          variant="solid"
          colorScheme="coral"
          marginLeft="2"
          onClick={() => {
            window.open('https://github.com/hazelhedmine/portfolio-website');
          }}
          leftIcon={<ExternalLinkIcon />}
        >
          Source Code
        </Button>
      </Box>
      <Box paddingY={4} align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Hazel Hedmine Tan. All Rights
        Reserved.
      </Box>
    </Flex>
  );
};

export default Footer;
