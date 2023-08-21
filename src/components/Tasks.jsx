import { Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
import TaskCard from "./UI/taskCard";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Tasks = () => {
  return (
    <Flex
      p="72px 68px 112px 68px"
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"44px"}
    >
      <Text
        color="var(--wireframes-black-900, #424B5A)"
        className={caladea?.className}
        fontSize="48px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="normal"
        letterSpacing="0.24px"
      >
        KAYA VAs by Tasks
      </Text>

      <Flex w="100%" alignItems="flex-start" gap="44px">
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"36px"}
          flex={"1 0 0"}
        >
          <TaskCard title="Executive Virtual Assistants" />
          <TaskCard title="Marketing Virtual Assistants" />
          <TaskCard title="Administrative Virtual Assistants" />
          <TaskCard title="Customer Support Virtual Assistants" />
          <TaskCard title="Technical Virtual Assistants" />
          <TaskCard title="Financial Virtual Assistants" />
        </Flex>

        <Flex
          padding="32px"
          flexDirection={"column"}
          alignItems={"flex-start"}
          borderRadius={"12px"}
          background="var(--wireframes-bg-2, #EEF0F3)"
        >
          <Text
            width="421px"
            color="var(--wireframes-black-900, #424B5A)"
            className={caladea?.className}
            fontSize="36px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="44px"
            letterSpacing="0.18px"
            mb={"37px"}
          >
            Don’t Know What’s Best For You?
          </Text>

          <Text
            width="390px"
            color="var(--wireframes-black-900, #424B5A)"
            className={cabin?.className}
            fontSize={"18px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"normal"}
            mb={"152px"}
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al, Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam.
          </Text>

          <Flex
            padding="16px 24px"
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            borderRadius={"8px"}
            background="var(--wireframes-black-900, #424B5A)"
          >
            <Text
              color="var(--wireframes-white, #FFF)"
              textAlign="center"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              letterSpacing="0.8px"
            >
              Find Your Perfect Fit
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Tasks;
