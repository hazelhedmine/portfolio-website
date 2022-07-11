import {
  Box,
  Flex,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

const Work = ({ props }) => {
  return (
    <Flex direction="column" p={6} gap={6}>
      <Stat textAlign="left">
        <StatLabel>Advanced Micro Devices (Singapore)</StatLabel>
        <StatNumber>Product Engineering Intern</StatNumber>
        <StatHelpText>May 2021 - November 2021</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap">
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
            Enhanced a PowerBI tool using migrate from using a local database to
            a Snowflake server via an internal API and a GUI using Python.
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
  );
};

export default Work;
