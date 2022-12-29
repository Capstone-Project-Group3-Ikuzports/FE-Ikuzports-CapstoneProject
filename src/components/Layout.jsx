
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}) => {
    return (
          <Box
          backgroundImage="url('./src/assets/logo-background.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundColor={'brand.100'} overflowX='hidden'
          pos='absolute'
          h={'100vh'}
          >
                <Navbar/>
              {children}
              </Box>
    )
  }

export default Layout