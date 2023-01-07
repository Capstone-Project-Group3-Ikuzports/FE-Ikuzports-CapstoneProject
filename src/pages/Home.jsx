import React from "react";
import {
	Box,
	Spacer,
	Text,
	Flex,
	FormControl,
	FormLabel,
	Spinner,
	Card,
	CardBody,
	Input,
	Heading,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Show,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import CardEventClub from "../components/Baru/CardEventClub";
import { useState } from "react";
import { ButtonCreate, Buttons } from "../components/Baru/ButtonBack";
import { useEffect } from "react";
import Modals from "../components/Baru/Modal";
import Dropdown from "../components/Baru/Dropdown";

import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import UploadFiles from "../components/Baru/UploadFiles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Baru/Layout";

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(true);
	const handleInputChange = (e) => setInput(e.target.value);
	const isError = input === " ";
	const currentUser = useSelector((state) => state.users.currentUser);
	const token = currentUser.token;
	const currentToken = useSelector((state) => state.access.currentAccess);
	const tokenAkses = currentToken.access_token;

	const navigate = useNavigate();

	const [getEvents, setGetEvents] = useState([]);
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [category_id, setCategoryId] = useState("");
	const [start_date, setStartDate] = useState("");
	const [end_date, setEndDate] = useState("");
	const [description, setDescription] = useState("");
	const [files, setFiles] = useState();
	const [prev, setPrev] = useState();
	const [maximum_people, setMaximumPeople] = useState("");

	const [skeleton] = useState([1]);
	const [page, setPage] = useState(1);
	const [getClubNew, setGetClubNew] = useState([]);
	const [loadingClub, setLoadingClub] = useState(false);
	const [filterCity, setFilterCity] = useState("");
	const [filterCate, setFilterCate] = useState("");
	const [filterStat, setFilterStat] = useState("");

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			"content-type": "multipart/form-data",
		},
	};

	const getClub = async () => {
		await axios
			.get(`https://rubahmerah.site/clubs`, config)
			.then((response) => {
				setLoadingClub(true);
				setGetClubNew(response.data.data);
				setLoadingClub(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getClubSlice = getClubNew.slice(0, 3);

	const getEvent = async () => {
		await axios
			.get(
				`https://rubahmerah.site/events?page=${page}&status=${filterStat}&city=${filterCity}&category_id=${filterCate}`,
				config
			)
			.then((response) => {
				const result = response.data.data;
				const newPage = page + 1;
				const temp = [...getEvents];
				temp.push(...result);
				setGetEvents(temp);
				setPage(newPage);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const addEvent = async () => {
		const formerData = new FormData();
		formerData.append("name", name);
		formerData.append("address", address);
		formerData.append("city", city);
		formerData.append("category_id", category_id);
		formerData.append("start_date", start_date);
		formerData.append("end_date", end_date);
		formerData.append("maximum_people", maximum_people);
		formerData.append("description", description);
		formerData.append("image_event", files);
		console.log([...formerData]);
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				"content-type": "multipart/form-data",
			},
		};

		await axios
			.post(`https://rubahmerah.site/events`, formerData, config)
			.then((response) => {
				Swal.fire({
					position: "center",
					icon: "success",
					text: `Create Event successfully `,
					showConfirmButton: false,
					timer: 3000,
				});
				navigate("/");
			})
			.catch((err) => {
				Swal.fire({
					position: "center",
					icon: "error",
					text: `failed`,
					showConfirmButton: true,
					timer: 3000,
				});
			});
		getEvent();
	};

	useEffect(() => {
		getClub();
		getEvent();
	}, [filterCate, filterCity, filterStat]);

	return (
		<Layout>
			<div>
				<Box p="8" px={"10%"} w={"100vw"} h={"100%"}>
					<Flex>
						<Box w="60%">
							<Text as="b" fontSize={"2xl"}>
								Home
							</Text>
							<Card
								w={"100%"}
								h={"170px"}
								mt={"15px"}
								shadow="xl"
								rounded="xl"
								backgroundColor={"white"}
							>
								<CardBody w={"100%"}>
									<Flex h={"70%"}>
										<Box my="auto">
											<FiUser size={60} />
										</Box>
										<Text
											px={"5"}
											onClick={onOpen}
											my="auto"
											fontSize={"2xl"}
											ml={"50px"}
											w={"80%"}
											p={3}
											_hover={{
												cursor: "pointer",
												backgroundColor: "gray.100",
											}}
											rounded="full"
											color="gray.500"
										>
											Start Posting Now
										</Text>
									</Flex>
									<Box ml="80%">
										<Buttons textContent="Post" openTrigger={onOpen} />
									</Box>
								</CardBody>
							</Card>

							<Modals isOpen={isOpen} onClose={onClose}>
								<ModalHeader>Add New Event</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<FormControl isInvalid={isError}>
										<FormLabel my="3">Event Title</FormLabel>
										<Input
											color="black"
											bg="white"
											placeholder="Your event name"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setName(e.target.value)}
										/>
										<FormLabel my="3">Event Address</FormLabel>
										<Input
											color="gray"
											bg="white"
											placeholder="Your event address"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setAddress(e.target.value)}
										/>
										<FormLabel my="3">Event City</FormLabel>
										<Dropdown
											placeHolderProps={"Event City"}
											targetValue={(e) => setCity(e.target.value)}
										>
											<option value="Jakarta">Jakarta</option>
											<option value="Bogor">Bogor</option>
											<option value="Depok">Depok</option>
											<option value="Tanggerang">Tanggerang</option>
											<option value="Bekasi">Bekasi</option>
											<option value="Bandung">Bandung</option>
											<option value="Semarang">Semarang</option>
											<option value="Malang">Malang</option>
											<option value="Surabaya">Surabaya</option>
											<option value="Jogjakarta">Jogjakarta</option>
										</Dropdown>
										<FormLabel my="3">Event Description</FormLabel>
										<Input
											color="gray"
											bg="white"
											placeholder="Give your event a description"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setDescription(e.target.value)}
										/>
										<FormLabel my="3">Event Banner</FormLabel>
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
										<FormLabel my="3">Event Category</FormLabel>
										<Dropdown
											placeHolderProps={"Event City"}
											targetValue={(e) => setCategoryId(e.target.value)}
										>
											<option value="1">Speak Bola</option>
											<option value="2">Basket</option>
											<option value="3">Futsal</option>
											<option value="4">Voli</option>
											<option value="5">Badminton</option>
											<option value="6">Sepeda</option>
											<option value="7">Tenis Lapangan</option>
											<option value="8">Tenis Meja</option>
											<option value="9">Renang</option>
											<option value="10">Bela Diri</option>
										</Dropdown>

										<FormLabel my="3">Starting Date</FormLabel>
										<Input
											color="gray"
											type={"date"}
											bg="white"
											placeholder="When your event start"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setStartDate(e.target.value)}
										/>
										<FormLabel my="3">Ending Date Date</FormLabel>
										<Input
											color="gray"
											type={"date"}
											bg="white"
											placeholder="When your event End"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setEndDate(e.target.value)}
										/>
										<FormLabel my="3">Maximum People</FormLabel>
										<Input
											color="gray"
											bg="white"
											placeholder="Maximum People your event can hold"
											_placeholder={{ opacity: 0.4, color: "inherit" }}
											onChange={(e) => setMaximumPeople(e.target.value)}
										/>
									</FormControl>
								</ModalBody>
								<ModalFooter>
									<ButtonCreate
										onClick={() => {
											addEvent(), onClose();
										}}
									/>
								</ModalFooter>
							</Modals>
							<Box mt={"30px"}>
								<Flex>
									<Dropdown
										placeHolderProps={"City"}
										targetValue={(e) => setFilterCity(e.target.value)}
										filterCates={filterCity}
									>
										<option value="Jakarta">Jakarta</option>
										<option value="Bogor">Bogor</option>
										<option value="Depok">Depok</option>
										<option value="Tanggerang">Tanggerang</option>
										<option value="Bekasi">Bekasi</option>
										<option value="Bandung">Bandung</option>
										<option value="Semarang">Semarang</option>
										<option value="Malang">Malang</option>
										<option value="Surabaya">Surabaya</option>
										<option value="Jogjakarta">Jogjakarta</option>
									</Dropdown>
									<Dropdown
										placeHolderProps={"Category"}
										targetValue={(e) => setFilterCate(e.target.value)}
										filterCates={filterCate}
									>
										<option value="1">SepakBola</option>
										<option value="2">Basket</option>
										<option value="3">Futsal</option>
										<option value="4">Bola Voli</option>
										<option value="5">Badminton</option>
										<option value="6">Bersepeda</option>
										<option value="7">Tenis Lapangan</option>
										<option value="8">Tenis Meja</option>
										<option value="9">Renang</option>
										<option value="10">Beladiri</option>
									</Dropdown>
									<Dropdown
										placeHolderProps={"Status"}
										targetValue={(e) => setFilterStat(e.target.value)}
										filterCates={filterStat}
									>
										<option value="Available">Available</option>
										<option value="Not Available">Not Available</option>
									</Dropdown>
								</Flex>

								<Flex flexDir={"column"} gap={"3"} pt={4}>
									{loading
										? skeleton.map((data) => <Spinner key={data} />)
										: getEvents.map((item) => (
												<CardEventClub
													key={item.id}
													keys={item.id}
													maxh="150px"
													maxw="150px"
													linkGambar={item.image_event}
													onClick={() => {
														token
															? navigate("/detailevent", {
																	state: {
																		id: item.id,
																	},
															  })
															: navigate("/login");
													}}
												>
													<CardBody
														w={"100%"}
														h={"100%"}
														py="30px"
														px={"70px"}
														pb={"0"}
													>
														<Heading size="md" mb={5}>
															{item.name}
														</Heading>
														<Flex>
															<Text>{item.start_date.slice(0, 10)}</Text>
															<Spacer></Spacer>
															<Text>{item.end_date.slice(0, 10)}</Text>
														</Flex>
														<Text my="10px">
															Slot : {item.total_participant} /{" "}
															{item.maximum_people}
														</Text>
														<Text my="10px">Address : {item.address}</Text>
														<Text my="10px">City : {item.city}</Text>
														<Text my="10px">
															Category : {item.category_name}
														</Text>
													</CardBody>
												</CardEventClub>
										  ))}
								</Flex>
								<Box mt={10}>
									<Buttons
										openTrigger={getEvent}
										textContent={"Load More Event"}
									/>
								</Box>
							</Box>
						</Box>
						<Show above="1300px">
							<Box w="40%">
								<Box
									mt={"6%"}
									ml={"16%"}
									w={"100%"}
									position="sticky"
									top={"0"}
								>
									<Buttons
										openTrigger={() => navigate("/clublist")}
										textContent="Find More Club"
									/>
									<Flex flexDir={"column"} gap={4} pt={5}>
										{getClubSlice && loadingClub === false ? (
											getClubSlice.map((item) => (
												<CardEventClub
													linkGambar={item.logo}
													key={item.id}
													keys={item.id}
													onClick={() =>
														navigate("/detailclub", {
															state: {
																id: item.id,
															},
														})
													}
												>
													<CardBody w={"100%"} pb={"0"}>
														<Heading size="md">{item.name}</Heading>
														<Text py="1">
															Member: {item.joined_member} / {item.member_total}
														</Text>
														<Text pb="1">{item.category_name}</Text>
														<Text pb="1">{item.city}</Text>
													</CardBody>
												</CardEventClub>
											))
										) : (
											<Spinner />
										)}
									</Flex>
								</Box>
							</Box>
						</Show>
					</Flex>
				</Box>
			</div>
		</Layout>
	);
};

export default Home;
