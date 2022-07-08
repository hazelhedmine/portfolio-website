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
            <Link isExternal="true" href="https://github.com/hazelhedmine">
              <Button
                mr="10"
                variant="link"
                colorScheme="black"
                leftIcon={<FaGithub></FaGithub>}
              >
                Github
              </Button>
            </Link>
            <Link isExternal="true" href="https://github.com/hazelhedmine">
              <Button
                variant="link"
                colorScheme="black"
                leftIcon={<FaLinkedin></FaLinkedin>}
              >
                LinkedIn
              </Button>
            </Link>
          </Hide>
          <Show below="md">
            <Menu isLazy="true" id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
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

// <ColorModeSwitcher justifySelf="flex-end" />
