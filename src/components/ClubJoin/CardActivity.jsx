import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Center } from '@chakra-ui/react'

const CardActivity = () => {
  return (
    <div>
        <Card mt="300px" ml="300px" w={"50%"} variant={"filled"} bg="white" shadow="xl">
            <CardBody>
                <Text fontSize={"2xl"} py="1" textAlign="center">Sparing antar Benua.</Text>
                <Text fontSize={"xl"} py="1" >Waktu: 11.00 - Titik Darah Penghabisan</Text>
                <Text fontSize={"xl"} py="1" >Location : Bintaro FC, Deket mall BXC</Text>
                <Text fontSize={"xl"} py="1" >Sparring futsal VS Team AMD, 10 orang di GOR padjajaran, regist lapangan 50k per orang, hub mas aqiz 0895-4321-1234</Text>
            </CardBody>
        </Card>
    </div>
  )
}

export default CardActivity