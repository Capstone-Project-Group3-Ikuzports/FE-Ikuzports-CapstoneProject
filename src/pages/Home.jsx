import React from "react";
import CardEvent from '../components/Home/CardEvent'
import Navbar from '../components/Navbar'
import { Box, Stack, Text, Flex, Image, Button, Select, FormControl, FormLabel, FormErrorMessage, FormHelperText, Card,  CardBody, Input, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from '@chakra-ui/react'
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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

    useEffect(() => {
      getEvent()
    }, [])
  return(
    <div className="no-scroll-home">
      <Navbar/>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} backgroundColor={'brand.100'} bgImage='./src/assets/logo-background.png' bgRepeat={'no-repeat'} bgPosition='center' mx='auto' justifyContent={'center'} overflowX='hidden'>
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

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl isInvalid={isError}>
            <FormLabel>Event Title</FormLabel>
            <Input type='text' onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                What your Event Name ?
              </FormHelperText>
            ) : (
              <FormErrorMessage>Event Title is required.</FormErrorMessage>
            )}
            <FormLabel>Event Location</FormLabel>
            <Input type='text' onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Tell us where your event gonna take place
              </FormHelperText>
            ) : (
              <FormErrorMessage>Event Location is required.</FormErrorMessage>
            )}
            <FormLabel>Event Location</FormLabel>
            <Input type='text' onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Tell us where your event gonna take place
              </FormHelperText>
            ) : (
              <FormErrorMessage>Event Location is required.</FormErrorMessage>
            )}
            <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            />
            <FormLabel>Amount</FormLabel>
              <NumberInput max={50} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            <FormLabel>Event Category</FormLabel>
            <Select placeholder='Event Category' variant='filled' shadow='2xl' backgroundColor={'white'}>
              <option value='option1'>Jakarta</option>
              <option value='option2'>Bogor</option>
              <option value='option3'>Depok</option>
              <option value='option3'>Tanggerang</option>
              <option value='option3'>Bekasi</option>
              <option value='option3'>Bandung</option>
              <option value='option3'>Yogyakarta</option>
            </Select>
            <FormLabel>City</FormLabel>
            <Select placeholder='City' variant='filled' shadow='2xl' backgroundColor={'white'}>
              <option value='option1'>Jakarta</option>
              <option value='option2'>Bogor</option>
              <option value='option3'>Depok</option>
              <option value='option3'>Tanggerang</option>
              <option value='option3'>Bekasi</option>
              <option value='option3'>Bandung</option>
              <option value='option3'>Yogyakarta</option>
            </Select>
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
            : <p>Hehe</p>
        }
        </Box>
          </div>
          <div className="full-width">
            <Box mt={'6%'} ml={'20%'} w={'100%'} position="sticky" top={"0"}>
            <Button backgroundColor={"white"} shadow={'xl'} w={'70%'} mb={"8%"} px={"5%"} color="brand.700" rounded="full">Find your own club now </Button>
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
  )
    


};

export default Home;
