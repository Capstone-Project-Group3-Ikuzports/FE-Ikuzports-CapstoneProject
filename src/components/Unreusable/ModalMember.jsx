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
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const ModalMember = ({
  joinedmember,
  totalmember,
  memberRaw,
  removeMember,
  acceptMember,
  memberLength,
  requestedLength,
  status,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user_id = useSelector((state) => state.users.currentUser.id);

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
        onClick={
          status === "Owner"
            ? () => {
                onOpen();
              }
            : ""
        }
      >
        {`Member : ${memberLength} / ${totalmember} `}
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <Flex boxShadow={"2xl"} dropShadow={"md"}>
            <Button
              rounded={"none"}
              border={"1px"}
              w={"50%"}
              size={"lg"}
              fontWeight={"light"}
              borderColor={"blackAlpha.300"}
              onClick={() => {
                setCondition1("Member"), setCondition2("Owner");
              }}
            >{`Member ${memberLength}/${totalmember}`}</Button>
            <Button
              w={"50%"}
              size={"lg"}
              fontWeight={"light"}
              border={"1px"}
              rounded={"none"}
              borderColor={"blackAlpha.300"}
              onClick={() => {
                setCondition1("Requested"), setCondition2("null");
              }}
            >
              Pending Member ({requestedLength})
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
                              src={data.user_image}
                              name={data.name}
                              color={"whatsapp.100"}
                            />

                            <Box>
                              <Heading size="sm">{data.name}</Heading>
                              <Text>{data.phone_number}</Text>
                            </Box>
                            <Spacer />
                            {(user_id !== data.user_id) &
                            (data.status !== "Requested") ? (
                              <AiOutlineCloseCircle
                                color="#ff9191"
                                size={30}
                                cursor={"pointer"}
                                onClick={() => {
                                  removeMember({
                                    id: data.id,
                                    name: data.name,
                                    onOpen: onOpen,
                                  }),
                                    onClose();
                                }}
                              />
                            ) : (
                              <></>
                            )}
                            {(user_id !== data.user_id) &
                            (data.status === "Requested") ? (
                              <Flex gap={2}>
                                <AiOutlineCheckCircle
                                  size={30}
                                  cursor={"pointer"}
                                  color="#4dd35c"
                                  onClick={() => {
                                    acceptMember({
                                      id: data.id,
                                      user: data.user_id,
                                      club: data.club_id,
                                      name: data.name,
                                      onOpen: onOpen,
                                    }),
                                      onClose();
                                  }}
                                />
                                <AiOutlineCloseCircle
                                  color="#ff9191"
                                  size={30}
                                  cursor={"pointer"}
                                  onClick={() => {
                                    removeMember({
                                      id: data.id,
                                      name: data.name,
                                      onOpen: onOpen,
                                    }),
                                      onClose();
                                  }}
                                />
                              </Flex>
                            ) : (
                              <></>
                            )}
                          </Flex>
                        </Flex>
                      </Card>
                    );
                  } else {
                    <></>;
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
