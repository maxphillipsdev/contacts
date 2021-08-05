import {
  Flex,
  ListItem,
  Spinner,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
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
