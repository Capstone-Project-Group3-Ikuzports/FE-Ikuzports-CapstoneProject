import React from 'react'
import { Card, Flex, CardBody, Button, Text, Image, Stack, Divider, Heading, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import {BsFillTrashFill} from 'react-icons/bs'
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const CardMyProduct = ({name,desc,price,image,id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const currentUser = useSelector((state) => state.users.currentUser)
    const token = currentUser.token
  
    const config = {
      headers: {Authorization : `Bearer ${token}`}
    }
   
const del=()=>{
    axios
    .delete(`https://rubahmerah.site/products/${id}`,config)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)) 
}

    return (
    <div>
        <div> 
        <Card maxW='sm' bg='white' _hover={{cursor: 'pointer'}}>
        <CardBody>
            <Image
            src={image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            mx='auto'
            />
            <Stack mt='3' spacing='3'>
            <Flex>
                <Heading size='md'>{name}</Heading>
                <Spacer></Spacer>
                <BsFillTrashFill onClick={onOpen} size={25}color={'red'}/>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody mx='auto'>
                    Are You Sure ?
                </ModalBody>

                <ModalFooter>
                    <Button bg='white' variant={'outline'} px={10}  mr={3} onClick={del}>
                    Yes
                    </Button>
                    <Button bg='white' variant={'outline'} px={10}  onClick={onClose}>No</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            <Text>
                {desc}
            </Text>
            <Text color='blue.600' as='b' fontSize='2xl'>
                {price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        </Card>
    </div>
    </div>
  )
}

export default CardMyProduct