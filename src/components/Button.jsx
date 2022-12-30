import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

// === CANCEL === //
export const ButtonCancel = ({ onClick }) => {
  return (
    <Button
      w={20}
      h={8}
      variant={"outline"}
      color={"brand.500"}
      _hover={{ bgColor: "brand.500", color: "primary.100" }}
      onClick={onClick}
    >
      Cancel
    </Button>
  );
};

// === SAVE === //
export const ButtonSave = ({ onClick, isLoading }) => {
  return (
    <Button
      w={20}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
      onClick={onClick}
      spinnerPlacement="start"
      isLoading={isLoading}
    >
      Save
    </Button>
  );
};

// === BACK === //
export const ButtonBack = ({ onClick }) => {
  return (
    <Button
      size={"md"}
      variant={"ghost"}
      _hover={{ bg: "#2E5984", color: "#eaeaea" }}
      onClick={onClick}
    >
      <BiArrowBack size={"28"} />
      <Text fontSize={"lg"} ml="0.5em">
        Back
      </Text>
    </Button>
  );
};

// === CLEAR === //
export const ButtonClear = ({ onClick }) => {
  return (
    <Button
      w={20}
      h={8}
      variant={"outline"}
      color={"brand.500"}
      _hover={{ bgColor: "brand.500", color: "primary.100" }}
      onClick={onClick}
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

// === BUY === //
export const ButtonBuy = ({ onClick }) => {
  return (
    <Button
      w={"80%"}
      h={8}
      bgColor={"brand.600"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.600" }}
      onClick={onClick}
    >
      Buy Now
    </Button>
  );
};

// === ADD ACTIVITY === //
export const ButtonAddActivity = ({ onClick }) => {
  return (
    <Button
      w={"32"}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
      onClick={onClick}
    >
      Add activity
    </Button>
  );
};

// === ADD PHOTO === //
export const ButtonAddPhoto = ({ onClick }) => {
  return (
    <Button
      w={"32"}
      h={8}
      bgColor={"brand.300"}
      color={"primary.100"}
      _hover={{ bgColor: "primary.300" }}
      onClick={onClick}
    >
      Add new photo
    </Button>
  );
};
