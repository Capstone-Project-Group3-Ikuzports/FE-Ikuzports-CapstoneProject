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
  layout,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiTwotoneContainer } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
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

const ClubJoin = () => {
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
                </Box>
              </Flex>
              <Text
                pt={2}
                as={"p"}
                fontWeight={"medium"}
                color={"primary.200"}
                fontSize={"1.2em"}
              >{`Address : ${"Jl. Raya cibinong - Keradenan Perum Artha Sentosa No.47 RT.04/11"}`}</Text>
              <Text color={"brand.300"} fontSize={20}>
                Club Description
              </Text>
              <Text color={"primary.200"}>
                {`${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, a maxime quod vel eligendi cum."}`}
              </Text>
            </Box>
            <Box>
              <Box py={2}>
                <ButtonAddActivity />
              </Box>
              <Flex flexDirection={"column"} gap={2}>
                <CardActivity />
                <CardActivity />
              </Flex>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} w={"25vw"}>
            <Flex justify={"end"} gap={2} p={2} color={"brand.200"} pb={24}>
              <Box _hover={{ color: "primary.400" }}>
                <AiTwotoneContainer size={40} cursor={"pointer"} />
              </Box>
              <Box _hover={{ color: "primary.400" }}>
                <BsGearFill size={40} cursor={"pointer"} />
              </Box>
            </Flex>
            <Card variant={"filled"} h={"xl"} bgColor={"white"}>
              <CardHeader textAlign={"Center"} shadow={"md"}>
                Discussion Chat Box
              </CardHeader>

              {/* AKAN DIBUAT COMPONENT UNTUK MAPPING */}
              <CardBody overflow={"scroll"}>
                <ChatDiscuss
                  align={"left"}
                  User={"Rendra Andrianysah"}
                  Message={"Halo Halo"}
                />
                <ChatDiscuss
                  align={"left"}
                  User={"Rendra Andrianysah"}
                  Message={"Halo Halo"}
                />
                <ChatDiscuss
                  align={"left"}
                  User={"Rendra Andrianysah"}
                  Message={"Halo Halo"}
                />
                <ChatDiscuss
                  align={"left"}
                  User={"Ethan"}
                  Message={"Halo Halo"}
                />
                <ChatDiscuss
                  justify={"end"}
                  User={""}
                  align={"left"}
                  Message={"Halo Halo"}
                />
                <ChatDiscuss
                  // justify={"end"}
                  User={"Ghiyas"}
                  align={"left"}
                  Message={"Haii"}
                />
                <ChatDiscuss
                  // justify={"end"}
                  User={"Rendra"}
                  align={"left"}
                  Message={"Puyeng puyeng"}
                />
                <ChatDiscuss
                  justify={"end"}
                  User={""}
                  align={"left"}
                  Message={"mantap mantap"}
                ></ChatDiscuss>
              </CardBody>

              <CardFooter border={"1px"} borderColor={"primary.100"} p={0}>
                <InputGroup>
                  <Input placeholder={"Send message here..."} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="md" variant={"ghost"}>
                      <RiSendPlaneFill size={20} color={"#4483c2"} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </CardFooter>
            </Card>
          </Box>
        </Flex>
        <Box>
          <Box py={4}>
            <ButtonAddPhoto />
          </Box>
          <CardGallery />
        </Box>
      </Box>
      </Layout>
  );
};

export default ClubJoin;
