import { Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const TaskCard = ({ title }) => {
  return (
    <Flex
      padding="16px 32px 16px 8px'"
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      alignSelf={"stretch"}
    >
      <Text
        color="var(--wireframes-black-900, #424B5A)"
        className={cabin?.className}
        fontSize={"20px"}
        fontStyle={"normal"}
        fontWeight={"500"}
        lineHeight={"normal"}
        letterSpacing={"0.1px"}
      >
        {title}
      </Text>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path
          d="M8.5 12L16.5 20L24.5 12"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Flex>
  );
};
export default TaskCard;
