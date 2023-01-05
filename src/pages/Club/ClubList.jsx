import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonBack } from '../../components/Baru/ButtonBack';
import axios from 'axios';
import {Spinner, Box, Text, Flex, Divider, SimpleGrid, Select, Input, InputGroup, InputLeftElement, CardBody, Heading } from "@chakra-ui/react";
import CardClub from '../../components/CardClub';
import Layout from '../../components/Layout';
import CardEventClub from '../../components/Baru/CardEventClub';
import Dropdown from '../../components/Baru/Dropdown';

const ClubList = () => {
  const [getMyClub, setGetMyClub] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token
  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
  const [filterCate,setFilterCate] = useState('')
  const [filterCity,setFilterCity] = useState('')

  const getMyClubData = async () => {
    await axios.get(`https://rubahmerah.site/clubs?category_id=${filterCate}&city=${filterCity}`, config)
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
  }, [filterCate,filterCity])
  
  return (
<Layout>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} overflowX='hidden'>
        <ButtonBack />
        <Flex>
        <Text fontSize={'5xl'}>Club List</Text>
        <Flex mt={4} mb='30px' ml='auto'>
        <Box>
          <Flex>
          <Dropdown
          placeHolderProps={'Category'}
          targetValue={(e)=>setFilterCate(e.target.value)}
          filterCates={filterCate}>
                        <option value="1">SepakBola</option>
                        <option value="2">Basket</option>
                        <option value="3">Futsal</option>
                        <option value="4">Bola Voli</option>
                        <option value="5">Badminton</option>
                        <option value="6">Bersepeda</option>
                        <option value="7">Tenis Lapangan</option>
                        <option value="8">Tenis Meja</option>
                        <option value="9">Renang</option>
                        <option value="10">Beladiri</option>
                </Dropdown>
           <Dropdown
          placeHolderProps={'City'}
          targetValue={(e)=>setFilterCity(e.target.value)}
          filterCates={filterCity}>
           <option value='Jakarta'>Jakarta</option>
                  <option value='Bogor'>Bogor</option>
                  <option value='Depok'>Depok</option>
                  <option value='Tanggerang'>Tanggerang</option>
                  <option value='Bekasi'>Bekasi</option>
                  <option value='Bandung'>Bandung</option>
                  <option value='Semarang'>Semarang</option>
                  <option value='Malang'>Malang</option>
                  <option value='Surabaya'>Surabaya</option>
                  <option value='Jogjakarta'>Jogjakarta</option>
           </Dropdown>
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
        </Flex>
        <Divider w="17%" orientation='horizontal' />
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
        {getMyClub && loading === false ?
          getMyClub.map(data => (
            <CardEventClub linkGambar={data.logo} onClick={() => navigate('/detailclub', {
              state : {
                id: data.id
              }
            })} key={data.id}>
              <CardBody w={'100%'} pb={"0"}>
                <Heading size="md" mb={5}>{data.name}</Heading>
                <Text py="1">Member : {data.joined_member} / {data.member_total}</Text>
                <Text pb="1">{data.category_name}</Text>
                <Text pb="1">{data.city}</Text>
              </CardBody>
            </CardEventClub>
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

