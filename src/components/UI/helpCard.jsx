import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const HelpCard = ({ title, description, accent }) => {
  return (
    <Flex
      p="24px"
      flexDir={"column"}
      alignItems={"flex-start"}
      gap={"16px"}
      flex="1 0 0"
      borderRadius="8px"
      color="dark.900"
      mr="28px"
      bg="#F6F8FC"
      border="1px solid #DBDEDF"
      h={accent ? "609px" : "302px"}
    >
      <Box
        w="48px"
        h="48px"
        borderRadius={"10px"}
        border="1px solid  #6A7485"
        background=" #EEF0F3"
      ></Box>
      <Text
        className={caladea?.className}
        fontWeight={"700"}
        fontSize={"28px"}
        color={"dark.900"}
        letterSpacing={"0.14px"}
        lineHeight={"normal"}
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

      <Box
        h="259px"
        w="368px"
        borderRadius={"7px"}
        border={"1px solid #6A7485"}
        display={accent ? "block" : "none"}
      ></Box>
    </Flex>
  );
};

export default HelpCard;
