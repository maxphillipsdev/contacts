import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Divider,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import DBContext, { IContact } from "../lib/db";
import { HiTrash } from "react-icons/hi";

interface ContactCardProps {
  contact: IContact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const db = useContext(DBContext);
  const toast = useToast();

  return (
    <AccordionItem>
      <AccordionButton
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar size="lg" name={contact.name} />
        <Box d="flex">
          <Text fontWeight="bold">
            {contact.name
              ? contact.name
              : contact.email
              ? contact.email
              : contact.tel}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text fontWeight="bold">Phone: </Text>
        <Text>{contact.tel || "None"}</Text>
        <Text fontWeight="bold">eMail: </Text>
        <Text>{contact.email || "None"}</Text>
        <Text fontWeight="bold">Organization/Company: </Text>
        <Text>{contact.organization || "None"}</Text>
        <Button
          leftIcon={<HiTrash />}
          onClick={() => {
            db?.contacts
              .delete(contact.id)
              .then(() =>
                toast({
                  title: "Contact deleted",
                  description: `Deleted contact ${contact.name}`,
                  status: "success",
                })
              )
              .catch((err) =>
                toast({
                  title: "Error",
                  description: `Error while deleting contact ${contact.name}`,
                  status: "error",
                })
              );
          }}
        >
          Delete
        </Button>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ContactCard;
