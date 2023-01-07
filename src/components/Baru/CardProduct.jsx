import React from "react";
import {
	Card,
	Flex,
	CardBody,
	Button,
	Text,
	Image,
	Stack,
	Divider,
	Heading,
	Spacer,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

const CardProduct = ({ name, desc, price, image, id, children, onClick }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const currentUser = useSelector((state) => state.users.currentUser);
	const token = currentUser.token;
	console.log(image);

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			"content-type": "multipart/form-data",
		},
	};

	const del = () => {
		axios
			.delete(`https://rubahmerah.site/products/${id}`, config)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div>
				<Card
					onClick={onClick}
					maxW="sm"
					bg="white"
					_hover={{ cursor: "pointer" }}
				>
					<CardBody>
						<Image
							src={image}
							alt="Green double couch with wooden legs"
							borderRadius="lg"
							mx="auto"
							h="300px"
						/>
						{children}
					</CardBody>
					<Divider />
				</Card>
			</div>
		</div>
	);
};

export default CardProduct;
