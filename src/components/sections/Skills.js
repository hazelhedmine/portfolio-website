import {
  Box,
  Divider,
  Flex,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';

import {
  PythonIcon,
  JavaIcon,
  JavascriptIcon,
  CIcon,
  CPPIcon,
  CSharpIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  ChakraUIIcon,
  NodeJSIcon,
  ExpressIcon,
  PostgreSQLIcon,
  MongoDBIcon,
} from '../icons';

const TechnicalSkill = ({ icon, skill }) => {
  return (
    <Box>
      <Tag size="lg" colorScheme="coral" borderRadius="lg">
        <TagLeftIcon boxSize="20px" as={icon}></TagLeftIcon>
        <TagLabel as="code">{skill}</TagLabel>
      </Tag>
    </Box>
  );
};

const SkillHeader = ({ header }) => {
  return (
    <Flex align="center">
      <Divider borderBottomColor="gray.900" width="4vw" />
      <Heading
        as="h2"
        size="md"
        fontWeight="bold"
        fontFamily='"Playfair Display", serif'
        color="primary.800"
        opacity="0.8"
        padding={6}
      >
        {header}
      </Heading>
      <Divider borderBottomColor="gray.900" width="4vw" />
    </Flex>
  );
};

const Skills = ({ props }) => {
  return (
    <Flex
      align="center"
      direction="column"
      w="80%"
      wrap="no-wrap"
      px={8}
      mb={32}
      gap={16}
      {...props}
    >
      <Heading
        as="h1"
        size="lg"
        fontWeight="bold"
        fontFamily='"Playfair Display", serif'
        color="primary.800"
        textAlign={['center', 'center', 'left', 'left']}
      >
        This is a list of my technical skills.
      </Heading>

      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        gap={8}
      >
        <TechnicalSkill icon={PythonIcon} skill="Python"></TechnicalSkill>
        <TechnicalSkill icon={JavaIcon} skill="Java"></TechnicalSkill>
        <TechnicalSkill icon={CPPIcon} skill="C++"></TechnicalSkill>
        <TechnicalSkill icon={CIcon} skill="C"></TechnicalSkill>
        <TechnicalSkill icon={CSharpIcon} skill="C#"></TechnicalSkill>
      </Flex>

      <Flex align="center" display="flex" direction="column" gap={4}>
        <SkillHeader header="web development"></SkillHeader>
        <Flex
          align="center"
          justify="center"
          direction={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          gap={8}
        >
          <TechnicalSkill icon={HTMLIcon} skill="HTML5"></TechnicalSkill>
          <TechnicalSkill icon={CSSIcon} skill="CSS"></TechnicalSkill>
          <TechnicalSkill
            icon={JavascriptIcon}
            skill="Javascript"
          ></TechnicalSkill>
          <TechnicalSkill icon={ReactIcon} skill="React"></TechnicalSkill>
          <TechnicalSkill icon={ChakraUIIcon} skill="ChakraUI"></TechnicalSkill>
          <TechnicalSkill icon={NodeJSIcon} skill="NodeJS"></TechnicalSkill>
          <TechnicalSkill icon={ExpressIcon} skill="Express"></TechnicalSkill>
        </Flex>
      </Flex>

      <Flex align="center" display="flex" direction="column" gap={4}>
        <SkillHeader header="database systems"></SkillHeader>
        <Flex
          align="center"
          justify="center"
          direction={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          gap={8}
        >
          <TechnicalSkill
            icon={PostgreSQLIcon}
            skill="PostgreSQL"
          ></TechnicalSkill>
          <TechnicalSkill icon={MongoDBIcon} skill="MongoDB"></TechnicalSkill>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
