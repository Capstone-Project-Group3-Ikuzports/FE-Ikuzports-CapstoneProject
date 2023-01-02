import React,{useState,useEffect} from 'react'

import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { Box, Text, Flex, Divider, Button, SimpleGrid, Card, ButtonGroup, Select, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardProduct from '../../components/Store/CardProduct'
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Store = () => {
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token

  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
const [product,setProduct] = useState([]);
const navi = useNavigate();

const getProduct = () =>{
  axios
  .get('https://rubahmerah.site/products',config)
  .then(res=>{
    setProduct(res.data.data)
  })
}

useEffect(()=>
  getProduct(),[]
)
  

  return (
<Layout>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'5xl'} as='u' textColor={'brand.300'}>Store</Text>
        <Divider w="17%" orientation='horizontal' />
        <Flex>
        <Box  ml={'57%'}>
          <Flex mb='30px'>
           <Select w={'200px'} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Category'>
                  <option value= '1' >Sepatu</option>
                  <option value= '2'>Jersey</option>
                  <option value= '3'>Bola</option>
                  <option value= '4'>Raket</option>
                  <option value= '5'>Celana</option>
                  <option value= '6'>Equipment</option>
                  <option value= '7'>Aksesoris</option>
           </Select>
           <Select w={'200px'} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='City'>
           <option value='option1'>Option 1</option>
           <option value='option2'>Option 2</option>
           <option value='option3'>Option 3</option>
           </Select>
           <InputGroup w={'250px'} boxShadow={'xl'} varian='filled'>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
              />
              <Input type='tel' bg='white' placeholder='Search Product' />
            </InputGroup>
          </Flex>
        </Box>
        </Flex>
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
        
        {product.map((item)=>(
              <CardProduct 
              key={item.id}
              image=''
              nama={item.name}
              harga={item.price}
              bilaClick={()=>{navi('/detailstore', {
                state : {
                  id : item.id
                }
              })}}/>
        ))}
    
       
        </SimpleGrid>
      </Box>
      </Layout>
  )
}

export default Store

