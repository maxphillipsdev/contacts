import {
  Box,
  Flex,
  IconButton,
  IconButtonProps,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import React from "react";
import Sidebar from "./Sidebar";

const AppShell: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="100%" h="100%" spacing={0}>
      <Flex
        as="nav"
        className="header"
        alignItems="center"
        bg="tomato"
        w="100%"
        p={4}
        color={"white"}
        height={"64px"}
      >
        <Box className="icons">
          <IconButton
            onClick={onOpen}
            aria-label="Toggle sidebar"
            icon={<HiMenu size="1.5rem" />}
          />
        </Box>
        <Spacer />
        <Box className="">Options</Box>
      </Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box w="100%" h="100%" bg="teal">
        {children}
      </Box>
    </VStack>
  );
};

export default AppShell;
