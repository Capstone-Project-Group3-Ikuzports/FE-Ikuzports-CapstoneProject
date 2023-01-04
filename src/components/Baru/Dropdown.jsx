import React, { Children } from 'react'
import { FormLabel, Select } from '@chakra-ui/react'

const Dropdown = ({placeHolderProps, targetValue, children}) => {
  return (
    <div>
          <Select
          placeholder={placeHolderProps}
          onChange={(e) => {targetValue}}
          >
          {children}
          </Select>
    </div>
  )
}

export default Dropdown