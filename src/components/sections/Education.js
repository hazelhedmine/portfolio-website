import {
  Box,
  Code,
  Flex,
  ListItem,
  Show,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const Education = ({ props }) => {
  return (
    <Flex direction="column" p={6} gap={6}>
      <Stat textAlign="left">
        <StatLabel>National University of Singapore</StatLabel>
        <StatNumber>Bachelor of Engineering (Computer Engineering)</StatNumber>
        <StatHelpText>August 2019 - May 2023</StatHelpText>
      </Stat>

      <Box align="left">
        <Tag marginBottom={2} colorScheme="coral">
          Relevant Courses
        </Tag>
        <UnorderedList fontSize="sm">
          <ListItem>Programming Methodology (Python)</ListItem>
          <ListItem>Data Structure and Algorithms (C++)</ListItem>
          <ListItem>
            Software Engineering and Object-Oriented Programming (Java)
          </ListItem>
          <ListItem>C Programming</ListItem>
          <ListItem>Computer Architecture (RISC-V)</ListItem>
          <ListItem>Database Systems (PostgreSQL)</ListItem>
        </UnorderedList>
      </Box>

      <Box align="left">
        <Tag marginBottom={2} colorScheme="purple">
          Co-Curricular Activities
        </Tag>
        <Box fontSize="sm">
          <b>Welfare Head of Electrical and Computer Engineering Club</b>
          <Text marginBottom={1} color="gray">
            September 2020 - May 2021
          </Text>
          <UnorderedList fontSize="sm">
            <ListItem>
              Led a team of 12 members to organize ECE shirt sales, bubble tea
              giveaway and welfare packs
            </ListItem>
            <ListItem>
              Learned to source and communicate with suppliers and manage orders
            </ListItem>
            <ListItem>
              Improved organizational and communication skills while guiding a
              team and planning events
            </ListItem>
            <ListItem>
              Collaborated with 4 other departments to promote and plan
              activities for over 1000 ECE students
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  );
};

export default Education;
