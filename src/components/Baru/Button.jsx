import React from 'react'
import { Button } from '@chakra-ui/react'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

const Buttons = ({textContent, openTrigger, textColor}) => {
  return (
    <div>
        <Button
            justify="end"
            onClick={openTrigger}
            justifyContent="end"
            px="10"
            backgroundColor={"brand.300"}
            _hover={{ bg: "brand.200" }}
            color={"white"}
            >
            {textContent}
        </Button>
    </div>
  )
}

export default Buttons