import { Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const FooterTop = () => {
  return (
    <Flex
      width="100%"
      padding="92px 68px"
      alignItems="flex-start"
      bg="var(--wireframes-black-900, #424B5A)"
    >
      <Text
        width="535px"
        flexShrink="0"
        color="var(--wireframes-white, #FFF)"
        className={caladea?.className}
        fontSize={"42px"}
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={"56px"}
        letterSpacing={"0.21px"}
        mr={"auto"}
      >
        Ready to Get Started?
      </Text>

      <Flex
        p="16px 24px"
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        borderRadius={"8px"}
        bg="var(--wireframes-white, #FFF)"
      >
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          textAlign={"center"}
          className={cabin?.className}
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"normal"}
          letterSpacing={"0.96px"}
          whiteSpace={"nowrap"}
        >
          Hire a Virtual Assistant
        </Text>
      </Flex>
    </Flex>
  );
};
export default FooterTop;
