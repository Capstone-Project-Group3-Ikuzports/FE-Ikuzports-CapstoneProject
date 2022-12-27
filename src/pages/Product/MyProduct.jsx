import React from 'react'
import Navbar from '../../components/Navbar'
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { Box, Text, Flex, Divider, Button, SimpleGrid, Textarea, Select, Input, InputGroup, InputLeftAddon, InputLeftElement, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from "@chakra-ui/react";
import CardMyProduct from '../../components/MyProduct/CardMyProduct'
import { useDisclosure } from '@chakra-ui/react';


const MyProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Navbar/>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} backgroundColor={'brand.100'} overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'6xl'}>Store</Text>
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
                  <FormLabel>Title</FormLabel>
                  <Input bg='white' variant='filled' placeholder='Title' />
                  <FormLabel mt={5}>Description</FormLabel>
                  <Textarea placeholder='Description' bg='white'></Textarea>
                  <FormLabel mt={5}>Price</FormLabel>
                  <InputGroup bg='white'>
                    <InputLeftAddon bg='white' children='Rp' />
                    <Input type='tel' placeholder='Price' />
                  </InputGroup>
                </ModalBody>

                <ModalFooter>
                  <Button bg='black' color='white' px={10} mr={3} onClick={onClose}>
                    Yes
                  </Button>
                  <Button onClick={onClose} backgroundColor='red' color={'white'} px={7}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </Box>
        </Flex>
        <SimpleGrid columns={{sm:2, md:4}} gap={8}>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        <CardMyProduct/>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default MyProduct
