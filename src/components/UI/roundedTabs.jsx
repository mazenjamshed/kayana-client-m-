import { Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const RoundedTabs = ({ title, darkMode }) => {
  return (
    <Flex
      borderRadius={"2rem"}
      border="1px solid #DBDEDF"
      p="12px 20px"
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
      color={darkMode ? "#F6F8FC" : "dark.900"}
    >
      <Text
        className={cabin?.className}
        fontSize={"18px"}
        fontWeight={"500"}
        lineHeight={"normal"}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default RoundedTabs;
