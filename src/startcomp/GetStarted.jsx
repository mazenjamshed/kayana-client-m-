import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const GetStarted = () => {
  return (
    <Flex padding="0px 68px" alignItems="flex-start" overflow={"hidden"}>
      <Flex
        width="45%"
        flexDirection="column"
        alignItems="flex-start"
        gap="32px"
      >
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          className={caladea?.className}
          fontSize="64px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          letterSpacing="0.32px"
          whiteSpace={"nowrap"}
          w={"100%"}
        >
          Let’s Get Started!
        </Text>

        <Text
          color="var(--wireframes-black-900, #424B5A)"
          className={cabin?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="normal"
          width="100%"
          overflow={"hidden"}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut al
        </Text>
      </Flex>

      {/* start of right side */}

      <Flex
        padding="106px 35px"
        flexDirection="column"
        alignItems="flex-start"
        gap="36px"
        width={"55%"}
        borderLeft={"2px solid #DBDEDF"}
      >
        <Flex
          width="664px"
          flexDirection="column"
          alignItems="flex-start"
          gap="28px"
          mb={"36px"}
        >
          <Flex
            paddingRight="0px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              textTransform="capitalize"
            >
              Choose Your Role
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 20L16 12L8 20"
                stroke="#424B5A"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>

          <Flex alignItems="flex-start">
            <Flex
              width="231px"
              padding="16px"
              paddingTop={"0px"}
              flexDirection="column"
              alignItems="center"
              gap="64px"
              borderRadius="4px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"24px"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="231"
                height="177"
                viewBox="0 0 231 177"
                fill="none"
              >
                <rect
                  x="-7"
                  y="-67"
                  width="244"
                  height="244"
                  rx="122"
                  fill="url(#paint0_radial_522_3305)"
                  fill-opacity="0.3"
                />
                <rect
                  x="36"
                  y="-24"
                  width="157"
                  height="158"
                  rx="78.5"
                  fill="#EEF0F3"
                  fill-opacity="0.4"
                />
                <rect
                  x="36.5"
                  y="-23.5"
                  width="156"
                  height="157"
                  rx="78"
                  stroke="#6A7485"
                  stroke-opacity="0.12"
                />
                <g filter="url(#filter0_d_522_3305)">
                  <rect
                    x="74"
                    y="14"
                    width="81"
                    height="82"
                    rx="40.5"
                    fill="#EEF0F3"
                  />
                  <rect
                    x="74.5"
                    y="14.5"
                    width="80"
                    height="81"
                    rx="40"
                    stroke="#6A7485"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_522_3305"
                    x="70"
                    y="10"
                    width="89"
                    height="90"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_522_3305"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_522_3305"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_522_3305"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(115 55) rotate(90) scale(122)"
                  >
                    <stop stop-color="#EEF0F3" />
                    <stop offset="1" stop-color="#EEF0F3" stop-opacity="0.57" />
                  </radialGradient>
                </defs>
              </svg>

              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Hire An Assistant
              </Text>
            </Flex>

            <Flex
              width="231px"
              padding="16px"
              paddingTop={"0px"}
              flexDirection="column"
              alignItems="center"
              gap="64px"
              borderRadius="4px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="231"
                height="177"
                viewBox="0 0 231 177"
                fill="none"
              >
                <rect
                  x="-7"
                  y="-67"
                  width="244"
                  height="244"
                  rx="122"
                  fill="url(#paint0_radial_522_3305)"
                  fill-opacity="0.3"
                />
                <rect
                  x="36"
                  y="-24"
                  width="157"
                  height="158"
                  rx="78.5"
                  fill="#EEF0F3"
                  fill-opacity="0.4"
                />
                <rect
                  x="36.5"
                  y="-23.5"
                  width="156"
                  height="157"
                  rx="78"
                  stroke="#6A7485"
                  stroke-opacity="0.12"
                />
                <g filter="url(#filter0_d_522_3305)">
                  <rect
                    x="74"
                    y="14"
                    width="81"
                    height="82"
                    rx="40.5"
                    fill="#EEF0F3"
                  />
                  <rect
                    x="74.5"
                    y="14.5"
                    width="80"
                    height="81"
                    rx="40"
                    stroke="#6A7485"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_522_3305"
                    x="70"
                    y="10"
                    width="89"
                    height="90"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_522_3305"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_522_3305"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_522_3305"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(115 55) rotate(90) scale(122)"
                  >
                    <stop stop-color="#EEF0F3" />
                    <stop offset="1" stop-color="#EEF0F3" stop-opacity="0.57" />
                  </radialGradient>
                </defs>
              </svg>

              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Become a Kaya VA
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Services Flex */}

        <Flex
          width="664px"
          flexDirection="column"
          alignItems="flex-start"
          gap="24px"
        >
          <Flex
            paddingRight="0px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              textTransform="capitalize"
            >
              Type Of Service
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 20L16 12L8 20"
                stroke="#424B5A"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>

          <Flex alignItems="flex-start" alignSelf="stretch">
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
              >
                Individual VA
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
              >
                Virtual Team
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                I’ll decide later
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* End Services Flex */}

        {/* Start of Type of Virtual assistant flex */}

        <Flex
          width="664px"
          flexDirection="column"
          alignItems="flex-start"
          gap="28px"
        >
          <Flex
            paddingRight="0px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              textTransform="capitalize"
            >
              What Type of Virtual Assistant You’re Interested In?
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 20L16 12L8 20"
                stroke="#424B5A"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>

          <Flex flexDirection="column" alignItems="flex-start" gap="24px">
            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="8.5" fill="white" stroke="#424B5A" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="5.5" fill="#424B5A" stroke="#424B5A" />
              </svg>
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                ml={"12px"}
              >
                Executive Assistant
              </Text>
            </Flex>

            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="8.5" fill="white" stroke="#424B5A" />
              </svg>
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                ml={"12px"}
              >
                Marketing Assistant
              </Text>
            </Flex>

            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="8.5" fill="white" stroke="#424B5A" />
              </svg>
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                ml={"12px"}
              >
                Customer Support Assistant
              </Text>
            </Flex>

            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="8.5" fill="white" stroke="#424B5A" />
              </svg>
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                ml={"12px"}
              >
                Technical Assistant
              </Text>
            </Flex>

            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="8.5" fill="white" stroke="#424B5A" />
              </svg>
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                ml={"12px"}
              >
                Financial Assistant
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* End of virtal assistant flex */}

        {/* start of desired skills flex */}
        <Flex width="664px" flexDirection="column" alignItems="flex-start">
          <Flex
            paddingRight="0px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
            mb={"24px"}
          >
            <Text
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              textTransform="capitalize"
            >
              Desired Skills for Your Virtual Assistant?
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 20L16 12L8 20"
                stroke="#424B5A"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
          <Input
            type="text"
            placeholder="Search a Skill"
            padding="16px 20px"
            isRequired={true}
            mb={"16px"}
          />
          <Text
            color="var(--wireframes-black-800, #6A7485)"
            className={cabin?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            mb={"16px"}
          >
            Popular Tasks For Executive Assistants
          </Text>

          <Flex mb={"16px"}>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
              >
                Calendar management
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
              >
                Inbox management
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
              >
                Presentation creation
              </Text>
            </Flex>
          </Flex>

          <Flex mb={"16px"}>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Meeting coordination
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Research and data analysis
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Documents creation
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Project management
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Travel arrangements
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Personal tasks
              </Text>
            </Flex>
            <Flex
              padding="12px 20px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              borderRadius="36px"
              border="1px solid var(--wireframes-stroke, #DBDEDF)"
              mr={"16px"}
            >
              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={cabin?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                mr={"16px"}
                whiteSpace={"nowrap"}
              >
                Other
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* End of Desired skills flex */}

        {/* start of Contact Details Flex */}

        <Flex width="664px" flexDirection="column" alignItems="flex-start">
          <Flex
            paddingRight="0px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
            mb={"28px"}
          >
            <Text
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              textTransform="capitalize"
            >
              Contact Details
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 20L16 12L8 20"
                stroke="#424B5A"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
          <Input
            type="text"
            placeholder="Email*"
            padding="16px 20px"
            isRequired={true}
            mb={"24px"}
          />
          <Input
            type="text"
            placeholder="Contact Name*"
            padding="16px 20px"
            isRequired={true}
          />
        </Flex>
        {/* End of Contact Details Flex */}
        <Button
          w={"25%"}
          borderRadius="4px"
          background="var(--wireframes-black-900, #424B5A)"
          color={"#FFFFFF"}
          padding="16px 32px"
          mb={"32px"}
          gap="10px"
        >
          Find a KAYA VA
        </Button>

        {/* End of flexes */}
      </Flex>
    </Flex>
  );
};
export default GetStarted;
