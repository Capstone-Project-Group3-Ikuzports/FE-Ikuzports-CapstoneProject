import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import logoBck from '../../assets/logo-background.png'

const Layout = ({ children, image, name }) => {
	return (
		<Box
			backgroundImage={logoBck}
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundColor={"brand.100"}
			overflowX="hidden"
			pos="absolute"
			h={"100vh"}
		>
			<Navbar image={image} name={name} />
			{children}
		</Box>
	);
};

export default Layout;
