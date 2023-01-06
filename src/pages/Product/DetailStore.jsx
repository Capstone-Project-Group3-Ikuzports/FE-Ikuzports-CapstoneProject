import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import axios from "axios";
import bca from "../../assets/bca.png";
import bni from "../../assets/bni.png";
import bri from "../../assets/bri.png";
import mandiri from "../../assets/mandiri.png";
import Sample1 from "../../assets/sampleJersey1.jpeg";
import Sample2 from "../../assets/sampleJersey2.jpg";
import Sample3 from "../../assets/sampleJersey3.jpeg";
import {Buttons} from '../../components/Baru/ButtonBack';
import {ButtonsCancel} from '../../components/Baru/ButtonBack';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ButtonBack,
  ButtonBuy
} from "../../components/Baru/ButtonBack";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";


const DetailStore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [productId,setProductId] = useState({})
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token

  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
  const location = useLocation()
  const idStore = location?.state?.id
  const date = new Date();
  const tanggal = date.getDate();
  const bulan = date.getMonth();
  const tahun = date.getFullYear();
  const detik = date.getSeconds();
  const menit = date.getMinutes();
  const jam = date.getHours();
  const postWaktu = `${tahun}-${bulan}-${tanggal} ${jam}-${menit}-${detik}`
  const parsingan = Number(productId.price)
  const parsinganId = Number(idStore)

  const getProductId = ()=>{
    axios
    .get(`https://rubahmerah.site/products/${idStore}`,config)
    .then((res)=>{
      setProductId(res.data.data)
    })
    .catch((err)=>console.log(err))
    
  }

  const postDetail = () =>{
    axios
    .post('https://rubahmerah.site/transactions/',{total_price:parsingan,product_id:parsinganId,product_quantity:1,transaction_time:`${postWaktu}`},config )
    console.log("coba coba ",postWaktu)
    .then((res) => {
    
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "error",
        text: `${err.response.data.message}`,
        timer: 10000000,
        showConfirmButton: true,
      });
    });
  }

useEffect(
  ()=>getProductId(),[]
  )
    
  
  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        {/* heigh just sample */}
        <Flex>
          <Box w={"40vw"}>
            <Center>
              <Image src={productId.product_image?.[0]?.url} objectFit={"cover"} w={"30vw"} h={"40vh"} />
            </Center>
            <Flex pt={2} justifyContent={"space-evenly"}>
            <Image src={Sample1} w={"10vw"} h={"15vh"} />
              <Image src={Sample2} w={"10vw"} h={"15vh"} />
              <Image src={Sample3} w={"10vw"} h={"15vh"} />
            </Flex>
            <Text fontWeight={"semibold"}>Descrption</Text>
            <Text
              lineHeight={"4"}
            >{`${productId.description}`}</Text>
          </Box>
          <Box w={"50vw"}>
            <Text
              as={"h6"}
              fontSize={"6xl"}
              fontWeight={"semibold"}
            >{`${productId.name}`}</Text>
            <Text as={"h3"} fontSize={"4xl"} fontWeight={"hairline"}>
              {`Rp ${productId.price}`}
            </Text>
            <Text as={"h2"} fontSize={"2xl"} fontWeight={"normal"} pb={"28"}>
              {`Seller : ${productId.user_name}`}
            </Text>
           
           <Buttons openTrigger={()=>{postDetail()}}/>
            <Buttons openTrigger={onOpen} />
          </Box>
          <Box  ml='auto' mb={10} >
           <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay/>
              <ModalContent backgroundColor={'brand.100'}>
                <ModalHeader textAlign={'center'}>Pilih Metode Pembayaran</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex>
                  <Image src={bca} w={"5vw"} h={"8vh"} mb="10px"/>
                  <Text>BCA</Text>
                  </Flex>
                  <Flex>             
                  <Image src={bni} w={"5vw"} h={"7.5vh"} mb="10px" mr='25px'/>
                  <Text fontSize={'2xl'} textColor='gray'>Upcoming</Text>
                  </Flex>
                  <Flex>
                  <Image src={bri} w={"5vw"} h={"7.5vh"} mb="10px" mr='25px'/>
                  <Text fontSize={'2xl'} textColor='gray'>Upcoming</Text>
                  </Flex>
                  <Flex>
                  <Image src={mandiri} w={"5vw"} h={"7.5vh"} mb="10px" mr={'25px'}/>
                  <Text fontSize={'2xl'} textColor='gray'>Upcoming</Text>
                  </Flex>
                  </ModalBody>
              </ModalContent>
            </Modal>
        </Box>
        </Flex>
      </Box>
      </Layout>
  );
};

export default DetailStore;
