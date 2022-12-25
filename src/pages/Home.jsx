import React from "react";
import CardEvent from '../components/Home/CardEvent'
import Navbar from '../components/Navbar'
import { Box, Stack, Text, Flex, Image, Button, Select } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Input } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { FiUser } from "react-icons/fi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ' '
  return(
    <div>
      <Navbar/>
      <Box p='8' w={'100vw'} h={'100vh'} backgroundColor={'brand.100'} overflowX='hidden'>
        <Flex>
          <div>
          <Text as="b" fontSize={'2xl'}>Home</Text>
        <Card onClick={onOpen} w={'100'} h={'170px'} mt={'15px'} shadow='xl' rounded='xl' backgroundColor={'white'}>
          <CardBody w={'100%'}>
            <Flex h={'70%'}>
              <Box my='auto'>
              <FiUser
              size={60}
              />
              </Box>
              <Text px={'5'} my='auto' fontSize={'2xl'} ml={'50px'} w={'80%'} p={3} _hover={{cursor: "pointer", backgroundColor: "gray.100",}} rounded='full' color='gray.500'>Start Posting Now</Text>
            </Flex>
            <Button justify='end' justifyContent='end' px='10' backgroundColor={'brand.300'} _hover={{bg: '#2E5984'}} color={'white'} ml={'82%'}>Post</Button>
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
            <Input type='text' value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                What your Event Name ?
              </FormHelperText>
            ) : (
              <FormErrorMessage>Event Title is required.</FormErrorMessage>
            )}
            <FormLabel>Event Location</FormLabel>
            <Input type='text' value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Tell us where your event gonna take place
              </FormHelperText>
            ) : (
              <FormErrorMessage>Event Location is required.</FormErrorMessage>
            )}
            <FormLabel>Event Location</FormLabel>
            <Input type='text' value={input} onChange={handleInputChange} />
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
        </Box>
          </div>
        </Flex>
        
      </Box>
    </div>
  )
    

};

export default Home;
