import React from 'react'
import Navbar from '../../components/Navbar'
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import {Stack,CardBody,Heading,CardFooter,Box, Text, Flex, Divider, Button, SimpleGrid, Card, ButtonGroup, Select, Input, InputGroup, InputLeftElement,Image } from "@chakra-ui/react";
import CardProduct from '../../components/Store/CardProduct'
import Layout from '../../components/Layout';

const ClubList = () => {
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
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
><Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '100px' }}
    src='https://www.servethehome.com/wp-content/uploads/2016/12/AMD-Ryzen-Logo.png'
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>TEAM AMD</Heading>

      <Text py='2'>
    Member
      </Text>
      <Text py='2'>
    BasketBall
      </Text>
      <Text py='2'>
    Bogor
      </Text>
    </CardBody>
  </Stack>
</Card>
        </SimpleGrid>
      </Box>
      </Layout>
  )
}

export default ClubList

