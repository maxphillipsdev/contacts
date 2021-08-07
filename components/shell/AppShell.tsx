import {
  Box,
  Divider,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import React from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "../utils/ThemeToggle";
import dynamic from "next/dynamic";
import AddContactModal from "./AddContactModal";
import ImportContacts from "./ImportContacts";

interface AppShellProps {}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="100%" h="100%" spacing={0}>
      <Flex
        as="nav"
        className="header"
        alignItems="center"
        w="100%"
        p={4}
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

        <Flex gridColumnGap="1rem">
          <ImportContacts />
          <AddContactModal />
          <ThemeToggle />
        </Flex>
      </Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Divider />
      <Box w="100%" h="100%">
        {children}
      </Box>
    </VStack>
  );
};

export default AppShell;
