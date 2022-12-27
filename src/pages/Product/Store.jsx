import React from 'react'
import Navbar from '../../components/Navbar'
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { Box, Text, Flex, Divider, Button, SimpleGrid, Card, ButtonGroup, Select, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import CardProduct from '../../components/Store/CardProduct'

const Store = () => {
  return (
    <div className='no-scroll-event'>
      <Navbar/>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} backgroundColor={'brand.100'} overflowX='hidden'>
        <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
        </Flex>
        <Text fontSize={'6xl'}>Store</Text>
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
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Store

