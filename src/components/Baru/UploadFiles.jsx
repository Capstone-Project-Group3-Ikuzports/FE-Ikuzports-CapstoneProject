import { Avatar, Box, Center, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { MdUpload } from "react-icons/md";

const UploadFiles = ({ onChange, prev, prevSize }) => {
  return (
    <Box display={"flex"} bgColor={"#FFFFFF"}>
      <Box w={"full"}>
        <form
          action=""
          className="uploadFile"
          onClick={() => document.querySelector(".input-file").click()}
        >
          <input
            type="file"
            className="input-file"
            hidden
            accept="image/*"
            onChange={onChange}
          />
          <Center alignItems={"center"} flexDir={"column"}>
            <Text fontSize={"sm"} m={"auto"} color={"gray.400"}>
              Upload image here
            </Text>
            <Box my={"auto"}>
              <MdUpload size={80} color={"#eaeaea"} />
            </Box>
          </Center>
        </form>
      </Box>
      <Box w={52} border={"2px"} color={"#E2E8F0"}>
        <Center alignItems={"center"} flexDirection={"column"} gap={1} p={2}>
          <Text fontSize={"xs"} color={"gray.400"}>
            Preview image
          </Text>
          {prev ? (
            <Avatar size={prevSize} src={prev} />
          ) : (
            <Avatar size={prevSize} />
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default UploadFiles;
