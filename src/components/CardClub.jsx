import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image} from '@chakra-ui/react'
import {AiFillFrown} from 'react-icons/ai'

const CardClub = () => {
  return (
    <div>
         <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={576}
        h={271}
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
             <Heading size='xl' w={180}>Team Intel</Heading>
            <Text py='2' fontSize='xl'>
                Member : 11/30
            </Text>
            <Text py='2' fontSize='xl'>
                 BasketBall
            </Text>
            <Text py='2' fontSize='xl'>
                Tanggerang Selatan
            </Text>
            </CardBody>
        </Stack>
        </Card>
    </div>
  )
}

export default CardClub