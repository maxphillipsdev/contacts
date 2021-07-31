import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiMail, HiOfficeBuilding, HiPhone, HiUser } from "react-icons/hi";
const AddContactForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <FormControl id="add-contact" isInvalid={errors.name}>
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
      </VStack>
    </FormControl>
  );
};

export default AddContactForm;
