import React from "react";
import CardEvent from '../components/Home/CardEvent'
import Navbar from '../components/Navbar'
import { Box, Stack, Text, Flex, Image, Button, Select, FormControl, FormLabel, Spinner, Card,  CardBody, Input, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ' '
    const currentUser = useSelector((state) => state.users.currentUser)
    const token = currentUser.token
    const navigate = useNavigate()
    console.log(currentUser)
    console.log(token)

    const [getEvents, setGetEvents] = useState([])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [category_id, setCategoryId] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [image_event, setImageEvent] = useState('')
    const [maximum_people, setMaximumPeople] = useState('')

    const config = {
      headers: {Authorization : `Bearer ${token}`},
    }
    console.log(config)

    const getEvent = async () => {
      await axios.get(`https://rubahmerah.site/events`, config)
      .then((response) => {
        setLoading(true)
        setGetEvents(response.data.data)
        setLoading(false)
        console.log(response.data.data)
      })
      .catch((err) => {
        err
      })
    }

    const addEvent = async () => {
      await axios.post(`https://rubahmerah.site/events`, {name, address, city, category_id, start_date, end_date, image_event, maximum_people}, config)
      .then(response => {
        console.log(response.MSG)
      })
      .catch(err => {
        console.log(error)
      })
    }

    const handleSubmit = (e) => {
      addEvent()
      e.preventDefault();
      setName(''),
      setAddress(''),
      setCity(''),
      setCategoryId(''),
      setEndDate(''),
      setStartDate(''),
      setImageEvent(''),
      setMaximumPeople('')
    }

    useEffect(() => {
      getEvent()
    }, [])

    console.log(name)
  return(
    <Layout>
    <div>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'}>
        <Flex>
          <div>
          <Text as="b" fontSize={'2xl'}>Home</Text>
        <Card  w={'100%'} h={'170px'} mt={'15px'} shadow='xl' rounded='xl' backgroundColor={'white'}>
          <CardBody w={'100%'}>
            <Flex h={'70%'}>
              <Box my='auto'>
              <FiUser
              size={60}
              />
              </Box>
              <Text px={'5'} onClick={onOpen} my='auto' fontSize={'2xl'} ml={'50px'} w={'80%'} p={3} _hover={{cursor: "pointer", backgroundColor: "gray.100",}} rounded='full' color='gray.500'>Start Posting Now</Text>
            </Flex>
            <Button justify='end' onClick={onOpen} justifyContent='end' px='10' backgroundColor={'brand.300'} _hover={{bg: '#2E5984'}} color={'white'} ml={'82%'}>Post</Button>
          </CardBody>
        </Card>

        <form onSubmit={(e) => handleSubmit(e)}>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add New Event</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <FormControl isInvalid={isError}>
                <FormLabel my='3'>Event Title</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel my='3'>Event Address</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <FormLabel my='3'>Event City</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setCity(e.target.value)}
                />
                <FormLabel my='3'>Event Category</FormLabel>
                <Select placeholder='Select option'>
                  <option value= '1' >SepakBola</option>
                  <option value= '2'>Basket</option>
                  <option value= '3'>Futsal</option>
                  <option value= '4'>Bola Voli</option>
                  <option value= '5'>Badminton</option>
                  <option value= '6'>Bersepeda</option>
                  <option value= '7'>Tenis Lapangan</option>
                  <option value= '8'>Tenis Meja</option>
                  <option value= '9'>Renang</option>
                  <option value= '10'>Beladiri</option>
                </Select>

                <FormLabel my='3'>Starting Date</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <FormLabel my='3'>Ending Date Date</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <FormLabel my='3'>Maximum People</FormLabel>
                <Input
                  color='gray'
                  placeholder='custom placeholder'
                  _placeholder={{ opacity: 0.4, color: 'inherit' }}
                  onChange={(e) => setMaximumPeople(e.target.value)}
                />
              </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit' onClick={() => addEvent()}>
                  Add Event
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </form>
        <Box
        mt={'30px'}
        >
        <Flex>
        <Select placeholder='City' variant='filled' shadow='2xl' w={220} backgroundColor={'white'} mr={'20px'}>
          <option value='option1'>Jakarta</option>
          <option value='option2'>Bogor</option>
          <option value='option3'>Depok</option>
          <option value='option3'>Tanggerang</option>
          <option value='option3'>Bekasi</option>
          <option value='option3'>Bandung</option>
          <option value='option3'>Yogyakarta</option>
        </Select>
        <Select placeholder='Category' variant='filled' shadow='2xl' w={220} backgroundColor={'white'} mr={'20px'}>
          <option value='option1'>Jakarta</option>
          <option value='option2'>Bogor</option>
          <option value='option3'>Depok</option>
          <option value='option3'>Tanggerang</option>
          <option value='option3'>Bekasi</option>
          <option value='option3'>Bandung</option>
          <option value='option3'>Yogyakarta</option>
        </Select>
        <Select placeholder='Status' variant='filled' shadow='2xl' w={220} backgroundColor={'white'} mr={'20px'}>
          <option value='option1'>Jakarta</option>
          <option value='option2'>Bogor</option>
          <option value='option3'>Depok</option>
          <option value='option3'>Tanggerang</option>
          <option value='option3'>Bekasi</option>
          <option value='option3'>Bandung</option>
          <option value='option3'>Yogyakarta</option>
        </Select>
        </Flex>
        {
          getEvents && loading === false ?
            getEvents.map(data => (
              <CardEvent
              key = {data.id}
              address = {data.address}
              category = {data.category_name}
              city = {data.city}
              selesai = {data.end_date}
              gambar = {data.image_event}
              total = {data.maximum_people}
              name = {data.name}
              mulai = {data.start_date}
              status= {data.status}
              user = {data.total_participant}
              diKlik = {() => {
                navigate('/detailevent', {
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
        </Box>
          </div>
          <div className="full-width">
            <Box mt={'6%'} ml={'20%'} w={'100%'} position="sticky" top={"0"}>
            <Button backgroundColor={"white"} shadow={'xl'} w={'70%'} mb={"8%"} px={"5%"} onClick={() => navigate('/clublist')} color="brand.700" rounded="full">Find your own club now </Button>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='filled'
                w={'80%'}
                backgroundColor={'white'}
                mb={"5%"}
              >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src='https://www.servethehome.com/wp-content/uploads/2016/12/AMD-Ryzen-Logo.png'
                alt='Caffe Latte'
              />
                <Stack>
                  <CardBody pb={'0'}>
                    <Heading size='md'>Team Ryzen</Heading>

                    <Text py='1'>
                     Member: 11/20
                    </Text>
                    <Text pb='1'>
                     Football
                    </Text>
                    <Text pb='1'>
                     Jakarta Selatan
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          </div>
        </Flex>
      </Box>
    </div>
    </Layout>
  )
    


};

export default Home;
