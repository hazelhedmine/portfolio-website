import {
  Flex,
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
      <Flex align="center" px={8} mb={16}>
        {/*TODO: responsive style for tabs, then add sections
        maybe change to dropdown for mobile?
         */}
        <Tabs
          colorScheme="coral"
          fontWeight="normal"
          fontFamily='"Playfair Display", serif'
          variant="unstyled"
          align="center"
          size="lg"
        >
          <TabList>
            <StyledTab>EDUCATION</StyledTab>
            <StyledTab>WORK EXPERIENCE</StyledTab>
            <StyledTab>PROJECTS</StyledTab>
          </TabList>
          <TabPanels bg={useColorModeValue('white')}>
            <TabPanel>One</TabPanel>
            <TabPanel>Two</TabPanel>
            <TabPanel>Three</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </LandingLayout>
  );
};

export default LandingPage;
