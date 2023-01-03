import React from 'react';
import { useState,useEffect } from 'react';
import { Box, Button, Divider, Flex, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SimpleGrid, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Layout from '../../components/Layout';
import CardMyProduct from '../../components/MyProduct/CardMyProduct';
import Swal from 'sweetalert2';

const MyProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token
  const idUser = currentUser.id

  const config = {
    headers: {Authorization : `Bearer ${token}`}
  }

  const configPutNPost = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  }

const navi = useNavigate();
const [myProduct,setMyProduct] = useState([])
const [product_name, setName] = useState('')
const [desc, setDesc] = useState('')
const [price, setPrice] = useState('')
const [upload_image, setImage] = useState(null)
const [category_item, setCategory] = useState('')
const [city, setCity] = useState('')

const getMyProduct = () =>{
  axios
  .get(`https://rubahmerah.site/users/${idUser}/products`,config)
  .then(res=>{
    setMyProduct(res.data.data) 
  })
}

useEffect(()=>
getMyProduct(),[]
)

const modalPost = async ()=>{
  const form = new FormData();
    form.append("product_name", product_name);
    form.append("desc", desc);
    form.append("price", price);
    // form.append("upload_image", upload_image);
    form.append("category_item", category_item);
    form.append("city", city);


    await axios
    .post('https://rubahmerah.site/products/', form,configPutNPost )
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        text: `The Product Had Been Post `,
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/myproduct");
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "error",
        text: `${err.response.data.message}`,
        timer: 3000,
        showConfirmButton: true,
      });
    });
};




  return (
 <Layout>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'}  overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'5xl'} as='u'>My Product</Text>
        <Divider w="17%" orientation='horizontal' />
        <Flex>
        <Box  ml='auto' mb={10} >
           <Button backgroundColor={'brand.300'} onClick={onOpen} color='white' px={10}>Add a Product</Button>
           <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay/>
              <ModalContent backgroundColor={'brand.100'}>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormLabel>Product Name</FormLabel>
                  <Input bg='white' placeholder='Product Name' onChange={(e) => setName(e.target.value) }/>
                  <FormLabel mt={5}>Description</FormLabel>
                  <Textarea placeholder='Description' bg='white' onChange={(e) => setDesc(e.target.value) }></Textarea>
                  <FormLabel mt={5}>Price</FormLabel>
                  <InputGroup bg='white'>
                    <InputLeftAddon bg='white' children='Rp' onChange={(e) => setPrice(e.target.value) }/>
                    <Input type='tel' placeholder='Price' />
                  </InputGroup>
                  <FormLabel mt={5} >Upload Image</FormLabel>
                  <InputGroup bg='white'>
                    <Input type='tel' placeholder='Image' onChange={(e) => setImage(e.target.value)}/>
                  </InputGroup>

           <Select onChange={(e) => setCategory(e.target.value)} mt={'5'}  w={'400px'}  bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Category Item'>
                  <option value= '1'>Sepatu</option>
                  <option value= '2'>Jersey</option>
                  <option value= '3'>Bola</option>
                  <option value= '4'>Raket</option>
                  <option value= '5'>Celana</option>
                  <option value= '6'>Equipment</option>
                  <option value= '7'>Aksesoris</option>
           </Select>

           <Select onChange={(e) => setCity(e.target.value)} mt={'5'} placeholder='City' w={'400px'}  bg='white' mr='30px' variant='filled' boxShadow={'xl'}>
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
                  
                  </ModalBody>
                <ModalFooter>
                  <Button bg='black' color='white' px={10} mr={3} onClick={modalPost}>
                    Yes
                  </Button>
                  <Button onClick={onClose} backgroundColor='red' color={'white'} px={7}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </Box>
        </Flex>
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
          {myProduct.map((item)=>
        <CardMyProduct
        key={item.id}
        name={item.name}
        desc={item.description}
        price={item.price}
        image={item.product_image != null ? item.product_image[0].url : "https://www.hostpapa.com/knowledgebase/wp-content/uploads/2018/04/1-13.png"}
        id={item.id} />
        )
          }
        </SimpleGrid>
      </Box>
      </Layout>
  )}


export default MyProduct
