import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Center,
} from "@chakra-ui/react";

const CardActivity = ({
  title,
  start_time,
  end_time,
  activity_detail,
  location,
  day,
}) => {
  return (
    <>
      <Card variant={"filled"} bg="white" shadow="xl">
        <CardBody>
          <Text fontSize={"1.4rem"} textAlign="center">
            {title}
          </Text>
          <Text fontSize={"1rem"}>
            Time : {day}, ({start_time} - {end_time})
          </Text>
          <Text fontSize={"1rem"}>Location : {location}</Text>
          <Text fontSize={"1rem"}>{activity_detail}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default CardActivity;
