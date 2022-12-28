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
export const ButtonSave = () => {
  return (
    <Button
      w={20}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
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

// === SAVE === //
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

// === Create === //
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
