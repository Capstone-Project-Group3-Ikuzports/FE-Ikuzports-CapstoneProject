import React from 'react'
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import {AiOutlineSearch} from "react-icons/ai"

const Search = () => {
  return (
    <div>
        <InputGroup w={'200px'} boxShadow={'xl'} varian='filled'>
              <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
              />
              <Input type='tel' bg='white' placeholder='Phone number' />
            </InputGroup>
    </div>
  )
}

export default Search