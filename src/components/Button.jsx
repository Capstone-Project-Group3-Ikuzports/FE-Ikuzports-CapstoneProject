import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

// === CANCEL === //
export const ButtonCancel = () => {
  return (
    <Button
      w={20}
      h={8}
      variant={"outline"}
      color={"brand.500"}
      _hover={{ bgColor: "brand.500", color: "primary.100" }}
    >
      Cancel
    </Button>
  );
};

// === SAVE === //
export const ButtonSave = ({ onClick }) => {
  return (
    <Button
      w={20}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
      onClick={onClick}
    >
      Save
    </Button>
  );
};

// === BACK === //
export const ButtonBack = () => {
  return (
    <Button
      size={"md"}
      variant={"ghost"}
      _hover={{ bg: "#2E5984", color: "#eaeaea" }}
    >
      <BiArrowBack size={"28"} />
      <Text fontSize={"lg"} ml="0.5em">
        Back
      </Text>
    </Button>
  );
};

// === CLEAR === //
export const ButtonClear = () => {
  return (
    <Button
      w={20}
      h={8}
      variant={"outline"}
      color={"brand.500"}
      _hover={{ bgColor: "brand.500", color: "primary.100" }}
    >
      Clear
    </Button>
  );
};

// === CREATE === //
export const ButtonCreate = ({ onClick }) => {
  return (
    <Button
      w={20}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
      onClick={onClick}
    >
      Create
    </Button>
  );
};
