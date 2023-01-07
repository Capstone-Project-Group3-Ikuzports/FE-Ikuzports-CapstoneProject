import React from "react";
import { Stack, Card, Image } from "@chakra-ui/react";

const CardEventClub = ({ children, linkGambar, onClick, keys }) => {
	return (
		<>
			<Card
				onClick={onClick}
				key={keys}
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="filled"
				backgroundColor={"white"}
				shadow="xl"
				_hover={{ cursor: "pointer" }}
				h={"280px"}
			>
				<Image
					boxSize={"10vw"}
					objectFit="cover"
					minW={"xs"}
					maxW={"xs"}
					src={linkGambar}
					alt="Picture"
					h={"full"}
				/>
				<Stack w={"100%"} h={"100%"}>
					{children}
				</Stack>
			</Card>
		</>
	);
};

export default CardEventClub;
