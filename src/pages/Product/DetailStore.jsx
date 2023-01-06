import {
  Box,
  Center,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Sample1 from "../../assets/sampleJersey1.jpeg";
import Sample2 from "../../assets/sampleJersey2.jpg";
import Sample3 from "../../assets/sampleJersey3.jpeg";
import {
  ButtonBack,
  ButtonBuy
} from "../../components/Baru/ButtonBack";
import Layout from "../../components/Baru/Layout";


const DetailStore = ({id}) => {
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token

  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
  const location = useLocation()
  const idStore = location?.state?.id

  const [productId,setProductId] = useState([])
  
  const getProductId =()=>{
    axios
    .get(`https://rubahmerah.site/products/${idStore}`,config)
    .then(res=>{
      setProductId(res.data.data)
      
    })
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
              <Image src={Sample1} objectFit={"cover"} w={"30vw"} h={"40vh"} />
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
            <ButtonBuy />
          </Box>
        </Flex>
      </Box>
      </Layout>
  );
};

export default DetailStore;
