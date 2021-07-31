import { Flex, Button, useToast } from "@chakra-ui/react";
import AddContactForm from "../components/shell/AddContactForm";

const Home: React.FC = () => {
  const toast = useToast();

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <AddContactForm />
      {/* <Button
        onClick={() => {
          toast({
            title: "Clicked!",
            description: "nice.",
            status: "success",
          });
        }}
      >
        Click me!
      </Button> */}
    </Flex>
  );
};

export default Home;
