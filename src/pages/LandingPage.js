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

const LandingPage = () => {
  return (
    <LandingLayout>
      <Hero></Hero>
      <Tabs colorScheme="coral" variant="enclosed-colored">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
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
