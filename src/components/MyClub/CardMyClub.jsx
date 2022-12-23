import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Text, Image, Flex, Spacer } from '@chakra-ui/react'
import {AiFillFrown} from 'react-icons/ai'

const CardMyClub = () => {
  return (
    <div>
         <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={843}
        h={267}
        mx={100}
        my={100}
        boxShadow="xl"
        rounded='xl'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '251px' }}
            w={800}
            src='https://www.logo.wine/a/logo/Ryzen/Ryzen-RYZEN-White-Dark-Background-Logo.wine.svg'
            alt='Logo'
        />

        <Stack h={200}>
            <CardBody pb='0' h={200}>
            <Flex gap='120'>
                <Heading size='xl' w={180}>Team Intel</Heading>
                <Spacer></Spacer>
                <Button variant='solid' colorScheme='green' px="10">
                Joined
                </Button>
            </Flex>
            

            <Text py='2'>
                Member : 11/30
            </Text>
            <Text pb='2'>
                Category BasketBall
            </Text>
            <Text pb='2'>
                Location : Tanggerang Timur
            </Text>
            <Text pb='2'>
                STATUS : OWNER
            </Text>
            </CardBody>
            <CardFooter pt='0' mt='-5' justify='end'>
                <button>
                <AiFillFrown color='red' size={50}/>
                </button>
            </CardFooter>

        </Stack>
        </Card>
    </div>
  )
}

export default CardMyClub