import React from 'react'
import {Box, Image, Spinner, Center} from '@chakra-ui/react'
import loading from "../../assets/logo-text-blue.png"

const Loading = () => {
  return (
    <div className='hehe'>
        <Box w='100vw' mx='auto'>
          <Image
          src={loading}
          mx='auto'
          />
        </Box>
        <Center w='100%'>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        justify='center'
        mx='auto'
        />
        </Center>
        


    </div>
  )
}

export default Loading