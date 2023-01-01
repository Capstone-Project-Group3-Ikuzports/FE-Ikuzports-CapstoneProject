import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonBack, ButtonClear, ButtonSave } from "../../components/Button";
import Layout from "../../components/Layout";
import UploadFiles from "../../components/UploadFiles";
import Swal from "sweetalert2";

const EditClub = () => {
  const user = useSelector((state) => state.users.currentUser); // STATE GLOBAL

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [files, setFiles] = useState();
  const [memberTotal, setMemberTotal] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [rule, setRule] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [require, setRequire] = useState("");
  const [prev, setPrev] = useState();

  const navigate = useNavigate();

  const urlIdClub = `https://rubahmerah.site/clubs/6`; // URL GET, PUT, & DELETE
  const configPutNPost = {
    headers: {
      Authorization: `Bearer ${user.token}`,
      "content-type": "multipart/form-data",
    },
  };
  const configGetNDelete = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const getClubID = async () => {
    await axios
      .get(urlIdClub, configGetNDelete)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClubID();
  }, []);

  const editClub = async () => {
    const form = new FormData();
    form.append("name", !name ? data.name : name);
    form.append("address", !address ? data.address : address);
    form.append("city", !city ? data.city : city);
    form.append("category_id", !category ? data.category_id : category);
    form.append("description", !desc ? data.description : desc);
    form.append("rule", !rule ? data.rule : rule);
    form.append("member_total", !memberTotal ? data.member_total : memberTotal);
    form.append("requirement", !require ? data.requirement : require);
    form.append("logo", !files ? data.logo : files);

    console.log([...form]);
    await axios
      .put(urlIdClub, form, configPutNPost)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `Club has edited `,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/clubJoin");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          text: `failed to edit`,
          showConfirmButton: true,
          timer: 2000,
        });
      });
  };

  const clear = () => {
    navigate(0);
  };

  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <ButtonBack />
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"5xl"} textAlign={"start"} as="u">
              Edit Club
            </Text>
            <Box display={"flex"} flexDirection={"column"} pt={5}>
              <Box>
                <Image
                  src={data.logo}
                  rounded={"full"}
                  w={"56"}
                  h={"56"}
                  objectFit={"cover"}
                />
                <Text as={"h2"} fontSize={"lg"} fontWeight={"bold"} pt={2}>
                  {data.name}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box w={"40vw"}>
            <Center>
              <FormControl px={5}>
                <FormLabel color={"brand.300"}>Club Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  border={"2px"}
                  bgColor="#ffffff"
                  onChange={(e) => setName(e.currentTarget.value)}
                  defaultValue={data.name}
                />
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
                  <FormLabel color={"brand.300"} pl={5} w={"50%"}>
                    City
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
                    defaultValue={data.member_total}
                  />
                  <Select
                    w={"50%"}
                    color={"brand.300"}
                    bgColor={"#FFFFFF"}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    defaultValue={data.city}
                    key={data.city}
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Depok">Depok</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Malang">Malang</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Jogjakarya">Jogjakarya</option>
                    <option value="Semarang">Semarang</option>
                  </Select>
                  <Select
                    w={"50%"}
                    color={"brand.300"}
                    bgColor={"#FFFFFF"}
                    onChange={(e) => setCategory(e.currentTarget.value)}
                    defaultValue={data.category_id}
                    key={data.category_id}
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
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  defaultValue={data.address}
                />
                <FormLabel color={"brand.300"}>Description</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                  onChange={(e) => setDesc(e.currentTarget.value)}
                  defaultValue={data.description}
                />
                <FormLabel color={"brand.300"}>Rules</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                  onChange={(e) => setRule(e.currentTarget.value)}
                  defaultValue={data.rule}
                />
                <FormLabel color={"brand.300"}>Requirement</FormLabel>
                <Textarea
                  id="textarea"
                  type="textarea"
                  border={"2px"}
                  bgColor="#ffffff"
                  onChange={(e) => setRequire(e.currentTarget.value)}
                  defaultValue={data.requirement}
                />
              </FormControl>
            </Center>
          </Box>
        </Flex>
        <Flex w={"65vw"} alignItems={"center"} pt={2}>
          <Spacer />
          <ButtonGroup spacing={4} px={5}>
            <ButtonClear onClick={clear} />
            <ButtonSave onClick={editClub} />
          </ButtonGroup>
        </Flex>
      </Box>
    </Layout>
  );
};

export default EditClub;
