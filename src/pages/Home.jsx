import React from "react";

import CardEvent from "../components/Home/CardEvent";
import {
  Box,
  Stack,
  Text,
  Flex,
  Image,
  Button,
  Select,
  FormControl,
  FormLabel,
  Spinner,
  Card,
  CardBody,
  Input,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { ButtonCreate } from "../components/Button";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import UploadFiles from "../components/UploadFiles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === " ";
  const currentUser = useSelector((state) => state.users.currentUser);
  const token = currentUser.token;
  const navigate = useNavigate();

  const [getEvents, setGetEvents] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState();
  const [prev, setPrev] = useState();
  const [maximum_people, setMaximumPeople] = useState("");
  const [skeleton] = useState([1])
  const [page, setPage] = useState(1)
  const [getClubNew, setGetClubNew] = useState([])
  const [loadingClub, setLoadingClub] = useState(false)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const getClub = async() => {
    await axios.get(`https://rubahmerah.site/clubs`, config)
    .then((response) => {
      setLoadingClub(true)
      setGetClubNew(response.data.data)
      console.log(response.data.data)
      setLoadingClub(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const getClubSlice = getClubNew.slice(0,3)

  const getEvent = async () => {
    await axios
      .get(`https://rubahmerah.site/events?page=${page}`, config)
      .then((response) => {
        const result = response.data.data
        const newPage = page + 1
        const temp = [...getEvents]
        temp.push(...result)
        setGetEvents(temp);
        setPage(newPage)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const addEvent = async () => {
    const formerData = new FormData();
    formerData.append("name", name);
    formerData.append("address", address);
    formerData.append("city", city);
    formerData.append("category_id", category_id);
    formerData.append("start_date", start_date);
    formerData.append("end_date", end_date);
    formerData.append("maximum_people", maximum_people);
    formerData.append("description", description);
    formerData.append("image_event", files);
    console.log([...formerData])
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post(`https://rubahmerah.site/events`, formerData, config)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `Create Event successfully `,
          showConfirmButton: false,
          timer: 500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          text: `failed`,
          showConfirmButton: true,
          timer: 500,
        });
      });
  };

  useEffect(() => {
    getEvent();
    getClub()
  }, []);

  return (
    <Layout>
      <div>
        <Box p="8" px={"10%"} w={"100vw"} h={"100%"}>
          <Flex>
            <div>
              <Text as="b" fontSize={"2xl"}>
                Home
              </Text>
              <Card
                w={"100%"}
                h={"170px"}
                mt={"15px"}
                shadow="xl"
                rounded="xl"
                backgroundColor={"white"}
              >
                <CardBody w={"100%"}>
                  <Flex h={"70%"}>
                    <Box my="auto">
                      <FiUser size={60} />
                    </Box>
                    <Text
                      px={"5"}
                      onClick={onOpen}
                      my="auto"
                      fontSize={"2xl"}
                      ml={"50px"}
                      w={"80%"}
                      p={3}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "gray.100",
                      }}
                      rounded="full"
                      color="gray.500"
                    >
                      Start Posting Now
                    </Text>
                  </Flex>
                  <Button
                    justify="end"
                    onClick={onOpen}
                    justifyContent="end"
                    px="10"
                    backgroundColor={"brand.300"}
                    _hover={{ bg: "brand.200" }}
                    color={"white"}
                    ml={"82%"}
                  >
                    Post
                  </Button>
                </CardBody>
              </Card>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add New Event</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl isInvalid={isError}>
                      <FormLabel my="3">Event Title</FormLabel>
                      <Input
                        color="gray"
                        placeholder="Your event name"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <FormLabel my="3">Event Address</FormLabel>
                      <Input
                        color="gray"
                        placeholder="Your event address"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <FormLabel my="3">Event City</FormLabel>
                      <Input
                        color="gray"
                        placeholder="Where your event take place"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <FormLabel my="3">Event Description</FormLabel>
                      <Input
                        color="gray"
                        placeholder="Give your event a description"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <FormLabel my="3">Event Banner</FormLabel>
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
                      <FormLabel my="3">Event Category</FormLabel>
                      <Select
                        placeholder="Your event category"
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        <option value="1">SepakBola</option>
                        <option value="2">Basket</option>
                        <option value="3">Futsal</option>
                        <option value="4">Bola Voli</option>
                        <option value="5">Badminton</option>
                        <option value="6">Bersepeda</option>
                        <option value="7">Tenis Lapangan</option>
                        <option value="8">Tenis Meja</option>
                        <option value="9">Renang</option>
                        <option value="10">Beladiri</option>
                      </Select>

                      <FormLabel my="3">Starting Date</FormLabel>
                      <Input
                        color="gray"
                        pattern="[0-9]{4}-[1-12]{2}-[0-9]{2}"
                        placeholder="When your event start"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      <FormLabel my="3">Ending Date Date</FormLabel>
                      <Input
                        color="gray"
                        pattern="[0-9]{4}-[1-9]{2}-[0-9]{2}"
                        placeholder="When your event End"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                      <FormLabel my="3">Maximum People</FormLabel>
                      <Input
                        color="gray"
                        placeholder="Maximum People your event can hold"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        onChange={(e) => setMaximumPeople(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <ButtonCreate onClick={addEvent} />
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Box mt={"30px"}>
                <Flex>
                  <Select
                    placeholder="City"
                    variant="filled"
                    shadow="2xl"
                    w={220}
                    backgroundColor={"white"}
                    mr={"20px"}
                  >
                    <option value="option1">Jakarta</option>
                    <option value="option2">Bogor</option>
                    <option value="option3">Depok</option>
                    <option value="option3">Tanggerang</option>
                    <option value="option3">Bekasi</option>
                    <option value="option3">Bandung</option>
                    <option value="option3">Yogyakarta</option>
                  </Select>
                  <Select
                    placeholder="Category"
                    variant="filled"
                    shadow="2xl"
                    w={220}
                    backgroundColor={"white"}
                    mr={"20px"}
                  >
                    <option value="option1">Jakarta</option>
                    <option value="option2">Bogor</option>
                    <option value="option3">Depok</option>
                    <option value="option3">Tanggerang</option>
                    <option value="option3">Bekasi</option>
                    <option value="option3">Bandung</option>
                    <option value="option3">Yogyakarta</option>
                  </Select>
                  <Select
                    placeholder="Status"
                    variant="filled"
                    shadow="2xl"
                    w={220}
                    backgroundColor={"white"}
                    mr={"20px"}
                  >
                    <option value="option1">Jakarta</option>
                    <option value="option2">Bogor</option>
                    <option value="option3">Depok</option>
                    <option value="option3">Tanggerang</option>
                    <option value="option3">Bekasi</option>
                    <option value="option3">Bandung</option>
                    <option value="option3">Yogyakarta</option>
                  </Select>
                </Flex>

                {
                  loading 
                  ? skeleton.map((item) => <Spinner/>)
                  : getEvents.map((data) => (
                      <CardEvent
                      key = {data.id}
                      address = {data.address}
                      category = {data.category_name}
                      city = {data.city}
                      selesai = {data.end_date}
                      gambar = {data.image_event}
                      total = {data.maximum_people}
                      name = {data.name}
                      mulai = {data.start_date}
                      status= {data.status}
                      user = {data.total_participant}
                      diKlik = {() => {
                        navigate('/detailevent', {
                          state : {
                            id : data.id
                          }
                        })
                      }}
                      />
                  ))   
                }
                <Button 
                onClick={getEvent}  
                backgroundColor={"brand.300"}
                _hover={{ bg: "brand.200" }}
                color={"white"}
                mt={10}
                >Load More Events</Button>
              </Box>
            </div>
            <div className="full-width">
              <Box mt={"6%"} ml={"16%"} w={"100%"} position="sticky" top={"0"}>
                <Button
                  backgroundColor={"brand.300"}
                  shadow={"xl"}
                  w={"70%"}
                  mb={"8%"}
                  px={"5%"}
                  py={"2%"}
                  _hover={{ bg: "brand.200" }}
                  onClick={() => navigate("/clublist")}
                  color="white"
                  rounded="xl"
                >
                  Find your own club now{" "}
                </Button>
                {getClubSlice && loadingClub === false ?
                  getClubSlice.map((item) => (
                    <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="filled"
                    w={"80%"}
                    backgroundColor={"white"}
                    mb={"5%"}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "30%",}}
                      maxH={{ base: "100%", sm: "30%",}}
                      src={item.logo}
                      alt="Caffe Latte"
                    />
                    <Stack>
                      <CardBody w={'100%'} pb={"0"}>
                        <Heading size="md">{item.name}</Heading>
  
                        <Text py="1">Member: {item.joined_member} / {item.member_total}</Text>
                        <Text pb="1">{item.category_name}</Text>
                        <Text pb="1">{item.city}</Text>
                      </CardBody>
                    </Stack>
                  </Card>
                  ))
                  : <p>HEHEHEH</p>
                }
                
              </Box>
            </div>
          </Flex>
        </Box>
      </div>
    </Layout>
  );
};

export default Home;
