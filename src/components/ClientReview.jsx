import { Flex, Text } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ClientReview = () => {
  return (
    <Flex
      p="72px 68px 112px 68px"
      flexDir={"column"}
      alignItems={"flex-start"}
      gap={"10px"}
    >
      <Flex
        w="100%"
        p="44px"
        flexDir={"column"}
        alignItems={"flex-start"}
        borderRadius={"12px"}
        border="1px solid var(--wireframes-stroke, #DBDEDF)"
      >
        <Flex alignItems={"flex-start"} alignSelf={"stretch"}>
          <Text
            width="371px"
            color="var(--wireframes-black-900, #424B5A)"
            className={caladea?.className}
            fontSize={"48px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"normal"}
            letterSpacing={"0.24px"}
            mr={"44px"}
          >
            See What Clients Has To Say About KAYA VAs
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="266"
            viewBox="0 0 1 266"
            fill="none"
          >
            <path d="M0.5 0V266" stroke="#DBDEDF" />
          </svg>

          <Flex
            paddingBottom="0px"
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"24px"}
            flex="1 0 0"
            ml={"44px"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              alignSelf={"stretch"}
            >
              <Text
                w="41px"
                h="59px"
                flexShrink="0"
                color="var(--wireframes-black-900, #424B5A)"
                textAlign="center"
                className={cabin?.className}
                fontSize={"112px"}
                fontStyle={"normal"}
                fontWeight={"700"}
                lineHeight={"normal"}
              >
                “
              </Text>
              <Flex>
                <Flex
                  padding="12px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  borderRadius="36px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M6.5 8L2.5 12L6.5 16"
                      stroke="#6A7485"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12H22.5"
                      stroke="#6A7485"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Flex>

                <Flex
                  padding="12px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                  borderRadius="36px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M18.5 8L22.5 12L18.5 16"
                      stroke="#6A7485"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12H22.5"
                      stroke="#6A7485"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Flex>
              </Flex>
            </Flex>

            <Flex>
              <Text
                alignSelf={"stretch"}
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize={"18px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"normal"}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut al, Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut
                enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al,{" "}
              </Text>
            </Flex>
            {/* For Review Pic and Name */}
            <Flex alignItems={"center"} gap={"14px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <circle
                  cx="24.5"
                  cy="24"
                  r="23.5"
                  fill="#EEF0F3"
                  stroke="#6A7485"
                />
              </svg>

              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                gap={"6px"}
                alignSelf={"stretch"}
              >
                <Text
                  color="var(--wireframes-black-900, #424B5A)"
                  className={cabin?.className}
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  fontWeight={"700"}
                  lineHeight={"normal"}
                >
                  Peter McCain
                </Text>

                <Text
                  color="var(--wireframes-black-800, #6A7485)"
                  className={cabin?.className}
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"normal"}
                >
                  Founder and CEO at SeaCloud
                </Text>
              </Flex>

              {/* End Tag */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ClientReview;
