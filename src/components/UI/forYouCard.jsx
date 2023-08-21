import { Box, Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ForYouCard = ({ title, description }) => {
  return (
    <Flex
      p="24px"
      flexDir={"column"}
      gap={"24px"}
      bg="#fff"
      borderRadius={"8px"}
      border="1px solid"
      borderColor={"dark.900"}
      w="372px"
    >
      <Box h="180px"></Box>
      <Flex
        flexDir={"column"}
        color="dark.900"
        gap={"16px"}
        textAlign={"center"}
      >
        <Text
          className={cabin?.className}
          lineHeight={"normal"}
          fontSize={"24px"}
          fontWeight={"400"}
        >
          {title}
        </Text>
        <Text
          className={cabin?.className}
          lineHeight={"normal"}
          fontSize={"18px"}
          fontWeight={"400"}
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ForYouCard;
