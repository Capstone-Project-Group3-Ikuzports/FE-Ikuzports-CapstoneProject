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
  Skeleton,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ButtonBack, ButtonCancel, ButtonSave } from "../components/Button";
import Layout from "../components/Layout";
import UploadFiles from "../components/UploadFiles";
import { clearUser } from "../redux/reducer/reducer";

const Profile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState("");
  const [file, setFiles] = useState(null);
  const [prev, setPrev] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.users.currentUser); // STATE GLOBAL
  const urlUser = `https://rubahmerah.site/users/${user.id}`; // URL GET, PUT, & DELETE

  const configGetNDelete = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const configPutNPost = {
    headers: {
      Authorization: `Bearer ${user.token}`,
      "content-type": "multipart/form-data",
    },
  };

  //=== API GET DATA USER ===//
  const getUser = async () => {
    await axios
      .get(urlUser, configGetNDelete)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  //=== API PUT DATA USER ===//
  const editUser = async () => {
    const form = new FormData();
    form.append("name", !name ? data.name : name);
    form.append("email", !email ? data.email : email);
    form.append("phone_number", !phone ? data.phone_number : phone);
    form.append("gender", !gender ? data.gender : gender);
    form.append("address", !address ? data.address : address);
    form.append("user_image", !file ? data.user_image : file);
    console.log("data :", data);
    console.log([...form]);

    setIsLoading(true);
    await axios.put(urlUser, form, configPutNPost).then((res) => {
      console.log(res);
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        text: `${res.data.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
    getUser();
  };

  const delUser = async () => {
    await axios.delete(urlUser, configGetNDelete).then((res) => {
      console.log(res);
    });
  };

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
          timer: 3000,
        });
        delUser();
        dispatch(clearUser());
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    getUser();
    if (!user.token) navigate("/");
  }, [user.token]);
  return (
    <Layout image={data.user_image} name={data.name}>
      {isLoading ? (
        <Box
          // bgColor={"#FFFFFF"}
          position={"fixed"}
          w={"full"}
          h={"full"}
          zIndex={10}
          top={0}
          bottom={0}
          bgColor="blackAlpha.200"
          cursor={"no-drop"}
        />
      ) : (
        ""
      )}
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <ButtonBack />
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"5xl"} textAlign={"start"} as="u">
              Profile
            </Text>

            <Box display={"flex"} flexDirection={"column"} pt={5}>
              {isLoading ? (
                <Skeleton rounded={"full"} w={"56"} h={"56"} />
              ) : (
                <Image
                  src={data.user_image}
                  rounded={"full"}
                  w={"56"}
                  h={"56"}
                  objectFit={"cover"}
                />
              )}

              <Text as={"h2"} fontSize={"lg"} fontWeight={"bold"} pt={2}>
                {data.name}
              </Text>
            </Box>
          </Box>
          <Box w={"40vw"}>
            <Center>
              <FormControl px={5}>
                <FormLabel color={"brand.300"}>Full Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  border={"2px"}
                  defaultValue={data.name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  bgColor={"#FFFFFF"}
                />
                <FormLabel color={"brand.300"}>Email</FormLabel>
                <Input
                  id="email"
                  type="text"
                  border={"2px"}
                  mb={4}
                  defaultValue={data.email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  bgColor={"#FFFFFF"}
                />
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
                  <Input
                    id="number"
                    type="number"
                    border={"2px"}
                    w={"50%"}
                    bgColor={"#FFFFFF"}
                    defaultValue={data.phone_number}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  />
                  <RadioGroup
                    pl={3}
                    colorScheme={"purple"}
                    color={"brand.300"}
                    defaultValue={`${data.gender}` ? "Male" : "Female"}
                  >
                    <Stack direction="row">
                      <Radio value="Male" onChange={() => setGender("Male")}>
                        Male
                      </Radio>
                      <Radio
                        value="Female"
                        onChange={() => setGender("Female")}
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
                  bgColor={"#FFFFFF"}
                  defaultValue={data.address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                />
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
            <ButtonSave onClick={editUser} isLoading={isLoading} />
          </ButtonGroup>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Profile;
