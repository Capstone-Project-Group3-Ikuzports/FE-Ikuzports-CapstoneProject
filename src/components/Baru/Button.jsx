import React from 'react'
import { Button } from '@chakra-ui/react'

const Button = ({textContent, openTrigger, textColor}) => {
  return (
    <div>
        <Button
            justify="end"
            onClick={openTrigger}
            justifyContent="end"
            px="10"
            backgroundColor={"brand.300"}
            _hover={{ bg: "brand.200" }}
            color={textColor}
            >
            {textContent}
        </Button>
    </div>
  )
}

export default Button