import {
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import FPGAMicroprocessor from './projects/FPGAMicroprocessor';
import HeLeN from './projects/HeLeN';

import LaserTag from './projects/LaserTag';
import TimeToGoHome from './projects/TimeToGoHome';
import UniTracker from './projects/UniTracker';

const FirstPage = () => {
  return (
    <Flex direction="column" p={6} gap={6}>
      <LaserTag theme="cyan"></LaserTag>

      <Divider borderBottomColor="cyan.300"></Divider>

      <FPGAMicroprocessor theme="coral"></FPGAMicroprocessor>

      <Divider borderBottomColor="cyan.300"></Divider>

      <UniTracker theme="purple"></UniTracker>
    </Flex>
  );
};

const SecondPage = () => {
  return (
    <Flex direction="column" p={6} gap={6}>
      <HeLeN theme="cyan"></HeLeN>

      <Divider borderBottomColor="cyan.300"></Divider>

      <TimeToGoHome theme="coral"></TimeToGoHome>
    </Flex>
  );
};

const Projects = ({ props }) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="coral" align="center">
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FirstPage></FirstPage>
        </TabPanel>
        <TabPanel>
          <SecondPage></SecondPage>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Projects;
