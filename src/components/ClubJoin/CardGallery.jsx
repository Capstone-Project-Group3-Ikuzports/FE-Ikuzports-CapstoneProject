import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Image,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

const CardGallery = ({ image }) => {
  return <Image src={image} w={"xl"} h={"xs"} objectFit="cover" />;
};

export default CardGallery;
