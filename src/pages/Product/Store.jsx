import React, { useState, useEffect } from "react";
import Pagination from "rc-pagination";
import "../../components/Pagination/pagination.css";
import { AiOutlineSearch } from "react-icons/ai";
import {
	CardFooter,
	Heading,
	CardHeader,
	Box,
	Text,
	Flex,
	Stack,
	Spacer,
	Divider,
	Button,
	SimpleGrid,
	Card,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import CardProduct from "../../components/Baru/CardProduct";
import { ButtonBack } from "../../components/Baru/ButtonBack";
import Layout from "../../components/Baru/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../../components/Baru/Dropdown";

const Store = () => {
	const currentUser = useSelector((state) => state.users.currentUser);
	const token = currentUser.token;

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const [product, setProduct] = useState([]);
	const [filterCate, setFilterCate] = useState("");
	const [filterCity, setFilterCity] = useState("");
	const [search, setSearch] = useState("");
	const navi = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState();
	const page = [];

	const onChangePage = (page) => {
		setCurrentPage(page);
		setDaftarBed(null);
	};

	const getProduct = () => {
		axios
			.get(
				`https://rubahmerah.site/products?itemcategory_id=${filterCate}&name=${search}&city=${filterCity}&page=${currentPage}`,
				config
			)
			.then((res) => {
				setProduct(res.data.data);
				setTotalPage(res.data.total_page);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => getProduct(), [filterCate, filterCity, search, currentPage]);

	return (
		<Layout>
			<Box p="8" px={"10%"} w={"100vw"} h={"100%"} overflowX="hidden">
				<ButtonBack />
				<Flex>
					<Text fontSize={"5xl"} textColor={"brand.300"}>
						Store
					</Text>
					<Flex mb="30px" ml="auto" mt={4}>
						<Dropdown
							placeHolderProps={"Category"}
							targetValue={(e) => setFilterCate(e.target.value)}
							filterCates={filterCate}
						>
							<option value="1">Sepatu</option>
							<option value="2">Jersey</option>
							<option value="3">Bola</option>
							<option value="4">Raket</option>
							<option value="5">Celana</option>
							<option value="6">Equipment</option>
							<option value="7">Aksesoris</option>
						</Dropdown>
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
						<InputGroup
							w={"250px"}
							boxShadow={"xl"}
							varian="filled"
							onChange={(e) => setSearch(e.target.value)}
						>
							<InputLeftElement
								pointerEvents="none"
								children={<AiOutlineSearch color="gray.300" />}
							/>
							<Input type="tel" bg="white" placeholder="Search Product" />
						</InputGroup>
					</Flex>
				</Flex>
				<Divider w="17%" orientation="horizontal" />
				<Flex>
					<Box ml={"57%"}></Box>
				</Flex>
				<SimpleGrid columns={{ sm: 2, md: 4 }} gap={8}>
					{product != null ? (
						product.map((item) => (
							<CardProduct
								key={item.id}
								image={
									item.thumbnail != ""
										? item.thumbnail
										: "https://www.hostpapa.com/knowledgebase/wp-content/uploads/2018/04/1-13.png"
								}
								onClick={() => {
									navi("/detailStore", {
										state: {
											id: item.id,
										},
									});
								}}
							>
								<Stack mt="3" spacing="3">
									<Flex mb={10}>
										<Heading size="md">{item.name}</Heading>
										<Text>{item.city}</Text>
										<Spacer></Spacer>
									</Flex>
									<Text color="blue.600" as="b" fontSize="2xl">
										{item.price}
									</Text>
								</Stack>
							</CardProduct>
						))
					) : (
						<Card align="center" w={"8xl"}>
							<CardHeader>
								<Heading size="3xl" color={"brand.300"}>
									There is no item on this category yet{" "}
								</Heading>
							</CardHeader>
							<CardFooter>
								<Button
									bg="brand.300"
									color={"brand.100"}
									onClick={() => {
										navi("/myproduct");
									}}
								>
									Lets GO sell something{" "}
								</Button>
							</CardFooter>
						</Card>
					)}
				</SimpleGrid>
			</Box>
			<Box mx="auto" width={"fit-content"}>
				<Pagination
					total={totalPage * 10}
					onChange={onChangePage}
					current={currentPage}
					defaultCurrent={1}
				/>
			</Box>
		</Layout>
	);
};

export default Store;
