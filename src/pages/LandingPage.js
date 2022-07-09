import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import LandingLayout from '../components/layouts/LandingLayout';
import Hero from '../components/sections/Hero';

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
      <Tabs colorScheme="coral" variant="unstyled" align="center" size="lg">
        <TabList>
          <StyledTab>SKILLS</StyledTab>
          <StyledTab>WORK EXPERIENCE</StyledTab>
          <StyledTab>PROJECTS</StyledTab>
        </TabList>

        <TabPanels bg={useColorModeValue('white')}>
          <TabPanel>One</TabPanel>
          <TabPanel>Two</TabPanel>
          <TabPanel>Three</TabPanel>
        </TabPanels>
      </Tabs>
    </LandingLayout>
  );
};

export default LandingPage;
