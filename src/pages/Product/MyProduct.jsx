import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
  Stack,
  Heading,
  Spacer,
  InputGroup,
  InputLeftAddon,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Modals from "../../components/Baru/Modal";
import { Buttons } from "../../components/Baru/ButtonBack";
import { BsFillTrashFill } from "react-icons/bs";
import { ButtonsCancel } from "../../components/Baru/ButtonBack";
import { ButtonBack } from "../../components/Baru/ButtonBack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Layout from "../../components/Baru/Layout";
import CardProduct from "../../components/Baru/CardProduct";
import { useCallback } from "react";
import UploadFiles from "../../components/Baru/UploadFiles";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useSelector((state) => state.users.currentUser);
  const token = currentUser.token;
  const idUser = currentUser.id;
  const navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [myProduct, setMyProduct] = useState([]);
  const [product_name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [files, setFiles] = useState();
  const [prev, setPrev] = useState();
  const [category_item, setCategory] = useState();
  const [city, setCity] = useState("");

  const getMyProduct = () => {
    axios
      .get(`https://rubahmerah.site/users/${idUser}/products`, config)
      .then((res) => {
        setMyProduct(res.data.data);
        console.log(res.data.data);
      });
  };

  const del = (item) => {
    console.log(item);
    axios
      .delete(`https://rubahmerah.site/products/${item}`, config)
      .then(()=>{getMyProduct()})
      .catch((err) => console.log(err));
  
  };

  useEffect(() => {
    getMyProduct();
  }, []);

  const modalPost = async () => {
    const form = new FormData();
    form.append("name", product_name);
    form.append("price", price);
    form.append("description", desc);
    form.append("thumbnail", files);
    form.append("itemcategory_id", category_item);
    form.append("city", city);
    console.log([...form]);

    const configPutNPost = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post("https://rubahmerah.site/products/", form, configPutNPost)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `The Product Had Been Post `,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/myproduct");
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
      getMyProduct();
  };

  const DellProduct = useCallback((item) => {
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
        del(item);
      }
    });
  }, []);

  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} h={"100%"} overflowX="hidden">
        <ButtonBack />
        <Flex>
          <Text fontSize={"5xl"}>My Product</Text>
          <Box verticalAlign={"center"} mt={4} ml="auto">
            <Buttons openTrigger={onOpen} textContent="Add A Product" />
          </Box>
        </Flex>
        <Divider w="17%" orientation="horizontal" />
        <Flex>
          <Box ml="auto" mb={10}>
            <Modals isOpen={isOpen} onClose={onClose}>
              <ModalHeader>Add A Product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormLabel>Product Name</FormLabel>
                <Input
                  bg="white"
                  placeholder="Product Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel mt={5}>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  bg="white"
                  onChange={(e) => setDesc(e.target.value)}
                ></Textarea>
                <FormLabel mt={5}>Price</FormLabel>
                <InputGroup bg="white">
                  <InputLeftAddon bg="white" children="Rp" />
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputGroup>
                <FormLabel mt={5}>Upload Image</FormLabel>
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
                <Select
                  onChange={(e) => setCategory(e.target.value)}
                  mt={"5"}
                  w={"400px"}
                  bg="white"
                  mr="30px"
                  variant="filled"
                  boxShadow={"xl"}
                  placeholder="Category Item"
                >
                  <option value="1">Sepatu</option>
                  <option value="2">Jersey</option>
                  <option value="3">Bola</option>
                  <option value="4">Raket</option>
                  <option value="5">Celana</option>
                  <option value="6">Equipment</option>
                  <option value="7">Aksesoris</option>
                </Select>

                <Select
                  onChange={(e) => setCity(e.target.value)}
                  mt={"5"}
                  placeholder="City"
                  w={"400px"}
                  bg="white"
                  mr="30px"
                  variant="filled"
                  boxShadow={"xl"}
                >
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Depok">Depok</option>
                  <option value="Tanggerang">Tanggerang</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Malang">Malang</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Jogjakarta">Jogjakarta</option>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Buttons textContent="Yes" mr={"30"} openTrigger={()=>{modalpost(), onClose()}} />
                <ButtonsCancel textContent="Cancel" openTrigger={onClose} />
              </ModalFooter>
            </Modals>
          </Box>
        </Flex>
        <SimpleGrid columns={{ sm: 2, md: 4 }} gap={8}>
          {myProduct?.map((item) => (
            <CardProduct
              key={item.id}
              image={
                item.thumbnail != ""
                  ? item.thumbnail
                  : "https://www.hostpapa.com/knowledgebase/wp-content/uploads/2018/04/1-13.png"
              }
            >
              <Stack mt="3" spacing="3">
                <Flex>
                  <Heading size="md">{item.name}</Heading>
                  <Spacer></Spacer>
                  <BsFillTrashFill
                    onClick={() => DellProduct(item.id)}
                    size={25}
                    color={"red"}
                  />
                </Flex>
                <Text>{item.description}</Text>
                <Text color="blue.600" as="b" fontSize="2xl">
                  {item.price}
                </Text>
              </Stack>
            </CardProduct>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default MyProduct;
