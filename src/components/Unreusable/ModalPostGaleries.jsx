import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonAddPhoto } from "../Baru/ButtonBack";
import UploadFiles from "../Baru/UploadFiles";

const PostGaleries = ({ post, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [file, setFiles] = useState(null);
  const [caption, setCaption] = useState(" ");
  const [prev, setPrev] = useState();

  return (
    <>
      <ButtonAddPhoto onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Choose your Photo</FormLabel>
              <UploadFiles
                prev={prev}
                prevSize={"2xl"}
                onChange={({ target: { files } }) => {
                  files[0] && setPrev(files[0].name);
                  if (files) {
                    setPrev(URL.createObjectURL(files[0]));
                    setFiles(files[0]);
                  }
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Caption</FormLabel>
              <Textarea
                placeholder="Ikuzport is the best"
                onChange={(e) => setCaption(e.target.value)}
              />
            </FormControl>
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

export default PostGaleries;
