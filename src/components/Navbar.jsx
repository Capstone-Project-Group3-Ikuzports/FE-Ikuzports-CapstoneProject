import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box w={"100vw"} bg="brand.200" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image
            src={"./src/assets/logo-text-yellow.png"}
            alt={"logo"}
            h={"20"}
            onClick={() => navigate("/")}
          />
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={4} color={"primary.100"}>
            <Box pt={3}>
              <AiOutlineShoppingCart
                size={35}
                onClick={() => navigate("store")}
              />
            </Box>
            <Box pt={3}>
              <FiUsers size={30} onClick={() => navigate("profile")}></FiUsers>
            </Box>
            <Menu px={1}>
              <Text color={"primary.100"} pt={"4"} fontSize="md">
                Username
              </Text>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"md"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <Box>
                <MenuList alignItems={"center"} textColor={"primary.200"}>
                  <MenuDivider />
                  <MenuItem onClick={() => navigate("profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("myclub")}>
                    My Club
                  </MenuItem>
                  <MenuItem onClick={() => navigate("myproduct")}>
                    My Product
                  </MenuItem>
                  <MenuItem onClick={() => navigate("login")}>Logout</MenuItem>
                </MenuList>
              </Box>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
