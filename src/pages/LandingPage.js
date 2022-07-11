import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import LandingLayout from '../components/layouts/LandingLayout';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Education from '../components/sections/Education';

const StyledTab = ({ children, ...props }) => {
  return (
    <Tab
      _selected={{ color: 'black', bg: 'white' }}
      _hover={{ color: 'coral.600' }}
      _active={{ size: 'lg' }}
      borderTopRadius="lg"
      {...props}
    >
      {children}
    </Tab>
  );
};

const LandingPage = () => {
  return (
    <LandingLayout>
      <Hero></Hero>
      <Skills></Skills>

      <Heading
        as="h1"
        size="lg"
        fontWeight="bold"
        fontFamily='"Playfair Display", serif'
        color="primary.800"
        textAlign={['center', 'center', 'left', 'left']}
        mb={6}
      >
        Select a tab to see it's details!
      </Heading>
      <ChevronDownIcon boxSize={12} mb={16}></ChevronDownIcon>

      <Box align="center" px={8} mb={32} w="80%">
        <Tabs
          colorScheme="cyan"
          variant="soft-rounded" //bc of custom styling
          align="center"
          size={{ base: 'sm', sm: 'md', md: 'lg' }}
        >
          <TabList
            fontWeight="normal"
            fontFamily='"Playfair Display", serif'
            mb={6}
          >
            <Tab>EDUCATION</Tab>
            <Tab>WORK EXPERIENCE</Tab>
            <Tab>PROJECTS</Tab>
          </TabList>
          <TabPanels
            bg={useColorModeValue('white')}
            borderRadius="lg"
            borderBottom="4px solid" //for pop up effect
            borderBottomColor="cyan.200"
            borderRight="4px solid"
            borderRightColor="cyan.200"
          >
            <TabPanel>
              <Education></Education>
            </TabPanel>
            <TabPanel>Two</TabPanel>
            <TabPanel>Three</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </LandingLayout>
  );
};

export default LandingPage;
