import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonAddActivity } from "../Baru/ButtonBack";

const ModalPostActivity = ({ post, titleActivity }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndtime] = useState("");
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");

  const data = {
    title: title,
    startTime: startTime,
    endTime: endTime,
    day: day,
    location: location,
    detail: detail,
  };

  return (
    <>
      <ButtonAddActivity onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleActivity}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                border={"2px"}
                mb={2}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <Flex gap={5}>
              <FormControl>
                <FormLabel>Start Activity</FormLabel>
                <Input
                  placeholder=""
                  border={"2px"}
                  mb={2}
                  onChange={(e) => setStartTime(e.target.value)}
                  type={"time"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Activity</FormLabel>
                <Input
                  placeholder=""
                  border={"2px"}
                  mb={2}
                  onChange={(e) => setEndtime(e.target.value)}
                  type={"time"}
                />
              </FormControl>
            </Flex>

            <Flex gap={4}>
              <FormControl>
                <FormLabel>Day</FormLabel>
                <Select
                  color={"brand.300"}
                  bgColor={"#FFFFFF"}
                  onChange={(e) => setDay(e.currentTarget.value)}
                >
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  placeholder="Ikuzport Arena"
                  border={"2px"}
                  mb={2}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Detail Event</FormLabel>
              <Textarea
                placeholder="Discussion our strategi"
                onChange={(e) => setDetail(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                post(data), onClose();
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

export default ModalPostActivity;
