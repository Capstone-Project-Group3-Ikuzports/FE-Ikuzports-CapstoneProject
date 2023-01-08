import { Button, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import { ArrowUpIcon } from "@chakra-ui/icons";

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
export const Buttons = ({
  textContent,
  openTrigger,
  changeTrigger,
  ml,
  mr,
  disabled,
}) => {
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
        _hover={{ bg: "primary.300" }}
        color={"white"}
        mr={mr}
        ml={ml}
      >
        {textContent}
      </Button>
    </div>
  );
};

// === BUTTON CANCEL FOR MODAL AND PAGE === //
export const ButtonsCancel = ({
  textContent,
  openTrigger,
  textColor,
  changeTrigger,
  ml,
  mr,
}) => {
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

// === TO TOP BUTTON === //
export const ToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 500 && (
        <Link href="/#top">
          <Box
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={1}
          >
            <Image src="images/icons/top.svg" w="60px" h="60px" />
          </Box>
        </Link>
      )}
    </>
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
