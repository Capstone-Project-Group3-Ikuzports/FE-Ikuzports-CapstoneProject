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
  InputGroup,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
import HeroLogin from "../../components/Baru/HeroLogin";
import { updateUser } from "../../redux/reducer/reducer";

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [credential, setCredential] = useState();
  // const [dataGoogle, setDataGoogle] = useState();
  // console.log(GoogleJwt);
  // console.log(dataGoogle);
  // let decoded = jwt_decode(tokenResponse.credential);
  // setDataGoogle(decoded);

  // === TEST OAUTH1 === //
  const [dataGoogle, setDataGoogle] = useState();
  const loginOAuth1 = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log("CARA 1", tokenResponse);
      setDataGoogle(tokenResponse);
      // console.log(dataGoogle);
      console.log("data", dataGoogle);
      await loginGoogle();
    },
  });

  const urlLoginGoogle = "https://rubahmerah.site/auth/google";

  const loginGoogle = async () => {
    const form = new FormData();
    form.append("acces_token", dataGoogle.access_token);
    form.append("authuser", dataGoogle.authuser);
    form.append("expires_in", dataGoogle.expires_in);
    form.append("prompt", dataGoogle.prompt);
    form.append("scope", dataGoogle.scope);
    form.append("token_type", dataGoogle.token_type);
    console.log("login", [...form]);
    await axios
      .post(urlLoginGoogle, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // === TEST OAUTH2 === //
  const loginOAuth2 = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log("CARA 2", data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  // === TEST OAUTH3 === //
  const loginOAuth3 = useGoogleLogin({
    onSuccess: (codeResponse) => console.log("CARA 3", codeResponse),
    flow: "auth-code",
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
        console.log(data); // dell after prod
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
        console.log(err.response.data.message); // dell after prod
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
                  // loginGoogle();
                  loginOAuth1();
                  // loginOAuth2();
                  // loginOAuth3();
                }}
              >
                <Image src="../src/assets/google.png" w={"8"} mx={1} />
                Sign in with Google
              </Button>

              {/* LOGIN DEFAULT BY GOOGLE */}
              <Center pt={2}>
                <GoogleLogin
                  size="large"
                  // shape="rectangular"
                  onSuccess={(credentialResponse) => {
                    console.log("CARA 4", credentialResponse);
                    // setCredential(credentialResponse);
                    let decoded = jwt_decode(credentialResponse.credential);
                    console.log("DECODE CREDENTIAL CARA 4", decoded);
                    // setDataGoogle(decoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </Center>

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
