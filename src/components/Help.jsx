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
        <Flex flexDir={"column"} mr={"28px"} width={"35%"}>
          {/* changed here --1 */}
          <Flex
            w="416px"
            h="123px"
            p="36px 24px"
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"20px"}
            borderRadius={"12px"}
            bg={
              "linear-gradient(180deg, rgba(246, 248, 252, 0.00) 0%, #F6F8FC 100%)"
            }
            mb={"28px"}
          />
          <Flex w="416px">
            <HelpCard
              title="Be More Flexible"
              description={
                "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
              }
              accent={true}
            />
          </Flex>
          <Flex
            w="416px"
            h="123px"
            p="36px 24px"
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"20px"}
            borderRadius={"12px"}
            bg={
              "linear-gradient(180deg, rgba(246, 248, 252, 0.00) 0%, #F6F8FC 100%)"
            }
            mt={"28px"}
          />
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"28px"}
          w="416px"
          justifyContent={"center"}
          width={"30%"}
        >
          {/* second change here */}
          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
          />
          <Flex
            w="95%"
            h="253px"
            p="32px"
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            mr="28px"
            borderRadius={"12px"}
            bg={"var(--wireframes-black-900, #424B5A)"}
          >
            <Text
              color="var(--wireframes-white, #FFF)"
              className={caladea?.className}
              fontSize={"28px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"36px"}
              letterSpacing={"0.14px"}
              mb={"24px"}
            >
              Want to become more Effective?
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

          <HelpCard
            title="Maximize Efficiency"
            description={
              "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
            }
          />
        </Flex>
        <Flex flexDir={"column"} alignItems="flex-start" w={"35%"}>
          <Flex
            w="416px"
            h="123px"
            p="36px 24px"
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"20px"}
            borderRadius={"12px"}
            bg={
              "linear-gradient(180deg, rgba(246, 248, 252, 0.00) 0%, #F6F8FC 100%)"
            }
            mb={"28px"}
          />
          <Flex w="416px">
            <HelpCard
              title="Focus on Core Competency"
              description={
                "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al."
              }
              accent={true}
            />
          </Flex>
          <Flex
            w="416px"
            h="123px"
            p="36px 24px"
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"20px"}
            borderRadius={"12px"}
            bg={
              "linear-gradient(180deg, rgba(246, 248, 252, 0.00) 0%, #F6F8FC 100%)"
            }
            mt={"28px"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Help;
