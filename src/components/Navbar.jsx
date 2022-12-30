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
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearUser } from "../redux/reducer/reducer.js";

const Navbar = () => {
  const [data, setData] = useState();
  const user = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //=== CONFIG GET USER ===//
  const URLgetUser = `https://rubahmerah.site/users/${user.id}`;
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  //=== API GET DATA USER ===//
  const getUser = async () => {
    await axios.get(URLgetUser, config).then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  const logout = useCallback(() => {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(clearUser());
        navigate("/login");
      }
    });
  }, []);

  return (
    <Box w={"100vw"} bg="brand.200" px={4} pos="sticky" top={0} zIndex={1}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image
            src={"./src/assets/logo-text-yellow.png"}
            alt={"logo"}
            h={"20"}
            onClick={() => navigate("/")}
            _hover={{cursor: 'pointer'}}
          />
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={4} color={"primary.100"}>
            <Box _hover={{cursor: 'pointer'}} pt={3}>
              <AiOutlineShoppingCart
                size={35}
                onClick={() => navigate("/store")}
                _hover={{cursor: 'pointer'}}
              />
            </Box>
            <Box _hover={{cursor: 'pointer'}} pt={3}>
              <FiUsers
                size={30}
                onClick={() => navigate("/clublist")}
                _hover={{cursor: 'pointer'}}
              ></FiUsers>
            </Box>
            <Menu px={1}>
              <Text color={"primary.100"} pt={"4"} fontSize="md">
                {user ? data?.name : ""}
              </Text>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar size={"md"} src={data?.user_image} />
              </MenuButton>
              <Box>
                <MenuList alignItems={"center"} textColor={"primary.200"}>
                  <MenuDivider />
                  <MenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/myclub")}>
                    My Club
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/myproduct")}>
                    My Product
                  </MenuItem>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
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
