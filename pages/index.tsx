import { Flex, Button, useToast } from "@chakra-ui/react";

const Home: React.FC = () => {
  const toast = useToast();

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <Button
        onClick={() => {
          toast({
            title: "Clicked!",
            description: "nice.",
            status: "success",
          });
        }}
      >
        Click me!
      </Button>
    </Flex>
  );
};

export default Home;
