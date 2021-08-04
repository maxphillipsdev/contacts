import {
  Flex,
  Button,
  useToast,
  UnorderedList,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import AddContactForm from "../components/shell/AddContactForm";
import { ContactsDB, IContact } from "../lib/db";

interface HomeProps {
  db: ContactsDB;
}

const Home: React.FC<HomeProps> = ({ db }) => {
  const toast = useToast();

  const [contacts, setContacts] = useState<IContact[] | null>([]);

  useEffect(() => {
    db.contacts
      .orderBy("givenName")
      .limit(10)
      .toArray()
      .then((result) => {
        setContacts(result);
      });
  }, [contacts]);

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <UnorderedList>
        {!contacts ? (
          <Spinner />
        ) : (
          contacts.map((contact) => {
            return (
              <ListItem key={contact.id}>
                {contact.givenName} {contact.familyName}
              </ListItem>
            );
          })
        )}
      </UnorderedList>
    </Flex>
  );
};

export default Home;
