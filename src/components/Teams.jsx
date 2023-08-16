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
      <Flex w="860px" flexDir={"column"} color="dark.900">
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
      <Box h="801px" bg="#EEF0F3" w="416px" mt="48px"></Box>
    </Flex>
  );
};

export default Teams;
