import {
  Box,
  Card,
  Center,
  Fade,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import ModalEditGaleries from "../Unreusable/ModalEditGaleries";
const CardGallery = ({
  image,
  caption,
  deletePhoto,
  idImage,
  editPhoto,
  status,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card
      maxW={"sm"}
      bgColor={"whiteAlpha.800"}
      overflow={"hidden"}
      onPointerEnter={() => onToggle()}
      onPointerLeave={() => onToggle()}
      cursor={"pointer"}
    >
      {status === "Owner" ? (
        <ModalEditGaleries
          open={open}
          images={image}
          currentCaption={caption}
          editPhoto={editPhoto}
          idImage={idImage}
        />
      ) : (
        <> </>
      )}

      <Center>
        <Image
          src={image}
          maxw={"lg"}
          minw={"lg"}
          maxH={"xs"}
          minH={"xs"}
          objectFit="contain"
          bgColor={"whiteAlpha.800"}
        />
      </Center>
      <Fade in={isOpen} direction="bottom">
        <Box position={"absolute"} top={0} right={0} color={"#ff1443"}>
          {status === "Owner" ? (
            <MdDelete size={30} onClick={() => deletePhoto({ id: idImage })} />
          ) : (
            <></>
          )}
        </Box>

        <Text
          display={"inline-block"}
          transition={"ease-in"}
          fontSize={"lg"}
          bgColor={"ActiveBorder"}
          color={"whiteAlpha.800"}
          w={"full"}
          // minH={"15%"}
        >
          {caption}
        </Text>
      </Fade>
    </Card>
  );
};

export default CardGallery;
