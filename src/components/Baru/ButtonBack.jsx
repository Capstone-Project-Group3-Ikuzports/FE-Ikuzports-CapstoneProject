import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

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

// === BUTTON FOR ALL === //
export const Buttons = ({textContent, openTrigger, changeTrigger, ml, mr, disabled}) => {
  return (
    <div>
        <Button
            justify="end"
            onClick={openTrigger}
            onChange={changeTrigger}
            justifyContent="end"
            px="10"
            disabled={disabled}
            backgroundColor={"brand.300"}
            _hover={{ bg: "brand.200" }}
            color={"white"}
            mr={mr}
            ml={ml}
            >
            {textContent}
        </Button>
    </div>
  )
}

// === BUTTON CANCEL FOR MODAL AND PAGE === //
export const ButtonsCancel = ({textContent, openTrigger, textColor, changeTrigger, ml, mr}) => {
  return (
    <div>
        <Button
            justify="end"
            onClick={openTrigger}
            onChange={changeTrigger}
            justifyContent="end"
            px="10"
            backgroundColor={"brand.500"}
            _hover={{ bg: "brand.900" }}
            color={"white"}
            ml={ml}
            mr={mr}
            >
            {textContent}
        </Button>
    </div>
  )
}
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
export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      size={"md"}
      variant={"ghost"}
      _hover={{ bg: "#2E5984", color: "#eaeaea" }}
      onClick={() => navigate(-1)}
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
