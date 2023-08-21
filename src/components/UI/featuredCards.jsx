import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const FeaturedCards = ({ title, description }) => {
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
      transition={"all .1s  ease-in"}
      _hover={{
        border: "2px solid #DBDEDF",
        cursor: "pointer",

        "&>img": {
          display: "block",
        },
      }}
      pos="relative"
    >
      <Image
        src="/images/up_arrow.svg"
        alt="Up"
        width={"24px"}
        height={"24px"}
        position={"absolute"}
        right={"10px"}
        top={"10px"}
        display={"none"}
      />
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
        whiteSpace={"nowrap"}
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
  );
};

export default FeaturedCards;
