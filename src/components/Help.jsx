import { Box, Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
import FeaturedCards from "./UI/featuredCards";
import HelpCard from "./UI/helpCard";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Help = () => {
  return (
    <Flex p="92px 68px" w="100%" mt="860px" flexDir={"column"}>
      <Box w="669px" mx="auto">
        <Text
          textAlign={"center"}
          className={caladea?.className}
          lineHeight={"normal"}
          letterSpacing={"0.24px"}
          fontSize={"48px"}
          fontWeight={"700"}
          color={"dark.900"}
          mb="20px"
        >
          We Help You Be More Effective At Your Role
        </Text>
        <Text
          textAlign={"center"}
          className={cabin?.className}
          lineHeight={"normal"}
          fontSize={"16px"}
          fontWeight={"400"}
          color={"dark.900"}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum
          eionem.
        </Text>
      </Box>

      <Flex mt="76px" justifyContent={"space-between"}>
        <Flex w="416px" bg="#ccc">
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
            accent={true}
          />
        </Flex>
        <Flex
          flexDir={"column"}
          gap={"28px"}
          w="416px"
          justifyContent={"center"}
        >
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
          />
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
          />
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
          />
        </Flex>
        <Flex w="416px" bg="#ccc">
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
            accent={true}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Help;
