import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image} from '@chakra-ui/react'
import {AiFillFrown} from 'react-icons/ai'

const CardClub = ({diKlik, kota, category, totalMember, member, name, gambar}) => {
  return (
    <div>
         <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={'160%'}
        h={'110%'}
        boxShadow="xl"
        rounded='xl'
        bg='white'
        onClick={diKlik}
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '251px' }}
            w={800}
            src={gambar}
            alt='Logo'
        />

        <Stack h={200}>
            <CardBody pb='0' h={200}>
             <Heading size='xl' w={180}>{name}</Heading>
            <Text py='2' fontSize='xl'>
                Member : {member} / {totalMember}
            </Text>
            <Text py='2' fontSize='xl'>
                 {category}
            </Text>
            <Text py='2' fontSize='xl'>
                {kota}
            </Text>
            </CardBody>
        </Stack>
        </Card>
    </div>
  )
}

export default CardClub