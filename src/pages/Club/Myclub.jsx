import React from "react";
import CardMyClub from "../../components/MyClub/CardMyClub";
import Navbar from '../../components/Navbar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { Box, Text, Flex, Divider, Button, SimpleGrid, Card } from "@chakra-ui/react";

const Myclub = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <Box p='8' px={'10%'} w={'100vw'} h={'100vh'} backgroundColor={'brand.100'} overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'6xl'}>My Club</Text>
        <Divider w="17%" orientation='horizontal' />
        <Box justify='end' ml={'92%'} justifyContent={'end'}>
        <Button px="13%" ml="auto" mb={'20px'} justify='end' justifyContent={'end'} bg={'brand.300'} color='white' justifyItems='end' >Create a Club</Button>
        </Box>
        <SimpleGrid columns={{sm:1, md:2}} gap={8}>
        <CardMyClub/>
        <CardMyClub/>
        <CardMyClub/>
        <CardMyClub/>
        <CardMyClub/>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Myclub;
