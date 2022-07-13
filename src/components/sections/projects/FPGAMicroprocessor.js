import {
  Box,
  Flex,
  ListItem,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  UnorderedList,
} from '@chakra-ui/react';

const FPGAMicroprocessor = ({ theme }) => {
  return (
    <Flex direction="column" gap={6}>
      <Stat textAlign={{ base: 'center', md: 'left' }}>
        <StatNumber>FPGA Microprocessor</StatNumber>
        <StatHelpText>August 2021 - November 2021</StatHelpText>
      </Stat>

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'left' }}>
        <Tag colorScheme={theme}>Verilog</Tag>
        <Tag colorScheme={theme}>Assembly (RISC-V)</Tag>
        <Tag colorScheme={theme}>FPGA</Tag>
        <Tag colorScheme={theme}>Vivado 2021</Tag>
      </Flex>

      <Box align="left">
        <UnorderedList fontSize="sm">
          <ListItem>
            Designed a RISC-V processor using verilog on a FPGA.
          </ListItem>
          <ListItem>
            Parsed instructions from RV32I Base Integer Instruction Set and
            implemented floating point operations.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default FPGAMicroprocessor;
