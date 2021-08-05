import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { ContactsDB } from "../../lib/db";
import AddContactForm from "./AddContactForm";

interface AddContactModalProps {}

const AddContactModal: React.FC<AddContactModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Toggle dark mode"
        onClick={onOpen}
        icon={<HiPlus />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="50%">
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddContactModal;
