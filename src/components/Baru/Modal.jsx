import React from 'react'
import { useDisclosure } from '@chakra-ui/react'

const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
            <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay/>
              <ModalContent backgroundColor={'brand.100'}>
                <ModalHeader>Add A Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormLabel>Product Name</FormLabel>
                  <Input bg='white' placeholder='Product Name' onChange={(e) => setName(e.target.value) }/>
                  <FormLabel mt={5}>Description</FormLabel>
                  <Textarea placeholder='Description' bg='white' onChange={(e) => setDesc(e.target.value) }></Textarea>
                  <FormLabel mt={5}>Price</FormLabel>
                  <InputGroup bg='white'>
                    <InputLeftAddon bg='white' children='Rp' />
                    <Input type='number' placeholder='Price' onChange={(e) => setPrice(e.target.value) }/>
                  </InputGroup>
                  <FormLabel mt={5} >Upload Image</FormLabel>
                  <InputGroup bg='white'>
                    <Input type='tel' placeholder='Image' onChange={(e) => setImage(e.target.value)}/>
                  </InputGroup>

           <Select onChange={(e) => setCategory(e.target.value)} mt={'5'}  w={'400px'}  bg='white' mr='30px' variant='filled' boxShadow={'xl'} placeholder='Category Item'>
                  <option value= '1'>Sepatu</option>
                  <option value= '2'>Jersey</option>
                  <option value= '3'>Bola</option>
                  <option value= '4'>Raket</option>
                  <option value= '5'>Celana</option>
                  <option value= '6'>Equipment</option>
                  <option value= '7'>Aksesoris</option>
           </Select>

           <Select onChange={(e) => setCity(e.target.value)} mt={'5'} placeholder='City' w={'400px'}  bg='white' mr='30px' variant='filled' boxShadow={'xl'}>
           <option value='Jakarta'>Jakarta</option>
           <option value='Bogor'>Bogor</option>
           <option value='Depok'>Depok</option>
           <option value='Tanggerang'>Tanggerang</option>
           <option value='Bekasi'>Bekasi</option>
           <option value='Bandung'>Bandung</option>
           <option value='Semarang'>Semarang</option>
           <option value='Malang'>Malang</option>
           <option value='Surabaya'>Surabaya</option>
           <option value='Jogjakarta'>Jogjakarta</option>
           </Select>
                  
                  </ModalBody>
                <ModalFooter>
                  <Button bg='black' color='white' px={10} mr={3} onClick={modalPost}>
                    Yes
                  </Button>
                  <Button onClick={onClose} backgroundColor='red' color={'white'} px={7}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </div>
  )
}

export default Modal