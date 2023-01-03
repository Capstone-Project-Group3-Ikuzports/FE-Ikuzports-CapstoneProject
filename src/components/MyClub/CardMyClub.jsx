import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  Image,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiFillFrown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";

const CardMyClub = ({
  category,
  city,
  name,
  total,
  logo,
  join,
  status,
  onClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w={"100%"}
        h={267}
        boxShadow="xl"
        rounded="xl"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "251px" }}
          w={"30%"}
          src={logo}
          alt="Logo"
          onClick={onClick}
          cursor={"pointer"}
        />

        <Stack h={200} w={"100%"}>
          <CardBody pb="0" h={200}>
            <Flex>
              <Heading size="xl" w={"100%"}>
                {name}
              </Heading>
              <Box pl="30%">
                <Text bg={"brand.200"} color='white' w={100} mx='auto' textAlign={'center'} rounded='lg' p={3} as='b'>{status}</Text>
              </Box>
            </Flex>

            <Text py="2">
              Member : {join} / {total}
            </Text>
            <Text pb="2">Category {category}</Text>
            <Text pb="2">Location : {city}</Text>
            <Text pb="2">STATUS : {status}</Text>
          </CardBody>
          <CardFooter pt="0" mt="-5" justify="end">
            <button>
              <AiFillFrown color="red" onClick={onOpen} size={50} />
            </button>
          </CardFooter>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader mx={"auto"}>
                <BsFillTrashFill size={50} color={"red"} />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>This button will DELETE your club/resigning member!</Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  px={"10"}
                  backgroundColor="white"
                  color={"black"}
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Yes
                </Button>
                <Button
                  backgroundColor="white"
                  color={"black"}
                  variant="outline"
                  px={"10"}
                >
                  No
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Card>
    </div>
  );
};

export default CardMyClub;
