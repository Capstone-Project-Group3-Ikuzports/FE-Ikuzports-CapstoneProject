import React from "react";
import { Text, Flex, Box, Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import {Buttons} from "../components/Baru/ButtonBack";
import { Image } from "@chakra-ui/image";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { SiGooglemaps } from "react-icons/si";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import Layout from "../components/Layout";
import { ButtonBack } from "../components/Baru/ButtonBack";

const DetailEvent = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const token = currentUser.token;

  const location = useLocation();
  const detail = location?.state?.id;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [getDetails, setGetDetails] = useState([]);
  const getDetailEvent = async () => {
    await axios
      .get(`https://rubahmerah.site/events/${detail}`, config)
      .then((response) => {
        setGetDetails(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        err;
      });
  };

  useEffect(() => {
    getDetailEvent();
  }, []);

  const [event_id, setEventId] = useState('')
  const onSubmitHandler = async() => {
    const form = new FormData()
    form.append("event_id", detail)
    console.log([... form])

    await axios.post(`https://rubahmerah.site/participants`, form, config)
    .then((response) => {
      Swal.fire({
        position: "center",
        icon: "success",
        text: `Join Event successfully `,
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/detailevent");
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        position: "center",
        icon: "error",
        text: `failed`,
        showConfirmButton: true,
        timer: 1000,
      });
    })
  }

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} h={"100%"}>
        <ButtonBack />
        <Image
          src={getDetails.image_event}
          objectFit={"cover"}
          h={"700px"}
          w={"100%"}
          backgroundRepeat="no-repeat"
          my={"20px"}
        />
        <Text fontSize={"6xl"}>{getDetails.name}</Text>
        <Flex>
          <CgProfile size={50} />
          <Text ml={"30px"} fontSize={"3xl"}>
            {getDetails.organizer_name}
          </Text>
        </Flex>
        <Text mt={"30px"} fontSize={"xl"} w={"1300px"}>
          {getDetails.description}
        </Text>
        <Flex mt={"30px"}>
          <SlCalender size={50} />
          <Text ml={"30px"} fontSize={"3xl"}>
            {getDetails.start_date} - {getDetails.end_date}
          </Text>
        </Flex>
        <Flex mt={"30px"}>
          <SiGooglemaps size={50} />
          <Text ml={"30px"} fontSize={"3xl"}>
            {getDetails.city}
          </Text>
        </Flex>
        <Flex mt={"30px"}>
          <CgProfile size={50} />
          <Text ml={"30px"} fontSize={"3xl"}>
            {getDetails.total_participant} / {getDetails.maximum_people}
          </Text>
        </Flex>
        <Stack w={"200px"} ml="auto">
          <Buttons
            openTrigger={onSubmitHandler}
            changeTrigger={(e) => setEventId(e.target.value)}
            textContent="Join Event"/>
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mx="auto">
              <FcApproval size={150} />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody mx="auto">Join Succes</ModalBody>

            <ModalFooter mx="auto">
              <Buttons bg={"brand.300"} _hover={{bg: "brand.200"}} color='white' px={10} onClick={onClose}>
                Ok
              </Buttons>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Layout>
  );
};

export default DetailEvent;
