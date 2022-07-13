import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useClipboard,
} from '@chakra-ui/react';

import { EmailIcon, CheckIcon } from '@chakra-ui/icons';

const ContactInfo = () => {
  const EMAIL = 'zelleh15@gmail.com';
  const { hasCopied, onCopy } = useClipboard(EMAIL, 1000); // second arg is timeout

  return (
    <Flex
      mb={32}
      width={{ base: '70%', sm: '50%', md: '40%' }}
      justify="center"
      direction="column"
      align="center"
    >
      <Flex align="center">
        <Divider borderBottomColor="gray.900" width="4vw" />
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          fontFamily='"Playfair Display", serif'
          color="primary.800"
          paddingX={6}
        >
          Contact Me!
        </Heading>
        <Divider borderBottomColor="gray.900" width="4vw" />
      </Flex>
      <Text mb={6} fontFamily='"Playfair Display", serif' as="i" opacity={0.6}>
        click to copy
      </Text>
      <Button
        as="p"
        size="sm"
        fontSize="sm"
        aria-label={`Go to Repository`}
        variant="outline"
        colorScheme="coral"
        onClick={onCopy}
        leftIcon={hasCopied ? <CheckIcon></CheckIcon> : <EmailIcon></EmailIcon>}
      >
        zelleh15@gmail.com
      </Button>
    </Flex>
  );
};

export default ContactInfo;
