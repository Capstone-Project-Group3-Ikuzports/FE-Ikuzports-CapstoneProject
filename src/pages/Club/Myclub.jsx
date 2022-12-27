import React from "react";
import CardMyClub from "../../components/MyClub/CardMyClub";
import Navbar from "../../components/Navbar";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Divider,
  Button,
  SimpleGrid,
  Card,
} from "@chakra-ui/react";

const Myclub = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Box
        p="8"
        px={"10%"}
        w={"100vw"}
        h={"100vh"}
        backgroundColor={"brand.100"}
        overflowX="hidden"
      >
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <Button
            variant={"ghost"}
            _hover={{ bg: "#2E5984", color: "#eaeaea" }}
          >
            <BiArrowBack size={"28"} />
            <Text fontSize={"lg"} ml="0.5em">
              Back
            </Text>
          </Button>
        </Flex>
        <Text fontSize={"4xl"}>My Club</Text>
        <Divider w="17%" orientation="horizontal" />
        <Box justify="end" ml={"92%"} justifyContent={"end"}>
          <Button
            px="13%"
            ml="auto"
            mb={"20px"}
            justify="end"
            justifyContent={"end"}
            bg={"brand.300"}
            color="white"
            justifyItems="end"
          >
            Create a Club
          </Button>
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={8}>
          <CardMyClub />
          <CardMyClub />
          <CardMyClub />
          <CardMyClub />
          <CardMyClub />
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Myclub;
