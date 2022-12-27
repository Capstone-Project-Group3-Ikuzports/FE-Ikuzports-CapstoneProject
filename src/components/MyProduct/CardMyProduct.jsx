import React from 'react'
import { Card, Flex, CardBody, Button, Text, Image, Stack, FormLabel, Input, Textarea, InputGroup, InputLeftAddon, Divider, Heading, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import {BsFillTrashFill} from 'react-icons/bs'
import { useDisclosure } from '@chakra-ui/react';


const CardMyProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <div> 
        <Card maxW='sm' bg='white' _hover={{cursor: 'pointer'}}>
        <CardBody>
            <Image
            src='https://images.hothardware.com/contentimages/article/3079/content/small_samsung-980-angle.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            mx='auto'
            />
            <Stack mt='3' spacing='3'>
            <Flex>
                <Heading size='md'>SSD SAMSUNG 980 EVO 1TB</Heading>
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
                    <Button bg='white' variant={'outline'} px={10}  mr={3} onClick={onClose}>
                    Yes
                    </Button>
                    <Button bg='white' variant={'outline'} px={10} >No</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </Text>
            <Text color='blue.600' as='b' fontSize='2xl'>
                Rp 420.000
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