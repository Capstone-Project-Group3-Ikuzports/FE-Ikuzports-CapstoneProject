import React from "react";
import Navbar from "../../components/Navbar";
import CardGallery from "../../components/ClubJoin/CardGallery";
import { Box, Flex, Stack, StackDivider, Text, Image, Card, CardHeader, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { useDisclosure } from "@chakra-ui/react";



const ClubNonJoin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="no-scroll-store">

    </div>
  )
};

export default ClubNonJoin;
