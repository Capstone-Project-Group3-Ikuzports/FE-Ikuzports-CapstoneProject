import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image, CardFooter, Button, Flex} from '@chakra-ui/react'

const CardEvent = () => {

  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='filled'
        backgroundColor={'white'}
        mt={'50px'}
        shadow='xl'
        >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack w={"100%"}>
          <CardBody py='0'>
            <Heading size='md'>Sparring Team Antar Negara</Heading>
            <Flex>
              <Text py='2' mr={'70px'}>
              2022 / 12 / 21
              </Text>
              <Text py='2'>
              2022 / 12 / 21
              </Text>
            </Flex>
            <Text py='1' as='b'>Slot : 10/25</Text>
            <br/>
            <Text py='1' as='b'>Location : Gurun Sahara</Text>
            <br/>
            <Text py='1' as='b'>Tanggerang Selatan</Text>
            <br/>
            <Text py='1' as='b'>Basketball</Text>
          </CardBody>

          <CardFooter justify='end' ml={'auto'} justifyContent={'end'} py='0' pb='2'>
            <Button variant='solid'  colorScheme='blue'>
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}

export default CardEvent