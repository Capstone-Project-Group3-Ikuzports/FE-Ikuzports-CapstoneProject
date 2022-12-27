import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HeroLogin from "../../components/HeroLogin";
import "../../styles/uploadFile.css";
import UploadFiles from "../../components/UploadFiles";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [file, setFiles] = useState(null);

  //=== SET PREVIOUS IMAGE ===//
  const [prev, setPrev] = useState("");

  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <HeroLogin />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w="35vw"
      >
        <Box w={"25vw"}>
          <FormControl isRequired>
            <Text fontSize={"3xl"} color={"brand.300"}>
              Create an account
            </Text>
            <FormLabel color={"brand.300"}>Name</FormLabel>
            <Input id="name" type="text" border={"2px"} />
            <FormLabel color={"brand.300"}>Email</FormLabel>
            <Input id="email" type="email" border={"2px"} />
            <FormLabel color={"brand.300"}>Password</FormLabel>
            <Input id="password" type="password" border={"2px"} />
          </FormControl>
          <FormControl>
            <Flex>
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
            <UploadFiles
              prev={prev}
              prevSize={"lg"}
              onChange={({ target: { files } }) => {
                files[0] && setFiles(files[0].name);
                if (files) {
                  setPrev(URL.createObjectURL(files[0]));
                  setFiles(files[0]);
                }
              }}
            />
            <Button
              bg="brand.300"
              color={"primary.100"}
              w={"full"}
              mt={6}
              _hover={{ bg: "#0000e5" }}
            >
              Create account
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Stack>
  );
};

export default Register;
