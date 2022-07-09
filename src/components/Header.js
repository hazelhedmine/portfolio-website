import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Container
      py="40"
      px="28"
      maxW="60%"
      wrap="wrap"
      display="flex"
      align="center"
      bg={useColorModeValue('coral.100', 'coral.900')}
    >
      <Box flex="1" align="left">
        <Heading as="h1" size="xl" variant="page-title">
          Hazel Hedmine Tan
        </Heading>
        <Text size="md">
          Final Year Computer Engineering Undergraduate in NUS
        </Text>
      </Box>
      <Box display="inline-block" align="center">
        <Image
          borderRadius="full"
          maxBlockSize="300px"
          minBlockSize="200px"
          width="100%"
          height="100%"
          src="img/profile-pic.jpg"
          alt="Hazel Hedmine Tan"
        />
      </Box>
    </Container>
  );
};

export default Header;
