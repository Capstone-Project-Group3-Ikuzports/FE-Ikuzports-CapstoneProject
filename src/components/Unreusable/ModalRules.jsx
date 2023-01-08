import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import { AiTwotoneContainer } from "react-icons/ai";

const ModalRules = ({ body }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AiTwotoneContainer size={40} cursor={"pointer"} onClick={onOpen} />
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rules</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRules;
