import { ChevronLeftIcon } from "@chakra-ui/icons";
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
import React, { useCallback, useEffect, useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsGearFill,
} from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ButtonBack } from "../../components/Baru/ButtonBack";
import CardActivity from "../../components/Baru/CardActivity";
import CardGallery from "../../components/Baru/CardGallery";
import ChatDiscuss from "../../components/Baru/ChatDiscuss";
import Layout from "../../components/Baru/Layout";
import ModalMember from "../../components/Unreusable/ModalMember";
import ModalPostActivity from "../../components/Unreusable/ModalPostActivity";
import HandleGaleries from "../../components/Unreusable/ModalPostGaleries";
import ModalRules from "../../components/Unreusable/ModalRules";

const ClubJoin = () => {
  const user = useSelector((state) => state.users.currentUser);
  const [data, setData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const id_club = location?.state.id;
  const status = location?.state.status;
  const navigate = useNavigate();

  // === URL === //
  const urlIdClub = `https://rubahmerah.site/clubs/${id_club}`;
  const urlActivityIdClub = `https://rubahmerah.site/clubs/${id_club}/activities`;
  const urlMemberIdClub = `https://rubahmerah.site/clubs/${id_club}/members`;
  const urlChatIdClub = `https://rubahmerah.site/clubs/${id_club}/chats`;
  const urlGetGaleriesIdClub = `https://rubahmerah.site/clubs/${id_club}/galeries`;
  const urladdChat = `https://rubahmerah.site/chats`;
  const urlAddGalleries = `https://rubahmerah.site/galeries`;
  const urlDeleteGalleries = `https://rubahmerah.site/galeries/`;
  const urlHandleMember = `https://rubahmerah.site/members/`;
  const urlPostActivity = `https://rubahmerah.site/activities`;
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

  const [memberRaw, setMemberRaw] = useState([]);
  //=== GET MEMBER CLUB ===//
  const getMember = () => {
    axios
      .get(urlMemberIdClub, configGetNDelete)
      .then((res) => {
        setMemberRaw(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  let memberLength = memberRaw.filter(
    (memberRaw) => memberRaw.status !== "Requested" // TOTAL MEMBER
  ).length;
  let requestedLength = memberRaw.filter(
    (memberRaw) => memberRaw.status === "Requested" // TOTAL REQUEST
  ).length;

  //=== GET ACTIVITY CLUB ===//
  const getClubActivity = async () => {
    await axios
      .get(urlActivityIdClub, configGetNDelete)
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // PAGINATION ACTIVITY //
  const [currentPage, SetCurrentPage] = useState(1);
  const maxPage = Math.ceil(activities.length / 2);
  const postPerPage = 2;
  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentActivities = activities
    ? [...activities].reverse().slice(firstPost, lastPost)
    : activities;
  const nextPage = () => {
    if (currentPage < maxPage) SetCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage >= maxPage - 1) SetCurrentPage(currentPage - 1);
  };

  //=== POST ACTIVITY ===//
  const postActivity = async (data) => {
    const activities = new FormData();
    activities.append("club_id", id_club);
    activities.append("name", data.title);
    activities.append("start_time", data.startTime);
    activities.append("end_time", data.endTime);
    activities.append("day", !data.day ? "Sunday" : data.day);
    activities.append("location", data.location);
    activities.append("activity_detail", data.detail);

    await axios
      .post(urlPostActivity, activities, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getClubActivity();
  };

  //=== GET CHAT CLUB ===//
  const getClubChat = async () => {
    await axios
      .get(urlChatIdClub, configGetNDelete)
      .then((res) => {
        setChat(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [galeries, setGaleries] = useState([]);
  const reverseGaleries = galeries ? [...galeries].reverse() : galeries; // REVERSE GALERIES
  //=== GET GALERIES ===//
  const getGaleries = async () => {
    await axios
      .get(urlGetGaleriesIdClub, configGetNDelete)
      .then((res) => {
        setGaleries(res.data.data);
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
    setMessage("");

    await axios
      .post(urladdChat, chat, configPutNPost)
      .then(res)
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

    await axios
      .post(urlAddGalleries, photo, configPutNPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    getGaleries();
  };

  // DELETE PHOTO === //
  const deletePhoto = async (data) => {
    // console.log("test", data.id);
    axios
      .delete(`${urlDeleteGalleries}${data.id}`, configGetNDelete)
      .then((res) => getGaleries())
      .catch((err) => console.log(err));
  };

  const dellPhoto = useCallback((data) => {
    Swal.fire({
      text: `Are you sure want to delete?`,
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
          text: `Success deleted `,
          showConfirmButton: false,
          timer: 2000,
        });
        deletePhoto(data);
        setTimeout(() => {}, 2200);
      }
    });
  }, []);

  //=== REMOVE MEMBER ===//
  const remove = (data) => {
    axios
      .delete(`${urlHandleMember}${data.id}`, configGetNDelete)
      .then((res) => getMember())
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
          text: `${data.name}, has removed`,
          showConfirmButton: false,
          timer: 2000,
        });
        remove(data);
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

    await axios
      .put(`${urlHandleMember}${data.id}`, acceptUser, configPutNPost)
      .then((res) => getMember())
      .catch((err) => console.log(err));
  };

  const acceptMember = useCallback((data) => {
    Swal.fire({
      text: `will you accept ${data.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#454545",
      confirmButtonText: "Sure",
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

        {/* PROFILE CLUB */}
        <Flex>
          <Box w={"55vw"} pr={10}>
            <Box>
              <Flex align={"center"}>
                <Image
                  src={data.logo}
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
                    memberRaw={memberRaw}
                    removeMember={removeMember}
                    acceptMember={acceptMember}
                    memberLength={memberLength}
                    requestedLength={requestedLength}
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

            {/* ACTIVITIES */}
            <Box>
              <Box py={2}>
                {status === "Owner" ? (
                  <ModalPostActivity
                    titleActivity={"Create Activity"}
                    post={postActivity}
                  />
                ) : (
                  <></>
                )}
              </Box>
              <Flex flexDirection={"column"} gap={2}>
                {activities ? (
                  currentActivities.map((data) => (
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
            <Flex justifyContent={"center"} gap={4} pt={5}>
              <BsArrowLeftCircle
                size={35}
                color={"#2E5984"}
                onClick={() => prevPage()}
              />
              <BsArrowRightCircle
                size={35}
                color={"#2E5984"}
                onClick={() => nextPage()}
              />
            </Flex>
          </Box>

          {/* RULES & SETTING */}
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

            {/* DISCUSSION CHAT */}
            <Card variant={"filled"} h={"xl"} bgColor={"white"}>
              <CardHeader textAlign={"Center"} shadow={"md"}>
                Discussion Chat Box
              </CardHeader>
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

        {/* GALLERIES */}
        <Box>
          <Box py={4}>
            <Card variant={"filled"}>
              <CardBody minH={"40vh"}>
                {status === "Owner" ? (
                  <HandleGaleries title={"Add photo"} post={postGaleries} />
                ) : (
                  <></>
                )}
                <SimpleGrid
                  pt={4}
                  spacing={8}
                  w={"100%"}
                  h={"30%"}
                  columns={{ sm: 2, md: 4 }}
                >
                  {reverseGaleries?.map((data) => (
                    <CardGallery
                      image={data.url}
                      key={data.id}
                      caption={data.caption}
                      data={data.id}
                      deletePhoto={dellPhoto}
                    />
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
