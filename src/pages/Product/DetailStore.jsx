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
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  ButtonBack,
  ButtonBuy,
  ButtonCancel,
  ButtonSave,
} from "../../components/Button";
import Sample1 from "../../assets/sampleJersey1.jpeg";
import Sample2 from "../../assets/sampleJersey2.jpg";
import Sample3 from "../../assets/sampleJersey3.jpeg";
import Layout from "../../components/Layout";
const DetailStore = () => {
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
            >{`${"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusamus excepturi voluptatibus voluptas, perferendis incidunt id hic necessitatibus. Quia delectus magni officiis doloribus id facere placeat culpa reiciendis doloremque "}`}</Text>
          </Box>
          <Box w={"50vw"}>
            <Text
              as={"h6"}
              fontSize={"6xl"}
              fontWeight={"semibold"}
            >{`${"Jersey argentina"}`}</Text>
            <Text as={"h3"} fontSize={"4xl"} fontWeight={"hairline"}>
              {`Rp ${"350000"}`}
            </Text>
            <Text as={"h2"} fontSize={"2xl"} fontWeight={"normal"} pb={"28"}>
              {`Seller : ${"Ghiyas Skuillow"}`}
            </Text>
            <ButtonBuy />
          </Box>
        </Flex>
      </Box>
      </Layout>
  );
};

export default DetailStore;
