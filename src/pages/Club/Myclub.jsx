import React from "react";
import CardMyClub from "../../components/MyClub/CardMyClub";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Divider,
  Button,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {ButtonBack} from "../../components/Button";

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
        <Button
            px="3%"
            ml="auto"
            mt={4}
            mb='30px'
            justify="end"
            justifyContent={"end"}
            bg={"brand.300"}
            _hover={{bg: "brand.200"}}
            color="white"
            justifyItems="end"
            onClick={() => navigate("/addnewclub")}
          >
            Create a Club
          </Button>
        </Flex> 
        <Divider w="17%" orientation="horizontal" />
        <Box justify="end" ml={"92%"} justifyContent={"end"}>
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={8}>
          {getMyClub && loading === false ? (
            getMyClub.map((data) => {
              if (data.member_total === 0) {
                (" ");
              } else {
                return (
                  <CardMyClub
                    key={data.id}
                    category={data.category}
                    city={data.city}
                    join={data.joined_member}
                    logo={data.logo}
                    total={data.member_total}
                    name={data.name}
                    status={data.status}
                    onClick={() =>
                      navigate("/clubjoin", {
                        state: {
                          id: data.club_id,
                        },
                      })
                    }
                  />
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
