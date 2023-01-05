import React, { Children } from 'react'
import { FormLabel, Select } from '@chakra-ui/react'

const Dropdown = ({placeHolderProps, targetValue, children,filterCates}) => {
  return (
    <div>
          <Select
          placeholder={placeHolderProps}
          onChange={targetValue}
          bg='white' mr='30px' variant='filled' boxShadow={'xl'}
          w={'200px'} value={filterCates}
          >
          {children}
          </Select>
    </div>
  )
}

export default Dropdown