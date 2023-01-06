import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Divider,
  SimpleGrid,
  Spinner,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import {Buttons} from "../../components/Baru/ButtonBack";
import Layout from "../../components/Baru/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {ButtonBack} from "../../components/Baru/ButtonBack";
import CardEventClub from "../../components/Baru/CardEventClub";


const Myclub = () => {
  const navigate = useNavigate();
  const [getMyClub, setGetMyClub] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector((state) => state.users.currentUser);
  const token = currentUser.token;
  const id = currentUser.id;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const GetMyClubUser = async () => {
    await axios
      .get(`https://rubahmerah.site/users/${id}/clubs`, config)
      .then((response) => {
        setLoading(true);
        setGetMyClub(response.data.data);
        setLoading(false);
        // console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetMyClubUser();
  }, []);

  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} h={"100vh"} overflowX="hidden">
        <ButtonBack />
        <Flex>
        <Text fontSize={"5xl"}>My Club</Text>
        <Box verticalAlign={'center'} mt={4} ml='auto'>
        <Buttons openTrigger={() => navigate("/addnewclub")} textContent="Add A Club"/>
        </Box>
        </Flex> 

        <Divider w="17%" orientation="horizontal" />
        <Box justify="end" ml={"92%"} justifyContent={"end"}></Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={8}>
          {getMyClub && loading === false ? (
            getMyClub.map((data) => {
              if (data.member_total === 0) {
                (" ");
              } else {
                return (
                  <CardEventClub linkGambar={data.logo} onClick={() => navigate('/clubjoin', {
                    state : {
                      id: data.id
                    }
                  })}>
                    <CardBody pb="0" h={200}>
                      <Flex>
                        <Heading size="xl" w={"100%"}>
                          {data.name}
                        </Heading>
                        <Box pl="30%">
                          <Text bg={"brand.200"} color='white' w={100} mx='auto' pt={"20px"} textAlign={'center'} rounded='lg' p={3} as='b'>{data.status}</Text>
                        </Box>
                      </Flex>

                      <Text py="2">
                        Member : {data.joined_member} / {data.member_total}
                      </Text>
                      <Text pb="2">Category {data.category}</Text>
                      <Text pb="2">Location : {data.city}</Text>
                    </CardBody>
                  </CardEventClub>
                );
              }
            })
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Myclub;
