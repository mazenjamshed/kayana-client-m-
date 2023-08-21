import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
import RoundedTabs from "./UI/roundedTabs";
import ForYouCard from "./UI/forYouCard";

const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tabs = [
  {
    id: 1,
    title: "Entrepreneurs",
  },
  {
    id: 2,
    title: "Real Estate Agent",
  },
  {
    id: 3,
    title: "Small Business Owner",
  },
  {
    id: 4,
    title: "Artist",
  },
  {
    id: 5,
    title: "Event Planner",
  },
  {
    id: 6,
    title: "Coach",
  },
  {
    id: 7,
    title: "Medical Professional",
  },
  {
    id: 8,
    title: "Financial Advisor",
  },
  {
    id: 9,
    title: "Wealth Manager",
  },
  {
    id: 10,
    title: "Freelancer",
  },
  {
    id: 11,
    title: "Solopreneur",
  },
];

const cards = [
  {
    id: 1,
    title: "Administrative Assistant",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    id: 2,
    title: "Executive Assistant",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    id: 3,
    title: "Marketing Assistant",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
  },
];

const ForYou = () => {
  return (
    <Flex w="100%" justifyContent={"center"}>
      <Flex
        bg="dark.900"
        borderRadius={"16px"}
        p="72px"
        flexDir={"column"}
        position={"absolute"}
        h="842px"
        w="90%"
      >
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text
              className={caladea?.className}
              lineHeight={"normal"}
              letterSpacing={"0.24px"}
              fontSize={"48px"}
              fontWeight={"700"}
              color="#fff"
              mb="28px"
              w="661px"
            >
              Can-do Assistants For Your Unique Needs
            </Text>
            <Text
              mx="auto"
              w="661px"
              color="#EEF0F3"
              className={cabin?.className}
              lineHeight={"normal"}
              fontSize={"18px"}
              fontWeight={"400"}
            >
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut al,
            </Text>
          </Box>
          <Flex flexDir={"column"} alignItems={"flex-start"} gap={"24px"}>
            <Text
              className={cabin?.className}
              fontSize={"20px"}
              fontWeight={"600"}
              lineHeight={"normal"}
              textTransform={"uppercase"}
              fontStyle={"normal"}
              color="#EEF0F3"
            >
              Perfect for
            </Text>
            <Flex gap={"16px"}>
              <Flex
                p="6px 20px 6px 6px"
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                borderRadius={"36px"}
                border="1px solid #DBDEDF"
              >
                <Box p="8px" bg="#fff" borderRadius={"58px"}>
                  <Image
                    src="/images/tick.svg"
                    alt="tick"
                    width={"20px"}
                    height={"20px"}
                  />
                </Box>
                <Text
                  className={cabin?.className}
                  fontSize={"18px"}
                  fontWeight={"400"}
                  lineHeight={"normal"}
                  fontStyle={"normal"}
                  color="#fff"
                >
                  Individuals
                </Text>
              </Flex>
              <Flex
                p="6px 20px 6px 6px"
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                borderRadius={"36px"}
                border="1px solid #DBDEDF"
              >
                <Box p="8px" bg="#fff" borderRadius={"58px"}>
                  <Image
                    src="/images/tick.svg"
                    alt="tick"
                    width={"20px"}
                    height={"20px"}
                  />
                </Box>
                <Text
                  className={cabin?.className}
                  fontSize={"18px"}
                  fontWeight={"400"}
                  lineHeight={"normal"}
                  fontStyle={"normal"}
                  color="#fff"
                >
                  Teams
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box my="52px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1161"
            height="2"
            viewBox="0 0 1161 2"
            fill="none"
          >
            <path d="M0.5 1L1160.5 1.0001" stroke="#EEF0F3" />
          </svg>
        </Box>
        <Flex justifyContent={"space-between"} w="100%">
          <Text
            className={cabin?.className}
            fontSize={"20px"}
            fontWeight={"600"}
            lineHeight={"normal"}
            textTransform={"uppercase"}
            fontStyle={"normal"}
            color="#EEF0F3"
          >
            Your Profession
          </Text>
          <Flex gap={"8px"}>
            <Text
              color="#EEF0F3"
              className={cabin?.className}
              lineHeight={"normal"}
              fontSize={"18px"}
              fontWeight={"400"}
            >
              Search
            </Text>
            <Image
              src="/images/search.svg"
              alt="search"
              width={"22px"}
              height={"22px"}
            />
          </Flex>
        </Flex>

        <Flex flexWrap={"wrap"} gap={"16px"} mt="20px">
          {tabs?.map((tab) => (
            <RoundedTabs key={tab?.id} title={tab?.title} darkMode={true} />
          ))}
        </Flex>

        <Flex
          gap={"24px"}
          pos={"absolute"}
          left="50%" // To center horizontally
          transform="translateX(-50%)"
          bottom={"-20%"}
        >
          {cards?.map((card) => (
            <ForYouCard
              key={card?.id}
              title={card?.title}
              description={card?.description}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ForYou;
