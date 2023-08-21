import { Box, Flex, Text } from "@chakra-ui/react";
import TeamCard from "./UI/teamCard";

import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const cardsData = [
  {
    id: "1",
    title: "Hire Quickly",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "2",
    title: "The Right Fit",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
];

const cardsData2 = [
  {
    id: "3",
    title: "Flexible VA Pricing",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "4",
    title: "Cutting-edge Technology",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
];

const Teams = () => {
  return (
    <Flex p="164px 68px 72px 68px" mt="920px">
      <Flex w="100%" flexDir={"column"} color="dark.900">
        <Text
          mb="32px"
          className={caladea?.className}
          lineHeight={"normal"}
          letterSpacing={"0.24px"}
          fontSize={"48px"}
          fontWeight={"700"}
          w="583px"
        >
          Build Exceptional Teams, On Demand
        </Text>

        <Text
          className={cabin?.className}
          lineHeight={"normal"}
          fontSize={"18px"}
          fontWeight={"400"}
          mb="88px"
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit.
        </Text>
        <Flex mb="44px">
          {cardsData?.map((card) => (
            <TeamCard
              key={card?.id}
              title={card?.title}
              description={card?.description}
            />
          ))}
        </Flex>
        <Flex>
          {cardsData2?.map((card) => (
            <TeamCard
              key={card?.id}
              title={card?.title}
              description={card?.description}
            />
          ))}
        </Flex>
      </Flex>
      <Box h="801px" w="416px" mt="48px" position={"relative"}>
        <Box
          pos="absolute"
          right={5}
          top={5}
          width="106px"
          height="106px"
          flexShrink="0"
          borderRadius="1000px"
          border="1px solid var(--wireframes-black-800,#6A7485)"
          background="var(--wireframes-bg-2, #EEF0F3)"
        ></Box>
        <Box
          pos={"absolute"}
          left={0}
          top={20}
          bottom={"30px"}
          width="156px"
          height="156px"
          flexShrink="0"
          borderRadius="1000px"
          border="1px solid var(--wireframes-black-800,#6A7485)"
          background="var(--wireframes-bg-2, #EEF0F3)"
        ></Box>
        <Box
          pos={"absolute"}
          right={0}
          top={280}
          width="272px"
          height="272px"
          flexShrink="0"
          borderRadius="1000px"
          border="1px solid var(--wireframes-black-800,#6A7485)"
          background="var(--wireframes-bg-2, #EEF0F3)"
        ></Box>
        <Box
          pos={"absolute"}
          bottom={5}
          left={15}
          width="172px"
          height="172px"
          flexShrink="0"
          borderRadius="1000px"
          border="1px solid var(--wireframes-black-800,#6A7485)"
          background="var(--wireframes-bg-2, #EEF0F3)"
        ></Box>
      </Box>
    </Flex>
  );
};

export default Teams;
