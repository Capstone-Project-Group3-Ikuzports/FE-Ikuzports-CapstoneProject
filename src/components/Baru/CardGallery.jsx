import { Image } from "@chakra-ui/react";
import React from "react";

const CardGallery = ({ image }) => {
  return (
    <Image
      src={image}
      maxw={"36"}
      minw={"xl"}
      maxH={"xs"}
      minH={"xs"}
      objectFit="contain"
      bgColor={"whiteAlpha.800"}
    />
  );
};

export default CardGallery;
