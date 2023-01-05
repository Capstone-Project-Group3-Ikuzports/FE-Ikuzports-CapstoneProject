import React from "react";
import Swal from "sweetalert2";
import { Box, Flex, Text, Image, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import {Buttons} from "../../components/Baru/ButtonBack";
import {ButtonsCancel} from "../../components/Baru/ButtonBack";
import Modals from "../../components/Baru/Modal";
import { ButtonBack } from "../../components/Baru/ButtonBack";
import { useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RuleCard from "../../components/RuleCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import axios from "axios";


const DetailClub = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const location = useLocation()
  const id = location?.state?.id

  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token
  const idUser = currentUser.id
  console.log(idUser)

  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }

  const [getClubDetail, setGetClubDetail] = useState([])
  const [loading, setLoading] = useState(false)

  const getDetailClub = async () => {
    await axios.get(`https://rubahmerah.site/clubs/${id}`, config)
    .then((response) => {
      setLoading(true)
      setGetClubDetail(response.data.data)
      setLoading(false)
      console.log(response.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const [status, setStatus] = useState('')
  const onSubmitHandler = async() => {
    const form = new FormData()
    form.append("user_id", idUser )
    form.append("club_id", id)
    form.append("status", "requested")

    await axios.post(`https://rubahmerah.site/members`,form ,config)
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

  useEffect(() => {
    getDetailClub()
  }, [])


  return (
  <Layout>
         <Box p='8' px={'10%'} w={'100vw'}>
            <ButtonBack/>
            <Flex mb={20}>
            <Box w={'70%'}>
              <Flex>
                <Image
              src={getClubDetail.logo}
              objectFit='cover'
              maxW={{ base: '100%', sm: '500px' }}
              mt={10}
              rounded='xl'
              />
              <Box mt={10} ml={20}>
              <Text fontSize={'7xl'}>{getClubDetail.name}</Text>
              <Text fontSize={'3xl'} mt={5} ml={2}>Member : {getClubDetail.joined_member} / {getClubDetail.member_total}</Text>
              <Text fontSize={'3xl'} mt={5} ml={2}>Category : {getClubDetail.category_name}</Text>
              <Text fontSize={'3xl'} mt={5} ml={2}>{getClubDetail.city}, {getClubDetail.address}</Text>
              </Box>
              </Flex>
              <Text fontSize={'3xl'} mt={'20'}>Club Description :</Text>
              <Text fontSize={'xl'} mt={'2'} w={'60%'}>{getClubDetail.description}</Text>
            </Box>
            <RuleCard
            key = {getClubDetail.id}
            rule = {getClubDetail.rule}
            />
          </Flex>
      
      <Box ml='auto' justif='end' w={'131px'}>
        <Buttons  openTrigger={onOpen} textContent="Join"/>
        <Modals isOpen={isOpen} onClose={onClose} h={'100px'}>
        <ModalHeader mx='auto'>Requirement</ModalHeader>
            <ModalCloseButton />
            <ModalBody h={'100px'} bg="white" w={"90%"} rounded="lg" mx='auto' overflowY='scroll'>
              <Text h={'300px'}>{getClubDetail.requirement}</Text>
            </ModalBody>

            <ModalFooter>
              <ButtonsCancel textContent="Cancel" mr="10" openTrigger={onClose}/>
              <Buttons textContent="Accept" openTrigger={onSubmitHandler}/>
            </ModalFooter>
        </Modals>
      </Box>
    </Box>
    </Layout>

  )
};

export default DetailClub;
