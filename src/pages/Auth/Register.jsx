import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [file, setFiles] = useState(null);

  const navigate = useNavigate();

  //=== SET PASSWORD ===//
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //=== SET PREVIOUS IMAGE ===//
  const [prev, setPrev] = useState("");

  const register = async () => {
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    form.append("phone_number", phone);
    form.append("address", address);
    form.append("gender", gender);
    form.append("user_image", file);

    const url_register = "https://rubahmerah.site/users";

    await axios
      .post(url_register, form, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `Create account successfully `,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          text: `${err.response.data.message}`,
          timer: 3000,
          showConfirmButton: true,
        });
      });
  };

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
            <Input
              id="name"
              type="text"
              border={"2px"}
              onChange={(e) => setName(e.target.value)}
              placeholder={`Alterra Sport`}
              _placeholder={{ fontSize: "sm" }}
            />
            <FormLabel color={"brand.300"}>Email</FormLabel>
            <Input
              id="email"
              type="email"
              border={"2px"}
              placeholder={`ikuzport@gmail.com`}
              _placeholder={{ fontSize: "sm" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Flex>
              <FormLabel color={"brand.300"}>Password</FormLabel>
            </Flex>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                border={"2px"}
                placeholder={`example : Asdqwe123!`}
                _placeholder={{ fontSize: "sm" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement mr={2}>
                <Button h="1.75rem" size="xs" onClick={handleClick}>
                  {show ? (
                    <AiFillEye size={20} color={"#00008B"} />
                  ) : (
                    <AiFillEyeInvisible size={20} color={"#00008B"} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <Flex>
              <FormControl w={"50%"} isRequired>
                <FormLabel color={"brand.300"} w={"100%"}>
                  Phone number
                </FormLabel>
              </FormControl>
              <FormLabel color={"brand.300"} pl={3} w={"36"}>
                Gender
              </FormLabel>
            </Flex>
            <Flex align={"center"}>
              <Input
                id="number"
                type="number"
                border={"2px"}
                w={"50%"}
                onChange={(e) => setPhone(e.target.value)}
              />
              <RadioGroup pl={3} colorScheme={"purple"} color={"brand.300"}>
                <Stack direction="row">
                  <Radio
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <FormLabel color={"brand.300"}>Address</FormLabel>
            <Textarea
              id="textarea"
              type="textarea"
              border={"2px"}
              mb={4}
              onChange={(e) => setAddress(e.target.value)}
            />
            <UploadFiles
              prev={prev}
              prevSize={"lg"}
              onChange={({ target: { files } }) => {
                files[0] && setPrev(files[0].name);
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
              onClick={register}
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
