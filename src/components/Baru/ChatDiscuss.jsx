import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const ChatDiscuss = ({ User, Message, align, justify }) => {
  return (
    <Flex justify={justify}>
      <Box
        bgColor={"primary.100"}
        rounded={"lg"}
        w={"70%"}
        my={2}
        align={align}
      >
        <Box px={0} py={1} m={2}>
          <Text textColor={"brand.200"} fontWeight={"bold"}>
            {User}
          </Text>
          <Text>{Message}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ChatDiscuss;
