import {
  Box,
  Flex,
  ListItem,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

const HeLeN = ({ theme }) => {
  return (
    <Flex direction="column" gap={6}>
      <Stat textAlign={{ base: 'center', md: 'left' }}>
        <StatNumber>HeLeN</StatNumber>
        <StatHelpText>January 2021 - May 2021</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
        <Tag colorScheme={theme}>C</Tag>
        <Tag colorScheme={theme}>Keil uVision</Tag>
        <Tag colorScheme={theme}>RTOS</Tag>
        <Tag colorScheme={theme}>MIT App Inventor</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>
            Designed an RTOS-based robotic car, HeLeN, controlled through an
            Android App developed using MIT App Inventor.
          </ListItem>
          <ListItem>
            Utilized message queue to control and send information between
            threads and interrupts to support remote-controlled and self-driving
            mode.
          </ListItem>
          <ListItem>
            Implemented communications by receiving the serial data from the
            android app and decoding it to put the necessary messages in the
            queue.
          </ListItem>
          <ListItem>
            Supported features such as LED displays and audio where their
            behaviours were controlled based on the input messages.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default HeLeN;
