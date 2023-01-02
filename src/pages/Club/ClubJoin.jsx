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
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiTwotoneContainer } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ButtonAddActivity,
  ButtonAddPhoto,
  ButtonBack,
} from "../../components/Button";
import CardActivity from "../../components/ClubJoin/CardActivity";
import CardGallery from "../../components/ClubJoin/CardGallery";
import ChatDiscuss from "../../components/ClubJoin/ChatDiscuss";
import Layout from "../../components/Layout";

// 10 ganti dengan params
const urlIdClub = `https://rubahmerah.site/clubs/10`;
const urlActivityIdClub = `https://rubahmerah.site/clubs/10/activities`;
const urlChatIdClub = `https://rubahmerah.site/clubs/10/chats`;
const urladdChat = `https://rubahmerah.site/chats`;
const urlGetGaleries = `https://rubahmerah.site/galeries`;

const ClubJoin = () => {
  const user = useSelector((state) => state.users.currentUser);
  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [galeries, setGaleries] = useState([]);
  // console.log(galeries);
  console.log(data);

  const navigate = useNavigate();

  const configPutNPost = {
    headers: {
      Authorization: `Bearer ${user.token}`,
      "content-type": "multipart/form-data",
    },
  };
  const configGetNDelete = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  //=== GET CLUB BY ID ===//
  const getClubID = async () => {
    await axios
      .get(urlIdClub, configGetNDelete)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  //=== GET ACTIVITY CLUB ===//
  const getClubActivity = async () => {
    await axios
      .get(urlActivityIdClub, configGetNDelete)
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  //=== GET CHAT CLUB ===//
  const getClubChat = async () => {
    await axios
      .get(urlChatIdClub, configGetNDelete)
      .then((res) => {
        setChat(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const getGaleries = async () => {
    await axios
      .get(urlGetGaleries, configGetNDelete)
      .then((res) => {
        setGaleries(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  //=== POST CHAT CLUB ===//
  const postChat = async () => {
    const chat = new FormData();
    chat.append("user_id", user.id);
    chat.append("club_id", data.category_id);
    chat.append("message", message);
    console.log([...chat]);
    setMessage("");

    await axios
      .post(urladdChat, chat, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getClubChat();
  };

  useEffect(() => {
    getGaleries();
    getClubID();
    getClubActivity();
    getClubChat();
  }, []);

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
                  src={data.logo}
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
                  >{`${data?.name?.toUpperCase()}`}</Text>
                  <Text
                    as={"a"}
                    fontSize={"1.2em"}
                    color={"brand.500"}
                    _hover={{ color: "primary.500" }}
                    cursor={"pointer"}
                  >
                    {`Member : ${data.joined_member} / ${data.member_total} `}
                  </Text>
                  <Text
                    as={"p"}
                    fontWeight={"medium"}
                    color={"primary.200"}
                    fontSize={"1.2em"}
                  >
                    {`Category : ${data.category_name}`}
                  </Text>
                </Box>
              </Flex>
              <Text
                pt={2}
                as={"p"}
                fontWeight={"medium"}
                color={"primary.200"}
                fontSize={"1.2em"}
              >{`Address : ${data.address}`}</Text>
              <Text color={"brand.300"} fontSize={20}>
                Club Description
              </Text>
              <Text color={"primary.200"}>{`${data.description}`}</Text>
            </Box>
            <Box>
              <Box py={2}>
                {}
                <ButtonAddActivity />
              </Box>
              <Flex flexDirection={"column"} gap={2}>
                {activities.map((data) => (
                  <CardActivity
                    key={data.id}
                    title={data.name}
                    start_time={data.start_time}
                    end_time={data.end_time}
                    location={data.location}
                    activity_detail={data.activity_detail}
                    day={data.day}
                  />
                ))}
              </Flex>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} w={"25vw"}>
            <Flex justify={"end"} gap={2} p={2} color={"brand.200"} pb={24}>
              <Box _hover={{ color: "primary.400" }}>
                <AiTwotoneContainer size={40} cursor={"pointer"} />
              </Box>
              <Box _hover={{ color: "primary.400" }}>
                <BsGearFill
                  size={40}
                  cursor={"pointer"}
                  onClick={() =>
                    navigate("/editClub", {
                      state: {
                        club_id: activities[0].club_id,
                      },
                    })
                  }
                />
              </Box>
            </Flex>
            <Card variant={"filled"} h={"xl"} bgColor={"white"}>
              <CardHeader textAlign={"Center"} shadow={"md"}>
                Discussion Chat Box
              </CardHeader>

              {/* AKAN DIBUAT COMPONENT UNTUK MAPPING */}
              <CardBody overflow={"auto"}>
                {chat.map((data) => (
                  <ChatDiscuss
                    key={data.id}
                    justify={user.id === data.user_id ? "end" : "start"}
                    align={user.id === data.user_id ? "right" : "left"}
                    User={user.id === data.user_id ? "" : data.user_name}
                    Message={data.message}
                  />
                ))}
              </CardBody>

              <CardFooter border={"1px"} borderColor={"primary.100"} p={0}>
                <InputGroup>
                  <Input
                    className="input-chat"
                    placeholder={"Send message here..."}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <InputRightElement width="4.5rem" type={"submit"}>
                    <Button
                      h="1.75rem"
                      size="md"
                      variant={"ghost"}
                      onClick={postChat}
                    >
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
            <Card variant={"filled"}>
              <CardBody>
                <ButtonAddPhoto />
                <SimpleGrid
                  pt={4}
                  spacing={8}
                  w={"100%"}
                  h={"30%"}
                  columns={{ sm: 2, md: 4 }}
                >
                  {galeries.map((data) => {
                    if (data.club_id === activities[0]?.club_id)
                      return <CardGallery image={data.url} />;
                  })}
                </SimpleGrid>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ClubJoin;
