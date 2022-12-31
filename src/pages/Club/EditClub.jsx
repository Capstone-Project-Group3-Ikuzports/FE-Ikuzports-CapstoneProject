import React from "react";
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  ButtonBack,
  ButtonClear,
  ButtonCreate,
  ButtonSave,
} from "../../components/Button";
import UploadFiles from "../../components/UploadFiles";
import Sample from "../../assets/logo-text-blue.png";
import Layout from "../../components/Layout";

const EditClub = () => {
  const [prev, setPrev] = useState();
  const [files, setFiles] = useState();
  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"5xl"} textAlign={"start"} as="u">
              Edit Club
            </Text>
            <Box display={"flex"} flexDirection={"column"} pt={5}>
              <Box>
                <Image
                  src={Sample}
                  rounded={"full"}
                  w={"56"}
                  h={"56"}
                  objectFit={"cover"}
                />
                <Text as={"h2"} fontSize={"lg"} fontWeight={"bold"} pt={2}>
                  Ikuzport Futsal Club
                </Text>
              </Box>
            </Box>
          </Box>
          <Box w={"40vw"}>
            <Center>
              <FormControl px={5}>
                <FormLabel color={"brand.300"}>Club Name</FormLabel>
                <Input id="name" type="text" border={"2px"} bgColor="#ffffff" />
                <FormLabel color={"brand.300"}>Logo Picture</FormLabel>
                <UploadFiles
                  prev={prev}
                  prevSize={"xl"}
                  onChange={({ target: { files } }) => {
                    files[0] && setFiles(files[0].name);
                    if (files) {
                      setPrev(URL.createObjectURL(files[0]));
                      setFiles(files[0]);
                    }
                  }}
                />
                <Flex>
                  <FormLabel color={"brand.300"} w={"50%"}>
                    Max Member
                  </FormLabel>
                  <FormLabel color={"brand.300"} pl={3} w={"50%"}>
                    Category
                  </FormLabel>
                </Flex>
                <Flex gap={5}>
                  <Input
                    min={10}
                    max={100}
                    id="number"
                    type="number"
                    border={"2px"}
                    w={"50%"}
                    bgColor={"#FFFFFF"}
                    onChange={(e) => setMemberTotal(e.currentTarget.value)}
                  />
                  <Select
                    w={"50%"}
                    color={"brand.300"}
                    bgColor={"#FFFFFF"}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    defaultValue="jakarta"
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Bandung">Bandung</option>
                  </Select>
                  <Select
                    w={"50%"}
                    color={"brand.300"}
                    bgColor={"#FFFFFF"}
                    onChange={(e) => setCategory(e.currentTarget.value)}
                    defaultValue="1"
                  >
                    <option value="1">Football</option>
                    <option value="2">Basket ball</option>
                    <option value="3">Futsal</option>
                    <option value="4">Volley ball</option>
                    <option value="5">Badminton</option>
                    <option value="6">Cycle </option>
                    <option value="7">court tennis</option>
                    <option value="8">table tennis</option>
                    <option value="9">Swimming</option>
                    <option value="10">Self-defense</option>
                  </Select>
                </Flex>

                <FormLabel color={"brand.300"}>Address</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                />
                <FormLabel color={"brand.300"}>Desc</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                />
                <FormLabel color={"brand.300"}>Rules</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                />
                <FormLabel color={"brand.300"}>Requirement</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                />
              </FormControl>
            </Center>
          </Box>
        </Flex>
        <Flex w={"65vw"} alignItems={"center"} pt={2}>
          <Spacer />
          <ButtonGroup spacing={4} px={5}>
            <ButtonClear />
            <ButtonSave
              onClick={() => {
                Swal.fire(`${""}`, `${"Ikuzport"} has Edited`, "success");
              }}
            />
          </ButtonGroup>
        </Flex>
      </Box>
    </Layout>
  );
};

export default EditClub;
