import React from 'react'
import {Box, Image, Spinner, Center} from '@chakra-ui/react'

const Loading = () => {
  return (
    <div className='hehe'>
        <Box h='70vh' bgImage="url(./assets/logo-background.png.)" backgroundPosition="center"
        backgroundRepeat="no-repeat">
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