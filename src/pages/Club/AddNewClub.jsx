import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { ButtonBack, ButtonClear, ButtonCreate } from "../../components/Button"
import UploadFiles from "../../components/UploadFiles";
import Layout from "../../components/Layout";

const AddNewClub = () => {
  const [prev, setPrev] = useState();
  const [files, setFiles] = useState();
  return (
    <Layout>

      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        <Flex>
          <Box w={"25vw"}>
            <Text fontSize={"4xl"} textAlign={"start"}>
              Create Club
            </Text>
            <hr className="hr-add-club" />
          </Box>
          <Box w={"40vw"}>
            <Center>
              <FormControl px={5}>
                <FormLabel color={"brand.300"}>Club Name</FormLabel>
                <Input id="name" type="text" border={"2px"} />
                <FormLabel color={"brand.300"}>Logo Picture</FormLabel>
                <UploadFiles
                  prev={prev}
                  prevSize={"xl"}
                  onChange={({ target: { files } }) => {
                    files[0] && setFiles(files[0].name);
                    if (files) {
                      setPrev(URL.createObjectURL(files[0]));
                      setFiles(files[0]);
                    }
                  }}
                />
                <Flex>
                  <FormLabel color={"brand.300"} w={"50%"}>
                    Max Member
                  </FormLabel>
                  <FormLabel color={"brand.300"} pl={3} w={"50%"}>
                    Category
                  </FormLabel>
                </Flex>
                <Flex gap={5}>
                  <Input id="number" type="number" border={"2px"} w={"50%"} />
                  <Select w={"50%"} color={"brand.300"}>
                    <option value="option1">Futsal</option>
                    <option value="option2">Football</option>
                    <option value="option3">Badminton</option>
                    <option value="option3">Swimming</option>
                    <option value="option3">Archer</option>
                  </Select>
                </Flex>

                <FormLabel color={"brand.300"}>Address</FormLabel>
                <Textarea id="textarea" type="textarea" border={"2px"} />
                <FormLabel color={"brand.300"}>Desc</FormLabel>
                <Textarea id="textarea" type="textarea" border={"2px"} />
                <FormLabel color={"brand.300"}>Rules</FormLabel>
                <Textarea id="textarea" type="textarea" border={"2px"} />
                <FormLabel color={"brand.300"}>Requirement</FormLabel>
                <Textarea id="textarea" type="textarea" border={"2px"} />
              </FormControl>
            </Center>
          </Box>
        </Flex>
        <Flex w={"65vw"} alignItems={"center"} pt={2}>
          <Spacer />
          <ButtonGroup spacing={4} px={5}>
            <ButtonClear />
            <ButtonCreate
              onClick={() => {
                Swal.fire(`${""}`, "Ikuzport Succes Created", "success");
              }}
            />
          </ButtonGroup>
        </Flex>
      </Box>

    </Layout>
  );
};

export default AddNewClub;
