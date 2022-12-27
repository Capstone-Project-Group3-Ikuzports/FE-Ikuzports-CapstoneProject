import {
  Stack,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Radio,
  RadioGroup,
  Textarea,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import UploadFiles from "../components/UploadFiles";
import { useCallback } from "react";
import Sample from ".././assets/sample.png";
import Swal from "sweetalert2";

const Profile = () => {
  const [file, setFiles] = useState(null);
  const [prev, setPrev] = useState("");
  const [gender, setGender] = useState(" ");

  const navigate = useNavigate();
  // console.log("file", file);

  const DellAcc = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DC143C",
      confirmButtonText: "Not now",
      cancelButtonColor: "#454545",
      cancelButtonText: "Yes, Delete",
    }).then((result) => {
      if (!result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Your account has deleted, see you 👋🏻",
          showConfirmButton: false,
          timer: 1500,
        });
        // delUser();
        // removeCookie("token");
        // Router.push({ pathname: `/auth/login` });
      }
    });
  }, []);
  console.log("prev", prev);
  return (
    <Box minH={"100vh"} backgroundColor={"brand.100"}>
      <Navbar />
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
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
        </Flex>
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"4xl"} textAlign={"start"}>
              Profile
            </Text>
            <hr className="hr-profile" />
            <Box display={"flex"} flexDirection={"column"} pt={5}>
              <Image
                src={Sample}
                rounded={"full"}
                w={"56"}
                h={"56"}
                objectFit={"cover"}
              />
              <Text as={"h2"} fontSize={"lg"} fontWeight={"bold"} pt={2}>
                M Rendra Andrinsyah
              </Text>
            </Box>
          </Box>
          <Box w={"40vw"}>
            <Center>
              <FormControl px={5}>
                <FormLabel color={"brand.300"}>Full Name</FormLabel>
                <Input id="name" type="text" border={"2px"} />
                <FormLabel color={"brand.300"}>Email</FormLabel>
                <Input id="email" type="text" border={"2px"} />
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
                <Flex pt={2}>
                  <FormLabel color={"brand.300"} w={"50%"}>
                    Phone number
                  </FormLabel>
                  <FormLabel color={"brand.300"} pl={3} w={"50%"}>
                    Gender
                  </FormLabel>
                </Flex>
                <Flex align={"center"}>
                  <Input id="number" type="number" border={"2px"} w={"50%"} />
                  <RadioGroup
                    onChange={setGender}
                    value={gender}
                    pl={3}
                    colorScheme={"purple"}
                    color={"brand.300"}
                  >
                    <Stack direction="row">
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
                <FormLabel color={"brand.300"}>Address</FormLabel>
                <Textarea id="textarea" type="textarea" border={"2px"} />
              </FormControl>
            </Center>
          </Box>
        </Flex>
        <Flex w={"65vw"} alignItems={"center"} pt={2}>
          <Text
            as={"button"}
            fontWeight={"bold"}
            fontSize={"lg"}
            color={"brand.500"}
            onClick={DellAcc}
          >
            Delete account?
          </Text>
          <Spacer />
          <ButtonGroup spacing={4} px={5}>
            <Button
              w={20}
              h={8}
              variant={"outline"}
              color={"brand.500"}
              _hover={{ bgColor: "brand.500", color: "primary.100" }}
            >
              Cancel
            </Button>
            <Button
              w={20}
              h={8}
              bgColor={"brand.300"}
              color={"primary.100"}
              _hover={{ bgColor: "primary.300" }}
            >
              Save
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
