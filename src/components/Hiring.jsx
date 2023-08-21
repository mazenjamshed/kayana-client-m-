const { Flex, Text, Box } = require("@chakra-ui/react");

import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hiring = () => {
  return (
    <Flex w="100%" justifyContent={"center"}>
      <Flex
        //   mx="68px"
        bg="dark.900"
        borderRadius={"16px"}
        p="72px"
        // flexDir={"column"}
        position={"absolute"}
        h="842px"
        w="90%"
        justifyContent={"space-between"}
      >
        <Flex flexDir={"column"} w="547px">
          <Flex mb="16px">
            <Box p="6px 12px" bg="#fff" borderRadius={"4px 0px 0px 4px"}>
              <Text
                className={cabin?.className}
                lineHeight={"normal"}
                fontSize={"18px"}
                fontWeight={"600"}
                color="dark.900"
              >
                Hire a KAYA VA
              </Text>
            </Box>
            <Box
              p="6px 12px"
              borderRadius={"0px 4px 4px 0px"}
              border="1px solid #fff"
            >
              <Text
                className={cabin?.className}
                lineHeight={"normal"}
                fontSize={"18px"}
                fontWeight={"600"}
                color="#fff"
              >
                Hire a KAYA VA
              </Text>
            </Box>
          </Flex>

          <Text
            mb="32px"
            className={caladea?.className}
            lineHeight={"normal"}
            letterSpacing={"0.24px"}
            fontSize={"48px"}
            fontWeight={"700"}
            color={"#fff"}
            //   w="583px"
          >
            The Hiring Process
          </Text>
          <Text
            className={cabin?.className}
            lineHeight={"normal"}
            fontSize={"18px"}
            fontWeight={"400"}
            color={"#F6F8FC"}
            w="547px"
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit.Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corpsuscipit.Ut enim ad minima veniam, quis nostrum exsuscipit.
          </Text>
        </Flex>

        <Flex flexDir={"column"} color={"#fff"} w="433px">
          <Flex flexDir={"column"} gap={"44px"}>
            <Box>
              <Text
                className={caladea?.className}
                fontSize={"28px"}
                fontWeight={"700"}
                letterSpacing={"0.14px"}
                lineHeight={"normal"}
                mb="21px"
              >
                Share Your Needs
              </Text>
              <Text
                className={cabin?.className}
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"normal"}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corpsuscipit.Ut enim ad minima veniam, quis
                nostrum exsuscipit.
              </Text>
            </Box>
            <Box>
              <Text
                className={caladea?.className}
                fontSize={"28px"}
                fontWeight={"700"}
                letterSpacing={"0.14px"}
                lineHeight={"normal"}
                mb="21px"
              >
                Discover Your Perfect Fit
              </Text>
              <Text
                className={cabin?.className}
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"normal"}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corpsuscipit.Ut enim ad minima veniam, quis
                nostrum exsuscipit.
              </Text>
            </Box>
            <Box>
              <Text
                className={caladea?.className}
                fontSize={"28px"}
                fontWeight={"700"}
                letterSpacing={"0.14px"}
                lineHeight={"normal"}
                mb="21px"
              >
                Interview KAYA VAs
              </Text>
              <Text
                className={cabin?.className}
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"normal"}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corpsuscipit.Ut enim ad minima veniam, quis
                nostrum exsuscipit.
              </Text>
            </Box>
            <Box>
              <Text
                className={caladea?.className}
                fontSize={"28px"}
                fontWeight={"700"}
                letterSpacing={"0.14px"}
                lineHeight={"normal"}
                mb="21px"
              >
                Select Your Ideal Assistant
              </Text>
              <Text
                className={cabin?.className}
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"normal"}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corpsuscipit.Ut enim ad minima veniam, quis
                nostrum exsuscipit.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hiring;
