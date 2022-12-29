import React from "react";
import Navbar from "../../components/Navbar";
import CardGallery from "../../components/ClubJoin/CardGallery";
import { Box, Flex, Stack, StackDivider, Text, Image, Card, CardHeader, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { useDisclosure } from "@chakra-ui/react";

const DetailClub = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="no-scroll-store">
    <Navbar/>
    <Box p='8' px={'10%'} w={'100vw'} backgroundColor={'brand.100'} overflowX='hidden'>
    <Flex onClick={() => navigate("/")} _hover={{cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={41}/> 
        <Text fontSize={'2xl'} as='b' ml='10px'>Back</Text>
    </Flex>
      <Flex mb={20}>
        <Box w={'70%'}>
          <Flex>
            <Image
          src="https://www.logo.wine/a/logo/Ryzen/Ryzen-AMD-White-Dark-Background-Logo.wine.svg"
          objectFit='cover'
          maxW={{ base: '100%', sm: '500px' }}
          mt={10}
          rounded='xl'
          />
          <Box mt={10} ml={20}>
          <Text fontSize={'7xl'}>Team Ryzen</Text>
          <Text fontSize={'3xl'} mt={5} ml={2}>Member : 11/20</Text>
          <Text fontSize={'3xl'} mt={5} ml={2}>Category : Basketball</Text>
          <Text fontSize={'3xl'} mt={5} ml={2}>Tanggerang Selatan, Ciputat</Text>
          </Box>
          </Flex>
          <Text fontSize={'3xl'} mt={'20'}>Club Description :</Text>
          <Text fontSize={'xl'} mt={'2'} w={'60%'}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
        </Box>
        <Box ml='auto'>
        <Card w={'20vw'} h={'100vh'} bg='white' mt={10}>
          <CardHeader>
            <Text fontSize={'4xl'}>Rules</Text>
          </CardHeader>
          <Stack divider={<StackDivider />} spacing='4' w={'90%'} mx='auto'>
            <Box ml={6}>
              <Text pt='2' as='b' fontSize='sm'>
                First Rule Of Fight Club Is Do Not Talk About Fight Club
              </Text>
            </Box>
            <Box ml={6}>
              <Text pt='2' as='b' fontSize='sm'>
                First Rule Of Fight Club Is Do Not Talk About Fight Club
              </Text>
            </Box>
            <Box ml={6}>
              <Text pt='2' as='b' fontSize='sm'>
                First Rule Of Fight Club Is Do Not Talk About Fight Club
              </Text>
            </Box>
            <Box ml={6}>
              <Text pt='2' as='b' fontSize='sm'>
                First Rule Of Fight Club Is Do Not Talk About Fight Club
              </Text>
            </Box>
            <Box ml={6}>
              <Text pt='2' as='b' fontSize='sm'>
                First Rule Of Fight Club Is Do Not Talk About Fight Club
              </Text>
            </Box>
          </Stack>
        </Card>
        </Box>
      </Flex>
      <CardGallery/>
      <Box ml='auto' justif='end' w={'131px'}>
        <Button bg='brand.300' onClick={onOpen} color={'white'} px={'50px'} mt={10}>Join</Button>
        <Modal isOpen={isOpen} onClose={onClose} h={'100px'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mx='auto'>Requirement</ModalHeader>
            <ModalCloseButton />
            <ModalBody h={'100px'} overflowY='scroll'>
              <Text h={'300px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
            </ModalBody>

            <ModalFooter>
              <Button bg='red' color='white' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button bg='black' color='white'>Accept</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
    </div>
  )
};

export default DetailClub;
