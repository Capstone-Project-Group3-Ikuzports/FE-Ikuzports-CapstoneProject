import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image, CardFooter, CardHeader, Button, Divider, Flex, Spacer} from '@chakra-ui/react'

const CardEvent = () => {

  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={1132}
        h={394}
        mx={200}
        my={200}
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '580px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
            p={10}
        />

        <Stack p={5}>
            <CardBody h={600}>
            <Heading size='xl'>Sparring Team Antar Negara</Heading>
            <Divider my={5} color="blackAlpha.100" />

            <Flex>
                <Text as='b' fontSize='xl' py='1'>
                    2022 / 12 / 21
                </Text>
                <Spacer></Spacer>
                <Text as='b' fontSize='xl' py='1' mb='3'>
                    2022 / 12 / 21
                </Text>
            </Flex>
            <Text as='b'  fontSize='xl' py='2'>
                Slot : 11/21
            </Text>
            <br/>
            <Text as='b'  fontSize='xl' py='2'>
                Location : Jalan Sama Doi
            </Text>
            <br/>
            <Text as='b'  fontSize='xl' py='2'>
                Tanggerang Selatan
            </Text>
            <br/>
            <Text as='b'  fontSize='xl' py='2'>
                Basketball
            </Text>
            </CardBody>

            <CardFooter justify='end'>
            <Button variant='solid' colorScheme='blue' px={10} justifyContent='end'>
                Join
            </Button>
            </CardFooter>
        </Stack>
        </Card>
    </div>
  )
}

export default CardEvent