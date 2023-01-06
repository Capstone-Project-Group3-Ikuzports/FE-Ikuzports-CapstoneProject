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
import { useCallback } from "react";
import { BsGearFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { ButtonBack } from "../../components/Baru/ButtonBack";
import { ButtonAddActivity } from "../../components/Baru/ButtonBack";
import { useLocation, useNavigate } from "react-router-dom";
import CardActivity from "../../components/Baru/CardActivity";
import CardGallery from "../../components/Baru/CardGallery";
import ChatDiscuss from "../../components/Baru/ChatDiscuss";
import ModalMember from "../../components/ClubJoin/ModalMember";
import HandleGaleries from "../../components/ClubJoin/ModalPostGaleries";
import ModalRules from "../../components/ClubJoin/ModalRules";
import Layout from "../../components/Baru/Layout";
import Swal from "sweetalert2";

const ClubJoin = () => {
  const user = useSelector((state) => state.users.currentUser);
  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [galeries, setGaleries] = useState([]);
  const location = useLocation();
  const id_club = location?.state.id;

  // === URL === //
  const urlIdClub = `https://rubahmerah.site/clubs/${id_club}`;
  const urlActivityIdClub = `https://rubahmerah.site/clubs/${id_club}/activities`;
  const urlMemberIdClub = `https://rubahmerah.site/clubs/${id_club}/members`;
  const urlChatIdClub = `https://rubahmerah.site/clubs/${id_club}/chats`;
  const urlGetGaleriesIdClub = `https://rubahmerah.site/clubs/${id_club}/galeries`;
  const urladdChat = `https://rubahmerah.site/chats`;
  const urladdGaleries = `https://rubahmerah.site/galeries`;
  const urlRemoveMember = `https://rubahmerah.site/members/`;
  const urlAcceptMember = `https://rubahmerah.site/members/`;

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

  //=== GET MEMBER CLUB ===//
  const [memberRaw, setMemberRaw] = useState([]);

  const getMember = () => {
    axios
      .get(urlMemberIdClub, configGetNDelete)
      .then((res) => {
        setMemberRaw(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  //=== GET ACTIVITY CLUB ===//
  const getClubActivity = async () => {
    await axios
      .get(urlActivityIdClub, configGetNDelete)
      .then((res) => {
        setActivities(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //=== GET CHAT CLUB ===//
  const getClubChat = async () => {
    await axios
      .get(urlChatIdClub, configGetNDelete)
      .then((res) => {
        setChat(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //=== GET GALERIES ===//
  const getGaleries = async () => {
    await axios
      .get(urlGetGaleriesIdClub, configGetNDelete)
      .then((res) => {
        setGaleries(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //=== POST CHAT CLUB ===//
  const postChat = async () => {
    const chat = new FormData();
    chat.append("user_id", user.id);
    chat.append("club_id", data.id);
    chat.append("message", message);
    console.log([...chat]);
    setMessage("");

    await axios
      .post(urladdChat, chat, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getClubChat();
  };

  //=== POST PHOTO GALERIES ===//
  const postGaleries = async (datapost) => {
    console.log(datapost);
    const photo = new FormData();
    photo.append("club_id", data.id);
    photo.append("caption", datapost.caption);
    photo.append("url", datapost.file);
    console.log([...photo]);

    await axios
      .post(urladdGaleries, photo, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getGaleries();
  };

  //=== REMOVE MEMBER ===//
  const remove = async (data) => {
    await axios
      .delete(`${urlRemoveMember}${data.id}`, configGetNDelete)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const removeMember = useCallback((data) => {
    Swal.fire({
      text: `Are you sure want to remove ${data.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#454545",
      confirmButtonText: "Yes ",
      cancelButtonColor: "#DC143C",
      cancelButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `${data.member}, has removed`,
          showConfirmButton: false,
          timer: 2000,
        });
        remove(data);
        getMember();
        setTimeout(() => {
          data.onOpen();
        }, 2200);
      }
    });
  }, []);

  //=== ACCEPT MEMBER ===//
  const accept = async (data) => {
    const acceptUser = new FormData();
    acceptUser.append("user_id", data.user);
    acceptUser.append("club_id", data.club);
    acceptUser.append("status", "Member");
    console.log([...acceptUser]);

    await axios
      .put(`${urlAcceptMember}${data.id}`, acceptUser, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const acceptMember = useCallback((data) => {
    Swal.fire({
      text: `will you accept ${data.name}?`,
      icon: "question",
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
          text: `${data.name}, has joined 👋🏻`,
          showConfirmButton: false,
          timer: 2000,
        });
        accept(data);
        getMember();
        setTimeout(() => {
          data.onOpen();
        }, 2200);
      }
    });
  }, []);

  useEffect(() => {
    getMember();
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
                  objectFit={"contain"}
                />
                <Box pl={2}>
                  <Text
                    as={"h1"}
                    fontSize={"3rem"}
                    fontWeight={"bold"}
                    color={"brand.300"}
                  >{`${data?.name?.toUpperCase()}`}</Text>
                  <ModalMember
                    totalmember={data.member_total}
                    joinedmember={data.joined_member}
                    memberRaw={memberRaw}
                    removeMember={removeMember}
                    acceptMember={acceptMember}
                  />

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
                <ButtonAddActivity />
              </Box>
              <Flex flexDirection={"column"} gap={2}>
                {activities ? (
                  activities.map((data) => (
                    <CardActivity
                      key={data.id}
                      title={data.name}
                      start_time={data.start_time}
                      end_time={data.end_time}
                      location={data.location}
                      activity_detail={data.activity_detail}
                      day={data.day}
                    />
                  ))
                ) : (
                  <Flex w={"50vw"} bgColor={"white"} h={"20vw"}>
                    <Text fontSize={"4xl"} margin={"auto"}>
                      No Activities
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} w={"25vw"}>
            <Flex justify={"end"} gap={2} p={2} color={"brand.200"} pb={24}>
              <Box _hover={{ color: "primary.400" }}>
                <ModalRules body={data.rule} />
              </Box>
              <Box _hover={{ color: "primary.400" }}>
                <BsGearFill
                  size={40}
                  cursor={"pointer"}
                  onClick={() =>
                    navigate("/editClub", {
                      state: {
                        club_id: data.id,
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
                {chat?.map((data) => (
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
                    {message.length === 0 ? (
                      <Button
                        disabled
                        h="1.75rem"
                        size="md"
                        variant={"ghost"}
                        onClick={postChat}
                      >
                        <RiSendPlaneFill size={20} color={"#4483c2"} />
                      </Button>
                    ) : (
                      <Button
                        h="1.75rem"
                        size="md"
                        variant={"ghost"}
                        onClick={postChat}
                      >
                        <RiSendPlaneFill size={20} color={"#4483c2"} />
                      </Button>
                    )}
                  </InputRightElement>
                </InputGroup>
              </CardFooter>
            </Card>
          </Box>
        </Flex>
        <Box>
          <Box py={4}>
            <Card variant={"filled"}>
              <CardBody minH={"40vh"}>
                <HandleGaleries title={"Add photo"} post={postGaleries} />
                <SimpleGrid
                  pt={4}
                  spacing={8}
                  w={"100%"}
                  h={"30%"}
                  columns={{ sm: 2, md: 4 }}
                >
                  {galeries?.map((data) => (
                    <CardGallery image={data.url} key={data.id} />
                  ))}
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
