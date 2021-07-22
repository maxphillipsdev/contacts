import { Button, useToast } from "@chakra-ui/react";

const Home: React.FC = () => {
  const toast = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: "Clicked!",
            description: "nice.",
          });
        }}
      >
        Click me!
      </Button>
    </div>
  );
};

export default Home;
