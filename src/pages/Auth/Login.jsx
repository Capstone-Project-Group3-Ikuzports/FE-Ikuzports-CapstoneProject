import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import HeroLogin from "../../components/HeroLogin";
import { updateUser } from "../../redux/reducer/reducer";

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  // const [cookies, setCookies] = useCookies(["userToken"]); // useCookies
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        // console.log(data); // dell after prod
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
        console.log(err); // dell after prod
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email or Password incorrect",
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
              <Input
                id="password"
                type="password"
                border={"2px"}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <Button bg="brand.100" color={"primary.200"} w={"full"} mt={4}>
                <Image src="../src/assets/google.png" w={"8"} mx={1} />
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
