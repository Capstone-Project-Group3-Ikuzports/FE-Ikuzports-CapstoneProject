import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

const Modals = ({ children, isOpen, onClose }) => {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent overflowY={"hidden"} backgroundColor={"brand.100"}>
					{children}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default Modals;
