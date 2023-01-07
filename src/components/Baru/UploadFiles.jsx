import { Avatar, Box, Center, Text, Image } from "@chakra-ui/react";
import React from "react";
import { MdUpload } from "react-icons/md";

const UploadFiles = ({ onChange, prev, prevSize, objectFit }) => {
	return (
		<Box display={"flex"} bgColor={"#FFFFFF"}>
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
				<Text fontSize={"xs"} mx="auto" color={"gray.400"}>
					Upload image here
				</Text>
				<MdUpload size={80} color={"#eaeaea"} />
			</form>
			<Box w={52} border={"2px"} borderLeft={"none"} color={"#E2E8F0"}>
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
