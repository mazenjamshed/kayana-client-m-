import { Box, Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
import FeaturedCards from "./UI/featuredCards";

const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const cardsData = [
  {
    id: "1",
    title: "Executive Assistants",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "2",
    title: "Technical Assistants",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "3",
    title: "Marketing Assistants",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
];

const cardsData2 = [
  {
    id: "4",
    title: "Customer Support Specialists",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "5",
    title: "Real Estate Assistants",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
  {
    id: "6",
    title: "Administrative Assistants",
    description:
      "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exer citationem ullam corporis suscipit labmnisi ut al.",
  },
];

const Features = () => {
  return (
    <Flex
      flexDir={"column"}
      p="124px 68px"
      justifyContent={"center"}
      gap={"112px"}
    >
      <Box textAlign={"center"} w="872px" mx="auto" color={"dark.900"}>
        <Text
          mb="32px"
          className={caladea?.className}
          lineHeight={"normal"}
          letterSpacing={"0.24px"}
          fontSize={"48px"}
          fontWeight={"700"}
        >
          Maximize Your Efficiency with KAYA VAs
        </Text>
        <Text
          mx="auto"
          w="661px"
          className={cabin?.className}
          lineHeight={"normal"}
          fontSize={"18px"}
          fontWeight={"400"}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut al,{" "}
        </Text>
      </Box>
      <Box>
        <Flex flexWrap={"wrap"} mb="44px">
          {cardsData?.map((card) => (
            <FeaturedCards
              key={card?.id}
              title={card?.title}
              description={card?.description}
            />
          ))}
        </Flex>
        <Flex flexWrap={"wrap"}>
          {cardsData2?.map((card) => (
            <FeaturedCards
              key={card?.id}
              title={card?.title}
              description={card?.description}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Features;
