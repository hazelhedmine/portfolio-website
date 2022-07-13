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
import Work from '../components/sections/Work';
import Projects from '../components/sections/Projects';

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
          colorScheme={useColorModeValue('cyan', 'coral')}
          variant="soft-rounded" //bc of custom styling
          align="center"
          size={{ base: 'sm', sm: 'md', md: 'lg' }}
          isLazy
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
            bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
            borderRadius="lg"
            borderBottom="4px solid" //for pop up effect
            borderBottomColor={useColorModeValue('cyan.200', 'coral.800')}
            borderRight="4px solid"
            borderRightColor={useColorModeValue('cyan.200', 'coral.800')}
          >
            <TabPanel>
              <Education></Education>
            </TabPanel>
            <TabPanel>
              <Work></Work>
            </TabPanel>
            <TabPanel>
              <Projects></Projects>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </LandingLayout>
  );
};

export default LandingPage;
