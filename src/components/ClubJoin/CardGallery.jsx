import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Image, Heading, Button, Flex } from '@chakra-ui/react'

const CardGallery = () => {
  return (
    <div>
        <Card bg='white' variant={'filled'} shadow='xl'>
            <CardBody>
            <SimpleGrid spacing={8} w={'100%'} h={"30%"} columns={{sm: 2, md: 4}}> 
                    <Image
                    src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685771908226.jpg'
                    width={'300px'}
                    height={'300px'}
                    objectFit='cover'
                    />
                    <Image
                    src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685771908226.jpg'
                    width={'300px'}
                    height={'300px'}
                    objectFit='cover'
                    />
                    <Image
                    src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685771908226.jpg'
                    width={'300px'}
                    height={'300px'}
                    objectFit='cover'
                    />
                    <Image
                    src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685771908226.jpg'
                    width={'300px'}
                    height={'300px'}
                    objectFit='cover'
                    />
                    <Image
                    src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/16/16685771908226.jpg'
                    width={'300px'}
                    height={'300px'}
                    objectFit='cover'
                    />
            </SimpleGrid>
            </CardBody>
        </Card>
   
    </div>
  )
}

export default CardGallery

