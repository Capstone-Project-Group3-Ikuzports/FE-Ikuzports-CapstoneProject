import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image, CardFooter, Button, Flex} from '@chakra-ui/react'

const CardEvent = ({data}) => {

  return (
    <div>
      {data.map(item => {
        return (
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
          src={item.image_event}
          alt='Caffe Latte'
        />

        <Stack w={"100%"}>
          <CardBody py='0'>
            <Heading size='md'>{item.name}</Heading>
            <Flex>
              <Text py='2' mr={'70px'}>
              {item.start_date}
              </Text>
              <Text py='2'>
              {item.end_date}
              </Text>
            </Flex>
            <Text py='1' as='b'>Slot : {item.total_participant}/{item.maximum_people}</Text>
            <br/>
            <Text py='1' as='b'>Location : {item.city}</Text>
            <br/>
            <Text py='1' as='b'>{item.address}</Text>
            <br/>
            <Text py='1' as='b'>{item.category_name}</Text>
          </CardBody>

          <CardFooter justify='end' ml={'auto'} justifyContent={'end'} py='0' pb='2'>
            {/* <Button variant='solid'  colorScheme='blue'>
              Buy Latte
            </Button> */}
          </CardFooter>
        </Stack>
      </Card>
        )
      })}
    </div>
  )
}

export default CardEvent