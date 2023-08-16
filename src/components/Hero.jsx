import { Box, Button, DarkMode, Flex, Image, Text } from "@chakra-ui/react";
import RoundedTabs from "./UI/roundedTabs";

import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const tabs = [
  {
    id: 1,
    title: "Entrepreneurs",
  },
  {
    id: 2,
    title: "Small Business Owners",
  },
  {
    id: 3,
    title: "Medical Professionals",
  },
  {
    id: 4,
    title: "Therapists",
  },
  {
    id: 5,
    title: "Freelancers",
  },
  {
    id: 6,
    title: "Real Estate Agents",
  },
];

const Hero = () => {
  return (
    <Flex h="901px">
      <Flex flexDir={"column"} w="775px" p=" 60px 68px 40px 68px">
        <Text
          className={caladea?.className}
          fontWeight={"700"}
          fontSize={"4rem"}
          color={"dark.900"}
          letterSpacing={"0.32px"}
          mb="44px"
          lineHeight={"normal"}
        >
          Hire the Right Virtual Assistant For Your Unique Needs
        </Text>
        <Text
          className={cabin?.className}
          fontWeight={"400"}
          fontSize={"18px"}
          color={"dark.900"}
          //   letterSpacing={'0.32px'}
          mb="44px"
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut al
        </Text>
        <Flex gap={"2rem"} alignItems={"center"} mb="184px">
          <Button
            fontSize={"1.5rem"}
            bg="dark.900"
            p="32px 172px"
            color="#fff"
            fontWeight={"500"}
            letterSpacing={"0.96px"}
            borderRadius={".5rem"}
            className={cabin?.className}
            w="304px"
          >
            Get Started
          </Button>
          <Box h="100%">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="61"
              viewBox="0 0 2 61"
              fill="none"
            >
              <path d="M1 0L1 61" stroke="#DBDEDF" />
            </svg>
          </Box>
          <Flex
            w="100%"
            alignItems={"center"}
            gap={"3rem"}
            justifyContent={"space-between"}
          >
            <Flex position={"relative"} alignItems={"center"} w="45%" h="100%">
              <Box position={"absolute"} left={0} zIndex={"50"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24.5"
                    r="23.5"
                    fill="#EEF0F3"
                    stroke="#6A7485"
                  />
                </svg>
              </Box>
              <Box position={"absolute"} left={"2rem"} zIndex={"49"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24.5"
                    r="23.5"
                    fill="#EEF0F3"
                    stroke="#6A7485"
                  />
                </svg>
              </Box>
              <Box position={"absolute"} left={"4rem"} zIndex={"48"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24.5"
                    r="23.5"
                    fill="#EEF0F3"
                    stroke="#6A7485"
                  />
                </svg>
              </Box>
            </Flex>

            <Box
              w="40%"
              className={cabin?.className}
              color="dark.900"
              lineHeight={"normal"}
            >
              <Text fontWeight={"500"}>2400+</Text>
              <Text whiteSpace={"nowrap"} fontWeight={"400"}>
                Diverse KAYA VAs
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box color={"dark.900"}>
          <Text
            fontSize={"2rem"}
            className={caladea?.className}
            fontWeight={"700"}
            letterSpacing={"0.18px"}
            lineHeight={"normal"}
            mb="2rem"
          >
            VAs are Best For
          </Text>
          <Flex gap={"1rem"} flexWrap={"wrap"}>
            {tabs?.map((tab) => (
              <RoundedTabs key={tab?.id} title={tab?.title} />
            ))}

            <Flex bg="dark.900" borderRadius={"50%"}>
              <Image src="/images/down_arrow.svg" alt="down" p="12px" />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDir={"column"} w="45%" bg="#EEF0F3" h="100%" flex={"1"}></Flex>
    </Flex>
  );
};

export default Hero;
