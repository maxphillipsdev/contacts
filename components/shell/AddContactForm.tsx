import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiMail, HiOfficeBuilding, HiPhone, HiUser } from "react-icons/hi";
import DBContext, { ContactsDB, IContact } from "../../lib/db";

interface AddContactFormProps {}

const AddContactForm: React.FC<AddContactFormProps> = () => {
  const db = useContext(DBContext);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const toast = useToast();

  const onSubmit: SubmitHandler<IContact> = async (data) => {
    if (!db) {
      toast({
        status: "error",
        title: "Database is available.",
        description: "Please try again later.",
      });
      return;
    }
    await db.contacts
      .add(data)
      .then(() => {
        toast({ status: "success", title: "Contact Created" });
      })
      .catch((e: Error) => {
        console.error(e);
        toast({ status: "error", title: "Error creating contact." });
      });
  };

  return (
    <form id="add-contact" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch" marginInline="4">
        <HStack aria-label="Personal details">
          <FormLabel>
            <HiUser />
          </FormLabel>
          <Input
            id="given-name"
            autoComplete="given-name"
            placeholder="First Name"
            {...register("givenName", {
              required: "This is required",
              minLength: {
                value: 1,
                message: "Minimum length should be 1",
              },
            })}
          />
          <Input
            id="familyName"
            placeholder="Surname"
            {...register("familyName")}
          />
        </HStack>
        <HStack aria-label="Contact details">
          <FormLabel>
            <HiOfficeBuilding />
          </FormLabel>
          <Input
            id="organization"
            autoComplete="organization"
            placeholder="Company/Organization"
            {...register("organization")}
          />
        </HStack>
        <HStack aria-label="Contact details">
          <FormLabel>
            <HiPhone />
          </FormLabel>
          <Input
            id="tel"
            autoComplete="tel"
            placeholder="Phone"
            {...register("tel")}
          />
          <Select>
            <option value="mobile">Mobile</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
          </Select>
        </HStack>
        <HStack aria-label="Contact details">
          <FormLabel>
            <HiMail />
          </FormLabel>
          <Input
            id="email"
            autoComplete="email"
            placeholder="Email"
            {...register("email")}
          />
        </HStack>
        <Flex justifyContent="center" alignItems="center">
          <Button
            aria-label="Create Contact Button"
            type="submit"
            colorScheme="teal"
            isLoading={isSubmitting}
          >
            Create Contact
          </Button>
        </Flex>
      </VStack>
    </form>
  );
};

export default AddContactForm;
