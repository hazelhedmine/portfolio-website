import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { GrDocumentUser } from 'react-icons/gr';

const Projects = ({ props }) => {
  return (
    <Flex direction="column" p={6} gap={6}>
      <Stat textAlign="left">
        <StatNumber>Portfolio Website</StatNumber>
        <StatHelpText>It's this website!</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap">
        <Tag colorScheme="cyan">Javascript</Tag>
        <Tag colorScheme="cyan">React</Tag>
        <Tag colorScheme="cyan">Chakra UI</Tag>
        <Tag colorScheme="cyan">DEPLOYER</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>?</ListItem>
        </UnorderedList>
      </Box>
      {/*---------------------------------*/}
      <Divider borderBottomColor="cyan.300"></Divider>

      <Stat textAlign="left">
        <StatNumber>Augmented Reality Laser Tag System</StatNumber>
        <StatHelpText>Jan 2022 - May 2022</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap">
        <Tag colorScheme="coral">Unity</Tag>
        <Tag colorScheme="coral">Vuforia Engine</Tag>
        <Tag colorScheme="coral">C#</Tag>
        <Tag colorScheme="coral">AMQP</Tag>
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
              color="coral.300"
              href="https://github.com/CymaticLabs/Unity3D.Amqp"
            >
              Unity3D.Amqp
            </Link>{' '}
            to receive and send game data between the phone and game server
            hosted on an Ultra96 FPGA.
          </ListItem>
        </UnorderedList>
      </Box>
      {/*---------------------------------*/}
      <Divider borderBottomColor="cyan.300"></Divider>

      <Flex justify="space-between">
        <Stat textAlign="left">
          <StatNumber>UniTracker</StatNumber>
          <StatHelpText>January 2021 - May 2021</StatHelpText>
        </Stat>
        <Menu>
          <MenuButton
            variant="ghost"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            links
          </MenuButton>
          <MenuList>
            <MenuItem
              as={Link}
              isExternal
              href="https://ay2021s2-cs2113t-f08-4.github.io/tp/UserGuide.html"
            >
              User Guide
            </MenuItem>
            <MenuItem
              as={Link}
              isExternal
              href="https://github.com/AY2021S2-CS2113T-F08-4/tp"
            >
              Source Code
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex gap={4} flexWrap="wrap">
        <Tag colorScheme="purple">CLI</Tag>
        <Tag colorScheme="purple">Java</Tag>
        <Tag colorScheme="purple">JUnit</Tag>
        <Tag colorScheme="purple">Sourcetree</Tag>
        <Tag colorScheme="purple">Markdown</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>
            Developed a university organizational tool in a team of 4 using Java
            on the command line interface.
          </ListItem>
          <ListItem>
            Implemented the task organization feature for users to categorize,
            create, delete, pin and update the status of tasks using
            Object-Oriented Programming in Java.
          </ListItem>
          <ListItem>
            Practiced JUnit testing, build automation tools, code revision tools
            and breadth-first iterative software development life cycles.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Projects;
