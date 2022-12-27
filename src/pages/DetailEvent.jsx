import React from 'react'
import Navbar from '../components/Navbar'
import { Text, Flex, Box, Stack } from '@chakra-ui/layout'
import { Button, ButtonGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {SlCalender} from 'react-icons/sl'
import {SiGooglemaps} from 'react-icons/si'
import {FcApproval} from 'react-icons/fc'
import { useNavigate } from 'react-router'
import { useDisclosure } from '@chakra-ui/react'


const DetailEvent = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='no-scroll-event'>
      <Navbar/>
      <Box p='8' px={'10%'} w={'100vw'} h={'100%'} backgroundColor={'brand.100'} overflowX='hidden'>
      <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
      </Flex>
      <Image
      src='https://images8.alphacoders.com/494/494708.jpg'
      objectFit={'cover'}
      h={'700px'}
      w={'100%'}
      backgroundRepeat='no-repeat'
      my={'20px'}
      />
      <Text fontSize={"6xl"}>AnimeToku</Text>
      <Flex>
        <CgProfile size={50}/>
        <Text ml={'30px'} fontSize={'3xl'}>Ethansss</Text>
      </Flex>
      <Text mt={'30px'} fontSize={'xl'} w={'1300px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
      <Flex mt={'30px'}>
        <SlCalender size={50}/>
        <Text ml={'30px'} fontSize={'3xl'}>2022 / 12 / 27</Text>
      </Flex>
      <Flex mt={'30px'}>
        <SiGooglemaps size={50}/>
        <Text ml={'30px'} fontSize={'3xl'}>Jakarta Selatan</Text>
      </Flex>
      <Flex mt={'30px'}>
        <CgProfile size={50}/>
        <Text ml={'30px'} fontSize={'3xl'}>24 / 100</Text>
      </Flex>
      <Stack w={'200px'}  ml="auto" >
        <Button backgroundColor="brand.300" onClick={onOpen} color={'white'} px={20} py={5}>Join</Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx='auto'><FcApproval size={150}/></ModalHeader>
          <ModalCloseButton />
          <ModalBody mx='auto'>
            Join Succes
          </ModalBody>

          <ModalFooter mx='auto'>
            <Button colorScheme='blue' px={10}  onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>

    </div>
  )
}

export default DetailEvent

