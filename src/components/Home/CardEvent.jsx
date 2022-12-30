import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image, CardFooter, Flex} from '@chakra-ui/react'

const CardEvent = ({address, category, city, selesai, gambar, total, name, mulai, status, user, diKlik}) => {

  return (
    <div onClick={diKlik}>

          <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='filled'
        backgroundColor={'white'}
        mt={'50px'}
        shadow='xl'
        _hover={{cursor: 'pointer'}}
        >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src={gambar}
          alt='Caffe Latte'
        />

        <Stack w={"100%"}>
          <CardBody py='0'>
            <Heading size='md'>{name}</Heading>
            <Flex>
              <Text py='2' mr={'70px'}>
              {mulai}
              </Text>
              <Text py='2'>
              {selesai}
              </Text>
            </Flex>
            <Text py='1' as='b'>Slot : {user}/{total}</Text>
            <br/>
            <Text py='1' as='b'>Location : {city}</Text>
            <br/>
            <Text py='1' as='b'>{address}</Text>
            <br/>
            <Text py='1' as='b'>{category}</Text>
          </CardBody>

          <CardFooter justify='end' ml={'auto'} justifyContent={'end'} py='0' pb='2'>
            {/* <Button variant='solid'  colorScheme='blue'>
              Buy Latte
            </Button> */}
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}

export default CardEvent