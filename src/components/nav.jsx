import {
  Box,
  Flex,
  Text,
  Button,
  Image as ChakraImage,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="1440px"
      padding="40px 68px"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      margin="0 auto"
    >
      <Flex alignItems="center" gap="1.5rem">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          alignContent="center"
          width="5.825rem"
          height="1.519rem"
        >
          {/* Composite Logo */}
          <ChakraImage src="/images/lo.svg" alt="LO" width={40} height={25} />
          <ChakraImage
            src="/images/go.svg"
            alt="GO"
            width={50}
            height={25}
            marginLeft="1px"
          />
        </Box>
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          fontFamily="Cabin"
          fontSize="1.125rem"
          fontWeight="400"
          lineHeight="normal"
        >
          Why us
        </Text>
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          fontFamily="Cabin"
          fontSize="1.125rem"
          fontWeight="400"
          lineHeight="normal"
        >
          Services
        </Text>
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          fontFamily="Cabin"
          fontSize="1.125rem"
          fontWeight="400"
          lineHeight="normal"
        >
          Can-do Assistants
        </Text>
      </Flex>

      {/* Right side */}
      <Flex alignItems="center">
        <Text
          color="var(--wireframes-black-900, #424B5A)"
          fontFamily="Cabin"
          fontSize="1rem"
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="0.04rem"
          marginRight="1.5rem"
        >
          Login
        </Text>
        <Button
          display="flex"
          padding="0.75rem 2rem"
          justifyContent="center"
          alignItems="center"
          gap={0.625}
          borderRadius="0.25rem"
          color="var(--wireframes-white, #FFF)"
          fontFamily="Cabin"
          fontSize="1rem"
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="0.04rem"
          bg="var(--wireframes-black-900, #424B5A)"
        >
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
