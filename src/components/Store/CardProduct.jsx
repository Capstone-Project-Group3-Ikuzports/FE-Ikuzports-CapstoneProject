import React from 'react'
import { Card, Flex, CardBody, CardFooter, Text, Image, Stack, Divider, Heading, Spacer } from '@chakra-ui/react'
import {BsFillTrashFill} from 'react-icons/bs'

const CardProduct = ({image,nama,harga,bilaClick}) => {
  return (
    <div>
        <Card maxW='sm' bg='white' _hover={{cursor: 'pointer'}} onClick={bilaClick}>
        <CardBody >
            <Image
            src={image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            mx='auto'
            />
            <Stack mt='3' spacing='3'>
            <Flex mb={10}>
                <Heading size='md' >{nama}</Heading>
                <Spacer></Spacer>
            </Flex>
            <Text color='blue.600' as='b' fontSize='2xl'>
               {harga}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        </Card>
    </div>
  )
}

export default CardProduct