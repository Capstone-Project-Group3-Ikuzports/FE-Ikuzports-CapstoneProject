import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const ModalEditGaleries = ({ images, currentCaption }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} w={"full"} h="full" position={"absolute"}></Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <Flex>
            <ModalCloseButton />
          </Flex>
          <ModalBody pb={6}>
            <Center flexDirection={"column"}>
              <Image
                bgColor={"ButtonFace"}
                objectFit={"contain"}
                src={images}
                maxW={"sm"}
                minW={"sm"}
                maxH={"sm"}
                minH={"sm"}
              />

              <FormControl mt={4}>
                <FormLabel>Caption</FormLabel>
                <Input
                  defaultValue={currentCaption}
                  placeholder="Ikuzport is the best"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormControl>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                post({ file: file, caption: caption }), onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditGaleries;
