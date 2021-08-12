import { IconButton, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import DBContext, { IContact } from "../../lib/db";

const ImportContacts: React.FC = () => {
  const toast = useToast();
  const db = useContext(DBContext);
  const supported: boolean =
    "contacts" in navigator && "ContactsManager" in window;
  const props = ["email", "tel"];

  const handleClick = async () => {
    if (supported) {
      if (!db) {
        toast({
          status: "error",
          title: "Database is available.",
          description: "Please try again later.",
        });
        return;
      }
      try {
        const contacts: IContact[] = await navigator?.contacts?.select(props, {
          multiple: true,
        });
        await db.contacts
          .bulkAdd(contacts)
          .then(async () => {
            const count = await db.contacts.count();
            toast({
              status: "success",
              title: "Contacts Created",
              description: count,
            });
          })
          .catch((e: Error) => {
            console.error(e);
            toast({ status: "error", title: "Error creating contact." });
          });
      } catch (ex) {}
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
