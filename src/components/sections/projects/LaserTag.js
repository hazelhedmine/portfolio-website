import {
  Box,
  Flex,
  Link,
  ListItem,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

const LaserTag = ({ theme }) => {
  return (
    <Flex direction="column" gap={6}>
      <Stat textAlign={{ base: 'center', md: 'left' }}>
        <StatNumber>Augmented Reality Laser Tag System</StatNumber>
        <StatHelpText>Jan 2022 - May 2022</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
        <Tag colorScheme={theme}>Unity</Tag>
        <Tag colorScheme={theme}>Vuforia Engine</Tag>
        <Tag colorScheme={theme}>C#</Tag>
        <Tag colorScheme={theme}>AMQP</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>
            Built a 2-player Augmented Reality (AR) laser tag system in a team
            of 5 by applying hardware and software engineering design principles
            in designing and implementing a complex embedded system.
          </ListItem>
          <ListItem>
            Created a Unity phone application as a visualiser for players that
            displayed realtime AR gameplay effects such as shields and grenades
            using Vuforia with C# scripting.
          </ListItem>
          <ListItem>
            Utilized AMQP via an open source Unity3d project called{' '}
            <Link
              isExternal
              color={`${theme}.500`}
              href="https://github.com/CymaticLabs/Unity3D.Amqp"
            >
              Unity3D.Amqp
            </Link>{' '}
            to receive and send game data between the phone and game server
            hosted on an Ultra96 FPGA.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default LaserTag;
