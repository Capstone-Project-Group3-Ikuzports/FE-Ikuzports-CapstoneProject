import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sample from ".././assets/sample.png";
import { ButtonBack, ButtonCancel, ButtonSave } from "../components/Button";
import UploadFiles from "../components/UploadFiles";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const [file, setFiles] = useState(null);
  const [prev, setPrev] = useState("");
  const [gender, setGender] = useState(" ");
  const user = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();

  const DellAcc = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#454545",
      confirmButtonText: "Yes Delete",
      cancelButtonColor: "#DC143C",
      cancelButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
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

  useEffect(() => {
    if (!user.token) {
      navigate("/");
    }
    return () => {};
  }, [user.token]);
  return (

<Layout>
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"5xl"} textAlign={"start"} as='u'>
              Profile
            </Text>
      
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
                <Input id="email" type="text" border={"2px"} mb={4} />
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
            <ButtonCancel />
            <ButtonSave />
          </ButtonGroup>
        </Flex>
      </Box>
      </Layout>
  );
};

export default Profile;
