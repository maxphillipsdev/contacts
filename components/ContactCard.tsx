import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IContact } from "../lib/db";

interface ContactCardProps {
  contact: IContact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <AccordionItem>
      <AccordionButton
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar size="lg" name={`${contact.givenName} ${contact.familyName}`} />
        <Box d="flex">
          <Text fontWeight="bold">
            {contact.givenName} {contact.familyName} ({contact.tel})
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text fontWeight="bold">Phone: </Text>
        <Text>{contact.tel}</Text>
        <Text fontWeight="bold">eMail: </Text>
        <Text>{contact.email}</Text>
        <Text fontWeight="bold">Organization/Company: </Text>
        <Text>{contact.organization}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ContactCard;
