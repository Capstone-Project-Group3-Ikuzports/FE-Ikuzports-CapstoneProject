import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Center,
} from "@chakra-ui/react";

const CardActivity = () => {
  return (
    <>
      <Card variant={"filled"} bg="white" shadow="xl">
        <CardBody>
          <Text fontSize={"1.4rem"} textAlign="center">
            Sparing antar Benua.
          </Text>
          <Text fontSize={"1rem"}>Waktu: 11.00 - Titik Darah Penghabisan</Text>
          <Text fontSize={"1rem"}>Location : Bintaro FC, Deket mall BXC</Text>
          <Text fontSize={"1rem"}>
            Sparring futsal VS Team AMD, 10 orang di GOR padjajaran, regist
            lapangan 50k/ orang, hub mas didik 0895-4321-1234
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default CardActivity;
