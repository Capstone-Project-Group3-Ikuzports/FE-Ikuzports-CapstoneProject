import React from 'react'
import Navbar from '../../components/Navbar'
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Spinner, Box, Text, Flex, Divider, SimpleGrid, Select, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardClub from '../../components/CardClub';
import Layout from '../../components/Layout';

const ClubList = () => {
  const [getMyClub, setGetMyClub] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token
  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
  console.log(token)

  const getMyClubData = async () => {
    await axios.get(`https://rubahmerah.site/clubs`, config)
    .then((response) => {
      setLoading(true)
      setGetMyClub(response.data.data)
      setLoading(false)
      console.log(response.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getMyClubData()
  }, [])
  
  return (
<Layout>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'6xl'}>Club List</Text>
        <Divider w="17%" orientation='horizontal' />
        <Flex>
        <Box  ml={'57%'}>
          <Flex mb='30px'>
           <Select w={'200px'} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Filled'>
           <option value='option1'>Option 1</option>
           <option value='option2'>Option 2</option>
           <option value='option3'>Option 3</option>
           </Select>
           <Select w={'200px'} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Filled'>
           <option value='option1'>Option 1</option>
           <option value='option2'>Option 2</option>
           <option value='option3'>Option 3</option>
           </Select>
           <InputGroup w={'200px'} boxShadow={'xl'} varian='filled'>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
              />
              <Input type='tel' bg='white' placeholder='Phone number' />
            </InputGroup>
          </Flex>
        </Box>
        </Flex>
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
        {getMyClub && loading === false ?
          getMyClub.map(data => (
            <CardClub
            key = {data.id}
            name = {data.name}
            member = {data.joined_member}
            totalMember = {data.member_total}
            category = {data.category_name}
            kota= {data.city}
            gambar = {data.logo}
            diKlik = {() => {
              navigate('/detailclub', {
                state : {
                  id : data.id
                }
              })
            }}
            />
          ))
          : <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        }
        
        </SimpleGrid>
      </Box>
      </Layout>
  )
}

export default ClubList

