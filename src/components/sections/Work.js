import {
  Box,
  Divider,
  Flex,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';
import Transition from '../transition';

const Work = ({ props }) => {
  return (
    <Transition>
      <Flex direction="column" p={6} gap={6}>
        <Stat textAlign={{ base: 'center', md: 'left' }}>
          <StatLabel>
            National University of Singapore, School of Computing
          </StatLabel>
          <StatNumber>Teaching Assistant</StatNumber>
          <StatHelpText>August 2022 - Present</StatHelpText>
        </Stat>
        <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
          <Tag colorScheme="cyan">Unity</Tag>
          <Tag colorScheme="cyan">Vuforia Engine</Tag>
          <Tag colorScheme="cyan">C#</Tag>
          <Tag colorScheme="cyan">AMQP</Tag>
        </Flex>
        <Box align="left">
          <UnorderedList fontSize="sm">
            <ListItem>
              Facilitated the computer engineering capstone project requiring
              students to set up an AR laser tag system.
            </ListItem>
            <ListItem>
              Mentored 3 groups of 5 students and refined project requirements
              alongside professors.
            </ListItem>
            <ListItem>
              Served as the primary teaching assistant for the software
              visualizer component.
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Flex paddingX={6}>
        <Divider borderBottomColor="cyan.300"></Divider>
      </Flex>

      <Flex direction="column" p={6} gap={6}>
        <Stat textAlign={{ base: 'center', md: 'left' }}>
          <StatLabel>Advanced Micro Devices (Singapore)</StatLabel>
          <StatNumber>Product Engineering Intern</StatNumber>
          <StatHelpText>May 2021 - November 2021</StatHelpText>
        </Stat>
        <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
          <Tag colorScheme="coral">Python</Tag>
          <Tag colorScheme="coral">Tkinter</Tag>
          <Tag colorScheme="coral">GUI</Tag>
          <Tag colorScheme="coral">Snowflake</Tag>
          <Tag colorScheme="coral">API</Tag>
        </Flex>
        <Box align="left">
          <UnorderedList fontSize="sm">
            <ListItem>
              Developed a Graphical User Interface (GUI) tool using Python's
              Tkinter for Fuse Engineers a XML and xlsx file from relevant user
              inputs.
            </ListItem>
            <ListItem>
              Enhanced a PowerBI tool using migrate from using a local database
              to a Snowflake server via an internal API and a GUI using Python.
            </ListItem>
            <ListItem>
              Spearheaded presentations and discussions on the tools implemented
              with product engineers.
            </ListItem>
            <ListItem>
              Enhanced communication skills through weekly team meetings
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Transition>
  );
};

export default Work;
