import {
  Box,
  Button,
  Container,
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

// TODO: links should be centered horizontally...

const NavBar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('coral.50', 'coral.900')}
    >
      <Container
        display="flex"
        px="10"
        py="4"
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
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
              color="current"
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
                window.open('https://github.com/hazelhedmine');
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
                <Link href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </Link>
                <Link href="/" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </Link>
                <Link href="/" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Show>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
