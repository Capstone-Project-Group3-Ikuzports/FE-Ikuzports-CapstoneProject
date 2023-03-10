import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Fade
} from "@chakra-ui/react";
import axios from "axios";
import bca from "../../assets/bca.png";
import bni from "../../assets/bni.png";
import bri from "../../assets/bri.png";
import mandiri from "../../assets/mandiri.png";
import Sample1 from "../../assets/sampleJersey1.jpeg";
import Sample2 from "../../assets/sampleJersey2.jpg";
import Sample3 from "../../assets/sampleJersey3.jpeg";
import {Buttons} from '../../components/Baru/ButtonBack';
import {ButtonsCancel} from '../../components/Baru/ButtonBack';
import Dropdown from "../../components/Baru/Dropdown";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ButtonBack,
  ButtonBuy
} from "../../components/Baru/ButtonBack";
import Swal from "sweetalert2";
import Layout from "../../components/Baru/Layout";



const DetailStore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [productId,setProductId] = useState({})
  const currentUser = useSelector((state) => state.users.currentUser)
  const token = currentUser.token

  const config = {
    headers: {Authorization : `Bearer ${token}`},
  }
  const location = useLocation()
  const idStore = location?.state?.id
  const date = new Date();
  let tanggal = '' + date.getDate();
  tanggal.length < 2 ? tanggal = 0 + tanggal : tanggal;
  let bulan = '' + date.getMonth() + 1
  bulan.length < 2 ? bulan = 0 + bulan : bulan
  let tahun = '' + date.getFullYear();
  let detik = '' + date.getSeconds();
  detik.length < 2 ? detik = 0 + detik : detik
  let menit = '' + date.getMinutes();
  menit.length < 2 ? menit = 0 + menit : menit
  let jam = '' + date.getHours();
  jam.length < 2 ? jam = 0 + jam : jam
  const postWaktu = `${tahun}-${bulan}-${tanggal} ${jam}:${menit}:${detik}`
  const parsingan = Number(productId.price)
  const parsinganId = Number(idStore)
  const [displayMidTrans,setDisplayMidTrans] = useState('none')
  const [displayMidTransBni,setDisplayMidTransBni] = useState('none')
  const [displayMidTransBri,setDisplayMidTransBri] = useState('none')



  const [detail,setDetail] = useState('')
  const [bank,setBank] = useState('')
  const [isSubmit, setSubmitted] = useState(false)




  const getProductId = ()=>{
    axios
    .get(`https://rubahmerah.site/products/${idStore}`,config)
    .then((res)=>{
      setProductId(res.data.data)
    })
    .catch((err)=>console.log(err))
    
  }


  const getTransaction = () =>{
   
    axios
    .get(`https://rubahmerah.site/transactions/`,config)
    .then((res)=>{
      

      if(res.data.data[0].status_payment == 'settlement'){
        onClose();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Item has been pay",
              text: "Sit tight its on the way",
              showConfirmButton: true,
            })
          }
    console.log(res.data.data[0])
    })

  }

const OnClickBank = async(e)=>{
 const bankM =e.target.innerText.toLowerCase()
  setDisplayMidTrans('block');
  postDetail(bankM)
 
}

  // useEffect(
  //   ()=>getTransaction(),[],
  //   )

  // useEffect(() => {
  //   if(isSubmit) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Your Item has been pay",
  //       text: "Sit tight its on the way",
  //       showConfirmButton: true,
  //     })}
  // }, [isSubmit])


  const postDetail = (bankM) =>{
    axios
    .post('https://rubahmerah.site/transactions/',{total_price:parsingan,product_id:parsinganId,product_quantity:1,transaction_time:`${postWaktu}`,payment_method:`${bankM}`},config )
  
    .then((res) => {
      setDetail(res.data.data)
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "error",
        text: `${err.response.data.message}`,
        timer: 10000000,
        showConfirmButton: true,
      });
    });
  }

useEffect(
  ()=>getProductId(),[]
  )


    
  return (
    <Layout>
      <Box p="8" px={"10%"} w={"100vw"} overflowX="hidden" minH={"90vh"}>
        <Flex onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <ButtonBack />
        </Flex>
        {/* heigh just sample */}
        <Flex>
          <Box w={"40vw"}>
            <Center>
              <Image src={productId.thumbnail} objectFit={"cover"} w={"30vw"} h={"40vh"} />
            </Center>
            <Flex pt={2} justifyContent={"space-evenly"}>
            <Image src={Sample1} w={"10vw"} h={"15vh"} />
              <Image src={Sample2} w={"10vw"} h={"15vh"} />
              <Image src={Sample3} w={"10vw"} h={"15vh"} />
            </Flex>
            <Text fontWeight={"semibold"}>Descrption</Text>
            <Text
              lineHeight={"4"}
            >{`${productId.description}`}</Text>
          </Box>
          <Box w={"50vw"}>
            <Text
              as={"h6"}
              fontSize={"6xl"}
              fontWeight={"semibold"}
            >{`${productId.name}`}</Text>
            <Text as={"h3"} fontSize={"4xl"} fontWeight={"hairline"}>
              {`Rp ${productId.price}`}
            </Text>
            <Text as={"h2"} fontSize={"2xl"} fontWeight={"normal"} pb={"28"}>
              {`Seller : ${productId.user_name}`}
            </Text>
           
          
            <Buttons textContent={'Buy'} openTrigger={onOpen} />
          </Box>
          <Box  ml='auto' mb={10} >
           <Modal isOpen={isOpen} onClose={onClose}  closeOnOverlayClick={false}>
              <ModalOverlay/>
              <ModalContent backgroundColor={'brand.100'}>
                <ModalHeader textAlign={'center'}>Pilih Metode Pembayaran</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
            
                  <Flex alignItems={"center"}>
                  <Button size={'lg'} variant='link' onClick={OnClickBank} >
                  <Image src={bca} w={"5vw"} h={"7vh"} mb="10px" mr='25px'/>
                  <Text fontSize={'2xl'} textColor='black' as='b'>BCA</Text>
                  </Button>
                  </Flex>
                  <Flex>
                  
                  <Box background={'white'} w='full' shadow={'2xl'} rounded='xl' mb={'10px'} display={displayMidTrans}>
                  <FormControl p={'10'}>
                   <FormLabel textAlign={'center'} fontSize={'3xl'} textTransform='uppercase' pb={'10px'}>{detail?.va_numbers?.bank}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Order id:{detail?.order_id}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Price :{detail?.gross_amount}</FormLabel>
                   <FormLabel fontSize={'xl'}>Please Transfer to Virtual Account: <Text fontSize={'3xl'} textAlign='center'>{detail?.va_numbers?.va_number}</Text> </FormLabel>
                    <Button onClick={()=>getTransaction()}>Payment has been made</Button>
                  </FormControl>
                  </Box>
                  </Flex>

                  <Flex alignItems={"center"}>
                  <Button size={'lg'} variant='link' onClick={()=>{setBank('bni'),setDisplayMidTransBni('block'),postDetail()}}>
                  <Image src={bni} w={"5vw"} h={"7vh"} mb="10px" mr='25px'/>
                  <Text fontSize={'2xl'} textColor='black' as='b'>BNI</Text>
                  </Button>
                  </Flex>
                  <Flex>
                  
                  <Box background={'white'} w='full' shadow={'2xl'} rounded='xl' mb={'10px'} display={displayMidTransBni}>
                  <FormControl p={'10'}>
                   <FormLabel textAlign={'center'} fontSize={'3xl'} textTransform='uppercase' pb={'10px'}>{detail?.va_numbers?.bank}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Order id:{detail?.order_id}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Price :{detail?.gross_amount}</FormLabel>
                   <FormLabel fontSize={'xl'}>Please Transfer to Virtual Account: <Text fontSize={'3xl'} textAlign='center'>{detail?.va_numbers?.va_number}</Text> </FormLabel>
                  </FormControl>
                  </Box>
                  </Flex>

                  <Flex alignItems={"center"}>
                  <Button size={'lg'} variant='link' onClick={()=>{setBank('bri'),setDisplayMidTransBri('block'),postDetail()}}>
                  <Image src={bri} w={"5vw"} h={"7vh"} mb="10px" mr='25px'/>
                  <Text fontSize={'2xl'} textColor='black' as='b'>BRI</Text>
                  </Button>
                  </Flex>
                  <Flex>
                  
                  <Box background={'white'} w='full' shadow={'2xl'} rounded='xl' mb={'10px'} display={displayMidTransBri}>
                  <FormControl p={'10'}>
                   <FormLabel textAlign={'center'} fontSize={'3xl'} textTransform='uppercase' pb={'10px'}>{detail?.va_numbers?.bank}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Order id:{detail?.order_id}</FormLabel>
                   <FormLabel fontSize={'xl'} pb={'10px'}>Price :{detail?.gross_amount}</FormLabel>
                   <FormLabel fontSize={'xl'}>Please Transfer to Virtual Account: <Text fontSize={'3xl'} textAlign='center'>{detail?.va_numbers?.va_number}</Text> </FormLabel>
                  </FormControl>
                  </Box>
                  </Flex>
                 
                  <Flex alignItems={"center"}>
                  <Button size={'lg'} variant='link'> 
                  <Image src={mandiri} w={"5vw"} h={"7vh"} mb="10px" mr={'25px'}/>
                  <Text fontSize={'2xl'} textColor='gray'>Upcoming</Text>
                  </Button>
                  </Flex>
                  </ModalBody>
              </ModalContent>
            </Modal>
        </Box>
        </Flex>
      </Box>
      </Layout>
  );
};

export default DetailStore;
