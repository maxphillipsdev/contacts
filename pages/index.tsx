import { Flex, Button, useToast } from "@chakra-ui/react";
import AddContactForm from "../components/shell/AddContactForm";

const Home: React.FC = () => {
  const toast = useToast();

  return <Flex h="100%" justifyContent="center" alignItems="center"></Flex>;
};

export default Home;
