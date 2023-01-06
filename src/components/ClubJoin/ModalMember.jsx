import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ModalMember = ({ joinedmember, totalmember, memberRaw, key }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [condition1, setCondition1] = useState("Member");
  const [condition2, setCondition2] = useState("Owner");

  return (
    <>
      <Text
        as={"a"}
        fontSize={"1.2em"}
        color={"brand.500"}
        _hover={{ color: "primary.500" }}
        cursor={"pointer"}
        onClick={() => {
          onOpen();
        }}
      >
        {`Member : ${joinedmember} / ${totalmember} `}
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent key={memberRaw.id}>
          <Flex boxShadow={"2xl"} dropShadow={"md"}>
            <Button
              rounded={"none"}
              border={"1px"}
              w={"50%"}
              fontWeight={"light"}
              borderColor={"blackAlpha.300"}
              onClick={() => {
                setCondition1("Member"), setCondition2("Owner");
              }}
            >{`Member ${joinedmember}/${totalmember}`}</Button>
            <Button
              w={"50%"}
              fontWeight={"light"}
              border={"1px"}
              rounded={"none"}
              borderColor={"blackAlpha.300"}
              onClick={() => {
                setCondition1("Requested"), setCondition2("null");
              }}
            >
              Pending Member
            </Button>
          </Flex>
          <ModalBody pb={2}>
            {memberRaw
              ? memberRaw.map((data) => {
                  if (
                    data.status === condition1 ||
                    data.status === condition2
                  ) {
                    return (
                      <Card m={2} p={2} key={data.id}>
                        <Flex spacing="4">
                          <Flex
                            flex="1"
                            gap="4"
                            alignItems="center"
                            flexWrap="wrap"
                          >
                            <Avatar
                              name={data.name}
                              bgColor={"telegram.600"}
                              color={"whatsapp.100"}
                            />

                            <Box>
                              <Heading size="sm">{data.name}</Heading>
                              <Text>{data.phone_number}</Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Card>
                    );
                  } else {
                    ("");
                  }
                })
              : ""}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalMember;
