import { IconButton, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiOfficeBuilding } from "react-icons/hi";

const ImportContacts: React.FC = () => {
  const toast = useToast();
  const supported: boolean =
    "contacts" in navigator && "ContactsManager" in window;

  const handleClick = async () => {
    if (supported) {
      const properties: object = await navigator.contacts.getProperties();
      toast({
        title: "Contact options",
        description: JSON.stringify(properties),
        status: "info",
      });
    } else {
      toast({
        title: "Not Suppported Error",
        description: "Contact Picker is not supported on this device.",
        status: "error",
      });
    }
  };

  return (
    <IconButton
      disabled={!supported}
      onClick={handleClick}
      aria-label="Toggle sidebar"
      icon={<HiOfficeBuilding size="1.5rem" />}
    />
  );
};

export default ImportContacts;
