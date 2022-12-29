import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdBrandingWatermark } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Sample from "../../assets/sample.png";
import {
  ButtonAddActivity,
  ButtonAddPhoto,
  ButtonBack,
} from "../../components/Button";
import CardActivity from "../../components/ClubJoin/CardActivity";
import CardGallery from "../../components/ClubJoin/CardGallery";
import ChatDiscuss from "../../components/ClubJoin/ChatDiscuss";
import Layout from "../../components/Layout";

const ClubNonJoin = () => {
  const navigate = useNavigate();
  return (
  <Layout>
          <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden">
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        <Flex>
          <Box w={"55vw"} pr={10}>
            <Box>
              <Flex align={"center"}>
                <Image
                  src={Sample}
                  rounded={"full"}
                  w={"44"}
                  h={"44"}
                  fit={"cover"}
                />
                <Box pl={2}>
                  <Text
                    as={"h1"}
                    fontSize={"3rem"}
                    fontWeight={"bold"}
                    color={"brand.300"}
                  >{`${"team intel".toUpperCase()}`}</Text>
                  <Text
                    as={"a"}
                    fontSize={"1.2em"}
                    color={"brand.500"}
                    _hover={{ color: "primary.500" }}
                    cursor={"pointer"}
                  >
                    {`Member : ${"33/50"}`}
                  </Text>
                  <Text
                    as={"p"}
                    fontWeight={"medium"}
                    color={"primary.200"}
                    fontSize={"1.2em"}
                  >
                    {`Category : ${"Basketball"}`}
                  </Text>
                  <Text
                pt={2}
                as={"p"}
                fontWeight={"medium"}
                color={"primary.200"}
                fontSize={"1.2em"}
              >{`Address : ${"Tanggerang Selatan, Pamulang"}`}</Text>
                </Box>
              </Flex>
              <Text color={"brand.300"} fontSize={20}>
                Club Description
              </Text>
              <Text color={"primary.200"}>
                {`${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum."}`}
              </Text>
            </Box>
            <Box>
           
              <Flex flexDirection={"column"} gap={2}>

              </Flex>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} w={"25vw"}>
      
            <Card   variant={"filled"} h={"xl"} >
              <CardHeader textAlign={"Center"}>
                <Text color={"brand.300"} fontSize={20}>RULES</Text>
             
              </CardHeader>

              {/* AKAN DIBUAT COMPONENT UNTUK MAPPING */}
              <CardBody  overflow={"scroll"}>
          <Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Text>
              </CardBody>

            </Card>
          </Box>
        </Flex>
        <Box>
          <Box py={4}>
          </Box>
          <CardGallery />
        </Box>
<Box pt='2vh'>
  <Flex justify='end'>
        <Button bg='grey' w='15vw' textColor={'white'} _hover >Requested</Button>
        <Button bg='brand.300' w='15vw' textColor={'white'} _hover={{ bgColor: "brand.500", color: "primary.100" }} >Join</Button>
        </Flex>
        </Box>
      </Box>

      </Layout>
  );
};

export default ClubNonJoin;
