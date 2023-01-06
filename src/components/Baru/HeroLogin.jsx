import React from "react";

import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";

const HeroLogin = () => {
  return (
    <Box w={"65vw"} minH={"100vh"} bg={"brand.800"}>
      <Center>
        <Image src="../src/assets/logo-login.png" w={"50%"} mt={"5%"} />
      </Center>
      <Center mt={"-15vh"}>
        <HStack fontSize={"5xl"}>
          <Text color={"brand.400"}>Comunicate</Text>
          <Text color={"primary.100"}>With</Text>
          <Text color={"brand.300"}>Community</Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default HeroLogin;
