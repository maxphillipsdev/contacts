import {
  Accordion,
  ListItem,
  Spinner,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import DBContext, { IContact } from "../lib/db";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const db = useContext(DBContext);
  const [contacts, setContacts] = useState<IContact[] | null>([]);

  useEffect(() => {
    if (!db) {
      return;
    }
    db.contacts
      .orderBy("givenName")
      .limit(10)
      .toArray()
      .then((result) => {
        setContacts(result);
      });
  }, [contacts, db]);

  return (
    <Accordion h="100%">
      {!contacts ? (
        <Spinner />
      ) : (
        contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })
      )}
    </Accordion>
  );
};

export default Home;
