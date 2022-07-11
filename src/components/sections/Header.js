// learnt from https://www.jimraptis.com/blog/build-a-landing-page-with-chakra-ui-part-1

import {
  Box,
  Heading,
  Show,
  Hide,
  Flex,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = props => {
  return (
    <Flex
      position="fixed"
      bg={useColorModeValue('coral.50', 'coral.900')}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={6}
      paddingX={8}
      paddingY={4}
      zIndex={1} //to bring in front
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h3" size="md" width="30">
          Hazel Hedmine Tan
        </Heading>
      </Flex>

      <Box flex={1} align="right">
        <Hide below="md">
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Go to Github`}
            variant="ghost"
            marginLeft="2"
            onClick={() => {
              window.open('https://github.com/hazelhedmine');
            }}
            icon={<FaGithub />}
          ></IconButton>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Go to LinkedIn`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={() => {
              window.open('https://sg.linkedin.com/in/hazelhedmine');
            }}
            icon={<FaLinkedin />}
          ></IconButton>
        </Hide>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Show below="md">
          <Menu isLazy="true" id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
              aria-label="Options"
              marginLeft="2"
              size="md"
              fontSize="2xl" // icon is smaller than rest, so increased this
            />
            <MenuList>
              <Link isExternal href="https://github.com/hazelhedmine" passHref>
                <MenuItem as={Link}>Github</MenuItem>
              </Link>
              <Link
                isExternal
                href="https://sg.linkedin.com/in/hazelhedmine"
                passHref
              >
                <MenuItem as={Link}>LinkedIn</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Show>
      </Box>
    </Flex>
  );
};

export default Header;
