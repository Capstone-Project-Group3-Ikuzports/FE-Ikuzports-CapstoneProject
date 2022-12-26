import React from 'react'
import { Card, Flex, CardBody, CardFooter, Text, Image, Stack, Divider, Heading, Spacer } from '@chakra-ui/react'
import {BsFillTrashFill} from 'react-icons/bs'

const CardProduct = () => {
  return (
    <div>
        <Card maxW='sm' ml='100px' mt='100px' _hover={{cursor: 'pointer'}}>
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
                <BsFillTrashFill size={25}color={'red'}/>
            </Flex>
            <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
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