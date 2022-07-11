import { Box, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const Hero = props => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="50vh" //so that it will be vertically centered
      px={8}
      marginY={32}
      {...props}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          fontFamily='"Playfair Display", serif'
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Hi, I'm Hazel.
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          fontFamily='"Playfair Display", serif'
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          A final year computer engineering student in NUS and an aspiring
          software engineer.
        </Heading>
        <Button
          as="a"
          colorScheme="coral"
          borderRadius="8px"
          lineHeight="1"
          size="lg"
          fontWeight="bold"
          fontFamily='"Playfair Display", serif'
          href="/Hazels-Resume.pdf"
          download
        >
          Download my resume!
        </Button>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '40%' }} mb={{ base: 12, md: 0 }}>
        <Image
          src="/img/profile-pic.jpg"
          size="100%"
          shadow="2xl"
          borderRadius="full"
        />
      </Box>
    </Flex>
  );
};

export default Hero;
