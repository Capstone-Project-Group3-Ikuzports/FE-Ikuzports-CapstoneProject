import React,{useState,useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {CardFooter,Heading,CardHeader,Box, Text, Flex, Divider, Button, SimpleGrid, Card, ButtonGroup, Select, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardProduct from '../../components/Store/CardProduct'
import { ButtonBack } from '../../components/Button';
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
const [filterCate,setFilterCate] = useState('');
const navi = useNavigate();

const getProduct = () =>{
  axios
  .get(`https://rubahmerah.site/products?itemcategory_id=${filterCate}&name=&city=&pages`,config)
  .then(res=>{
    setProduct(res.data.data) 
  })
}

  useEffect(()=>
  getProduct(),[filterCate]
  )

  return (
<Layout>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} overflowX='hidden'>
        <ButtonBack/>
        <Flex>
        <Text fontSize={'5xl'} textColor={'brand.300'}>Store</Text>
        <Flex mb='30px' ml='auto' mt={4}>
           <Select w={'200px'} value={filterCate} onChange={(e)=>{ setFilterCate(e.target.value) }} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Category'>
                  <option value= '1'>Sepatu</option>
                  <option value= '2'>Jersey</option>
                  <option value= '3'>Bola</option>
                  <option value= '4'>Raket</option>
                  <option value= '5'>Celana</option>
                  <option value= '6'>Equipment</option>
                  <option value= '7'>Aksesoris</option>
           </Select>
           <Select w={'200px'} bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='City'>
                  <option value=''>Jakarta</option>
                  <option value=''>Bogor</option>
                  <option value=''>Depok</option>
                  <option value=''>Tangerang</option>
                  <option value=''>Bekasi</option>
                  <option value=''>Bandung</option>
                  <option value=''>Semarang</option>
                  <option value=''>Malang</option>
                  <option value=''>Surabaya</option>
                  <option value=''>Jogjakarta</option>
           </Select>
           <InputGroup w={'250px'} boxShadow={'xl'} varian='filled'>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
              />
              <Input type='tel' bg='white' placeholder='Search Product' />
            </InputGroup>
          </Flex>
        </Flex>
        <Divider w="17%" orientation='horizontal' />
        <Flex>
        <Box  ml={'57%'}>
        </Box>
        </Flex>
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
        
        {product != null ? (product.map((item)=>(
              <CardProduct 
              key={item.id}
              image={item.product_image != null ? item.product_image[0].url : "https://www.hostpapa.com/knowledgebase/wp-content/uploads/2018/04/1-13.png"}
              nama={item.name}
              harga={item.price}
              bilaClick={()=>{navi('/detailstore', {
                state : {
                  id : item.id
                }
              })}}/>
              ))) :  <Card align='center' w={'8xl'} >
              <CardHeader>
                <Heading size='3xl' color={'brand.300'}>There is no item on this category yet </Heading>
              </CardHeader>
              <CardFooter>
                 <Button bg='brand.300' color={'brand.100'} onClick={()=>{navi('/myproduct')}}>Lets GO sell something </Button>
              </CardFooter>
            </Card>
           
            }
        </SimpleGrid>
      </Box>
      </Layout>
  )
}

export default Store

