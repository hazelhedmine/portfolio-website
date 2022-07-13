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

const TimeToGoHome = ({ theme }) => {
  return (
    <Flex direction="column" gap={6}>
      <Stat textAlign={{ base: 'center', md: 'left' }}>
        <StatNumber>"Time to go home!" - FPGA Design Project</StatNumber>
        <StatHelpText>January 2020 - April 2020</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
        <Tag colorScheme={theme}>Verilog</Tag>
        <Tag colorScheme={theme}>FPGA</Tag>
        <Tag colorScheme={theme}>Vivado 2019</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>
            Created a Sound Display and Entertainment system (SDE) in a team of
            2 using Verilog.
          </ListItem>
          <ListItem>
            Implemented real-time audio volume indicator using a LED array and
            7-segment display.
          </ListItem>
          <ListItem>
            Designed a creative and complex interactive storybook feature called
            "Time to go home!" using an OLED display and integrated audio
            signals into mini games.
          </ListItem>
          <ListItem>
            Cultivated effective communication skills and engaged in
            collaborative partnership.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default TimeToGoHome;
