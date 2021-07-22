import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef?: React.RefObject<any> | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader display="flex" alignItems="center">
          <HiUserCircle size="36" />
          <Heading as="h4" marginLeft="0.5rem">
            Contacts
          </Heading>
        </DrawerHeader>
        <Divider />
        <DrawerBody></DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
