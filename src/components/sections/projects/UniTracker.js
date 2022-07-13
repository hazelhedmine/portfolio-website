import {
  Box,
  Button,
  Flex,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

const UniTracker = ({ theme }) => {
  return (
    <Flex direction="column" gap={6}>
      <Flex
        justify={{ base: 'left', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stat textAlign={{ base: 'center', md: 'left' }}>
          <StatNumber>UniTracker</StatNumber>
          <StatHelpText>January 2021 - May 2021</StatHelpText>
        </Stat>
        <Box align="center">
          <Menu>
            <MenuButton
              variant={{ base: 'outline', md: 'ghost' }}
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
        </Box>
      </Flex>

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
        <Tag colorScheme={theme}>CLI</Tag>
        <Tag colorScheme={theme}>Java</Tag>
        <Tag colorScheme={theme}>JUnit</Tag>
        <Tag colorScheme={theme}>Sourcetree</Tag>
        <Tag colorScheme={theme}>Markdown</Tag>
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

export default UniTracker;
