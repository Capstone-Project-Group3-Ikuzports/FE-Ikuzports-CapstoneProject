import React from 'react'
import { Card, Flex, CardBody, CardFooter, Text, Image, Stack, Divider, Heading, Spacer } from '@chakra-ui/react'
import {BsFillTrashFill} from 'react-icons/bs'

const CardProduct = () => {
  return (
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
            <Flex mb={10}>
                <Heading size='md'>SSD SAMSUNG 980 EVO 1TB</Heading>
                <Spacer></Spacer>
            </Flex>
            <Text color='blue.600' as='b' fontSize='2xl'>
                Rp 420.000
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        </Card>
    </div>
  )
}

export default CardProduct