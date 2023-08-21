import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { Caladea, Cabin } from "next/font/google";
import { useState } from "react";
const caladea = Caladea({ subsets: ["latin"], weight: ["400", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleResetShow = () => {
    setIsLogin(false);
  };
  const handleLoginShow = () => {
    setIsLogin(true);
  };

  return (
    <>
      {/* First Flex Wrap */}
      <Flex width="100%" flexDirection={"row"}>
        {isLogin && (
          <Flex
            width="50%"
            padding="0px 112px"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap={"19px"}
              w={"50%"}
              mb={"52px"}
            >
              {/* start flex */}

              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="19"
                  viewBox="0 0 29 19"
                  fill="none"
                >
                  <path
                    d="M4.75672 14.5913H10.0716V18.3257H0V0.773858H4.75672V14.5913Z"
                    fill="#6A7485"
                  />
                  <path
                    d="M20.2389 18.5C18.6371 18.5 17.1648 18.1183 15.822 17.3548C14.4791 16.5747 13.4112 15.5041 12.6184 14.1432C11.8418 12.7656 11.4535 11.2137 11.4535 9.48755C11.4535 7.76141 11.8418 6.21784 12.6184 4.85685C13.4112 3.47925 14.4791 2.40871 15.822 1.64523C17.1648 0.881743 18.6371 0.5 20.2389 0.5C21.8568 0.5 23.3291 0.881743 24.6559 1.64523C25.9987 2.40871 27.0585 3.47925 27.8351 4.85685C28.6117 6.21784 29 7.76141 29 9.48755C29 11.2137 28.6117 12.7656 27.8351 14.1432C27.0585 15.5041 25.9987 16.5747 24.6559 17.3548C23.313 18.1183 21.8407 18.5 20.2389 18.5ZM20.2389 13.9689C21.4523 13.9689 22.4069 13.5622 23.1026 12.749C23.8145 11.9357 24.1705 10.8485 24.1705 9.48755C24.1705 8.09336 23.8145 6.99793 23.1026 6.20124C22.4069 5.38797 21.4523 4.98133 20.2389 4.98133C19.0093 4.98133 18.0466 5.38797 17.3509 6.20124C16.6552 6.99793 16.3073 8.09336 16.3073 9.48755C16.3073 10.8651 16.6552 11.9606 17.3509 12.7739C18.0466 13.5705 19.0093 13.9689 20.2389 13.9689Z"
                    fill="#6A7485"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="19"
                  viewBox="0 0 36 19"
                  fill="none"
                >
                  <path
                    d="M11.4943 6.54979C11.2194 6.08506 10.8395 5.72821 10.3545 5.47925C9.88571 5.23029 9.32798 5.10581 8.68132 5.10581C7.48501 5.10581 6.53928 5.50415 5.84413 6.30083C5.16514 7.09751 4.82565 8.16805 4.82565 9.51245C4.82565 11.0228 5.18939 12.1763 5.91688 12.973C6.66053 13.7531 7.73559 14.1432 9.14206 14.1432C10.8072 14.1432 11.9954 13.3714 12.7067 11.8278H7.92959V8.31743H16.8049V13.0477C16.4331 13.9772 15.8834 14.8485 15.1559 15.6618C14.4446 16.4751 13.5393 17.1473 12.44 17.6784C11.3407 18.1929 10.0878 18.4502 8.68132 18.4502C6.96769 18.4502 5.44806 18.0768 4.12242 17.3299C2.81294 16.5664 1.79446 15.5124 1.06698 14.168C0.355659 12.8071 0 11.2552 0 9.51245C0 7.78631 0.355659 6.25104 1.06698 4.90664C1.79446 3.54564 2.81294 2.4917 4.12242 1.74481C5.43189 0.981327 6.94344 0.599584 8.65707 0.599584C10.8072 0.599584 12.5855 1.1307 13.992 2.19294C15.3984 3.25518 16.2714 4.70747 16.6109 6.54979H11.4943Z"
                    fill="#6A7485"
                  />
                  <path
                    d="M27.2459 18.5C25.6455 18.5 24.1743 18.1183 22.8325 17.3548C21.4907 16.5747 20.4237 15.5041 19.6316 14.1432C18.8556 12.7656 18.4676 11.2137 18.4676 9.48755C18.4676 7.76141 18.8556 6.21784 19.6316 4.85685C20.4237 3.47925 21.4907 2.40871 22.8325 1.64523C24.1743 0.881743 25.6455 0.5 27.2459 0.5C28.8626 0.5 30.3337 0.881743 31.6593 1.64523C33.0011 2.40871 34.06 3.47925 34.836 4.85685C35.612 6.21784 36 7.76141 36 9.48755C36 11.2137 35.612 12.7656 34.836 14.1432C34.06 15.5041 33.0011 16.5747 31.6593 17.3548C30.3175 18.1183 28.8464 18.5 27.2459 18.5ZM27.2459 13.9689C28.4584 13.9689 29.4122 13.5622 30.1074 12.749C30.8187 11.9357 31.1744 10.8485 31.1744 9.48755C31.1744 8.09336 30.8187 6.99792 30.1074 6.20124C29.4122 5.38796 28.4584 4.98133 27.2459 4.98133C26.0173 4.98133 25.0554 5.38796 24.3602 6.20124C23.6651 6.99792 23.3175 8.09336 23.3175 9.48755C23.3175 10.8651 23.6651 11.9606 24.3602 12.7739C25.0554 13.5705 26.0173 13.9689 27.2459 13.9689Z"
                    fill="#6A7485"
                  />
                </svg>
              </Flex>

              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={caladea?.className}
                fontSize="36px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                letterSpacing="0.18px"
                whiteSpace={"nowrap"}
              >
                Login to KAYA VA
              </Text>
            </Flex>

            {/* End Flex */}

            <Flex flexDirection="column" w={"100%"} alignItems={"center"}>
              {/* start flex */}

              <Flex w={"100%"} mb={"32px"}>
                {/* for two flexes */}

                <Flex
                  padding="12px"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  flex="1 0 0"
                  borderBottom="3px solid var(--wireframes-black-900, #424B5A)"
                  w={"50%"}
                >
                  <Text
                    color="var(--wireframes-black-900, #424B5A)"
                    className={cabin?.className}
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                  >
                    For Clients
                  </Text>
                </Flex>
                {/* end first flex */}

                <Flex
                  padding="12px"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  flex="1 0 0"
                  borderBottom="1px solid var(--wireframes-stroke, #DBDEDF)"
                  w={"50%"}
                >
                  <Text
                    color="var(--wireframes-black-900, #424B5A)"
                    className={cabin?.className}
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                    whiteSpace="nowrap"
                  >
                    For Virtual Assistants
                  </Text>
                </Flex>

                {/* second flex end */}
              </Flex>
              {/* two flexes end */}

              <Input
                type="text"
                placeholder="Email*"
                padding="16px 20px"
                isRequired={true}
                mb={"24px"}
              />
              <Input
                type="password"
                placeholder="Password*"
                padding="16px 20px"
                mb={"24px"}
                isRequired={true}
              />

              <Button
                w={"100%"}
                borderRadius="4px"
                background="var(--wireframes-black-900, #424B5A)"
                color={"#FFFFFF"}
                padding="16px 32px"
                mb={"32px"}
              >
                Get Started
              </Button>

              <Text
                color="var(--wireframes-black-800, #6A7485)"
                className={cabin?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                onClick={handleResetShow}
              >
                Forgot Your Password?
              </Text>
            </Flex>
            {/* end full flex of it */}
          </Flex>
        )}
        {/* 50% */}

        {/* Reset Password Setup */}

        {!isLogin && (
          <Flex
            width="50%"
            padding="0px 112px"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              w={"50%"}
              mb={"52px"}
            >
              <Flex mb={"32px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="19"
                  viewBox="0 0 29 19"
                  fill="none"
                >
                  <path
                    d="M4.75672 14.5913H10.0716V18.3257H0V0.773858H4.75672V14.5913Z"
                    fill="#6A7485"
                  />
                  <path
                    d="M20.2389 18.5C18.6371 18.5 17.1648 18.1183 15.822 17.3548C14.4791 16.5747 13.4112 15.5041 12.6184 14.1432C11.8418 12.7656 11.4535 11.2137 11.4535 9.48755C11.4535 7.76141 11.8418 6.21784 12.6184 4.85685C13.4112 3.47925 14.4791 2.40871 15.822 1.64523C17.1648 0.881743 18.6371 0.5 20.2389 0.5C21.8568 0.5 23.3291 0.881743 24.6559 1.64523C25.9987 2.40871 27.0585 3.47925 27.8351 4.85685C28.6117 6.21784 29 7.76141 29 9.48755C29 11.2137 28.6117 12.7656 27.8351 14.1432C27.0585 15.5041 25.9987 16.5747 24.6559 17.3548C23.313 18.1183 21.8407 18.5 20.2389 18.5ZM20.2389 13.9689C21.4523 13.9689 22.4069 13.5622 23.1026 12.749C23.8145 11.9357 24.1705 10.8485 24.1705 9.48755C24.1705 8.09336 23.8145 6.99793 23.1026 6.20124C22.4069 5.38797 21.4523 4.98133 20.2389 4.98133C19.0093 4.98133 18.0466 5.38797 17.3509 6.20124C16.6552 6.99793 16.3073 8.09336 16.3073 9.48755C16.3073 10.8651 16.6552 11.9606 17.3509 12.7739C18.0466 13.5705 19.0093 13.9689 20.2389 13.9689Z"
                    fill="#6A7485"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="19"
                  viewBox="0 0 36 19"
                  fill="none"
                >
                  <path
                    d="M11.4943 6.54979C11.2194 6.08506 10.8395 5.72821 10.3545 5.47925C9.88571 5.23029 9.32798 5.10581 8.68132 5.10581C7.48501 5.10581 6.53928 5.50415 5.84413 6.30083C5.16514 7.09751 4.82565 8.16805 4.82565 9.51245C4.82565 11.0228 5.18939 12.1763 5.91688 12.973C6.66053 13.7531 7.73559 14.1432 9.14206 14.1432C10.8072 14.1432 11.9954 13.3714 12.7067 11.8278H7.92959V8.31743H16.8049V13.0477C16.4331 13.9772 15.8834 14.8485 15.1559 15.6618C14.4446 16.4751 13.5393 17.1473 12.44 17.6784C11.3407 18.1929 10.0878 18.4502 8.68132 18.4502C6.96769 18.4502 5.44806 18.0768 4.12242 17.3299C2.81294 16.5664 1.79446 15.5124 1.06698 14.168C0.355659 12.8071 0 11.2552 0 9.51245C0 7.78631 0.355659 6.25104 1.06698 4.90664C1.79446 3.54564 2.81294 2.4917 4.12242 1.74481C5.43189 0.981327 6.94344 0.599584 8.65707 0.599584C10.8072 0.599584 12.5855 1.1307 13.992 2.19294C15.3984 3.25518 16.2714 4.70747 16.6109 6.54979H11.4943Z"
                    fill="#6A7485"
                  />
                  <path
                    d="M27.2459 18.5C25.6455 18.5 24.1743 18.1183 22.8325 17.3548C21.4907 16.5747 20.4237 15.5041 19.6316 14.1432C18.8556 12.7656 18.4676 11.2137 18.4676 9.48755C18.4676 7.76141 18.8556 6.21784 19.6316 4.85685C20.4237 3.47925 21.4907 2.40871 22.8325 1.64523C24.1743 0.881743 25.6455 0.5 27.2459 0.5C28.8626 0.5 30.3337 0.881743 31.6593 1.64523C33.0011 2.40871 34.06 3.47925 34.836 4.85685C35.612 6.21784 36 7.76141 36 9.48755C36 11.2137 35.612 12.7656 34.836 14.1432C34.06 15.5041 33.0011 16.5747 31.6593 17.3548C30.3175 18.1183 28.8464 18.5 27.2459 18.5ZM27.2459 13.9689C28.4584 13.9689 29.4122 13.5622 30.1074 12.749C30.8187 11.9357 31.1744 10.8485 31.1744 9.48755C31.1744 8.09336 30.8187 6.99792 30.1074 6.20124C29.4122 5.38796 28.4584 4.98133 27.2459 4.98133C26.0173 4.98133 25.0554 5.38796 24.3602 6.20124C23.6651 6.99792 23.3175 8.09336 23.3175 9.48755C23.3175 10.8651 23.6651 11.9606 24.3602 12.7739C25.0554 13.5705 26.0173 13.9689 27.2459 13.9689Z"
                    fill="#6A7485"
                  />
                </svg>
              </Flex>

              <Text
                color="var(--wireframes-black-900, #424B5A)"
                className={caladea?.className}
                fontSize="36px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                letterSpacing="0.18px"
                mb={"20px"}
                whiteSpace={"nowrap"}
              >
                Reset Your Password
              </Text>

              <Text
                width="442px"
                color="var(--wireframes-black-900, #424B5A)"
                textAlign="center"
                className={caladea?.className}
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al Ut.
              </Text>
            </Flex>

            <Input
              type="text"
              placeholder="Enter Your Email*"
              padding="16px 20px"
              isRequired={true}
              mb={"24px"}
            />
            <Button
              w={"100%"}
              borderRadius="4px"
              background="var(--wireframes-black-900, #424B5A)"
              color={"#FFFFFF"}
              padding="16px 32px"
              mb={"32px"}
            >
              Send Reset Instructions
            </Button>
            <Text
              color="var(--wireframes-black-800, #6A7485)"
              className={cabin?.className}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              onClick={handleLoginShow}
            >
              Back To Login
            </Text>
          </Flex>
        )}
        {/* end of reset password setup */}

        {/* fOR SECOND FLEX PART */}

        <Flex
          width="50%"
          background="var(--wireframes-stroke, #DBDEDF)"
          height="100vh"
        >
          <Flex position="absolute" right="110px" top="30px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="92"
              viewBox="0 0 93 92"
              fill="none"
            >
              <path
                d="M17.888 9H37.496L25.112 45.808H37.152V82.272H0V49.248L17.888 9ZM72.928 9H92.536L80.152 45.808H92.192V82.272H55.04V49.248L72.928 9Z"
                fill="#424B5A"
              />
            </svg>
          </Flex>

          <Flex
            padding="20px"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="32px"
            position="absolute"
            right="123px"
            bottom="130px"
            borderRadius="12px"
            border="1px solid var(--wireframes-black-800px, #6rpx7485px)"
            background="var(--wireframes-white, #FFF)"
          >
            <Text
              width="434px"
              color="var(--wireframes-black-900, #424B5A)"
              className={cabin?.className}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
            >
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut al, Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut al
            </Text>

            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
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
                ml={"14px"}
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
            </Flex>
          </Flex>
        </Flex>
        {/* 100% */}
      </Flex>
    </>
  );
};
export default Login;
