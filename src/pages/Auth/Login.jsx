import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import HeroLogin from "../../components/Baru/HeroLogin";
import { updateUser } from "../../redux/reducer/reducer";
import { updateAccess } from "../../redux/reducer/access_token";
import logo from "../../assets/google.png"

import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const urlLoginGoogle = "https://rubahmerah.site/auth/google";
  const useGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const configPutNPost = {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
          "content-type": "multipart/form-data",
        },
      };
      const form = new FormData();
      form.append("access_token", tokenResponse?.access_token);
      form.append("authuser", tokenResponse?.authuser);
      form.append("expires_in", tokenResponse?.expires_in);
      form.append("prompt", tokenResponse?.prompt);
      form.append("scope", tokenResponse?.scope);
      form.append("token_type", tokenResponse?.token_type);

      await axios
        .post(urlLoginGoogle, form, configPutNPost)
        .then((res) => {
          dispatch(updateUser(res.data.data));
          dispatch(updateAccess(tokenResponse));
          navigate("/");
        })
        .catch((err) => console.log(err));
    },
  });

  //=== SET PASSWORD ===//
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //=== URL API ===//
  const UrlLogin = "https://rubahmerah.site/auth";

  const login = async (e) => {
    e.preventDefault();
    await axios
      .post(UrlLogin, {
        email: email,
        password: password,
      })
      .then((res) => {
        const { data } = res.data;
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Signed successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(updateUser(data));
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          text: `'${err.response.data.message}'`,
          showConfirmButton: true,
        });
      });
  };

  return (
    <Flex>
      <HeroLogin />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w="35vw"
      >
        <Box className="form-side" width={"30vw"}>
          <Center>
            <FormControl p={10} mb={20}>
              <Text fontSize={"3xl"} color={"brand.300"}>
                Log in
              </Text>
              <FormLabel color={"brand.300"}>Email</FormLabel>
              <Input
                id="email"
                type="email"
                border={"2px"}
                mb={2}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel color={"brand.300"}>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  id="password"
                  border={"2px"}
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
              <Button
                type="submit"
                bg="brand.300"
                color={"primary.100"}
                w={"full"}
                mt={14}
                _hover={{ bg: "#0000e5" }}
                onClick={login}
              >
                Sign in
              </Button>
              <Button
                bg="brand.100"
                color={"primary.200"}
                w={"full"}
                mt={4}
                onClick={() => {
                  useGoogle();
                }}
              >
                <Image src={logo} w={"8"} mx={1} />
                Sign in with Google
              </Button>

              <Text color={"#4545458d"} pt={2} fontWeight={"semi-bold"}>
                Dont you have an Account?
                <Link to="/register" color="brand.300">
                  <Text as={"span"} textColor={"brand.300"} px={1}>
                    {" "}
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </FormControl>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
