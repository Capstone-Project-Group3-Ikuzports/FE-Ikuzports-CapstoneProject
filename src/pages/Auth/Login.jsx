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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroLogin from "../../components/HeroLogin";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <Flex>
      <HeroLogin />
      <Center>
        <Box className="form-side" width={"35vw"}>
          <FormControl p={"20"} mb={20}>
            <Text fontSize={"4xl"} color={"brand.300"}>
              Log in
            </Text>
            <FormLabel color={"brand.300"}>Email</FormLabel>
            <Input id="email" type="email" border={"2px"} mb={2} />
            <FormLabel color={"brand.300"}>Password</FormLabel>
            <Input id="password" type="password" border={"2px"} />
            <Button
              bg="brand.300"
              color={"primary.100"}
              w={"full"}
              mt={14}
              _hover={{ bg: "#0000e5" }}
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
        </Box>
      </Center>
    </Flex>
  );
};

export default Login;
