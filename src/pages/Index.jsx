import React from "react";
import { Box, Container, Flex, Heading, Text, Button, VStack, Image, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} as="header">
          <Flex w="full" justify="space-between">
            <Heading size="md">My Portfolio</Heading>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
          <Text>Welcome to my personal website!</Text>
        </VStack>
        <VStack spacing={8} as="main" py={20}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk3NzkzOTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
          <Heading as="h2" size="xl">
            John Doe
          </Heading>
          <Text textAlign="center">I'm a React developer with a passion for building beautiful and functional user interfaces.</Text>
          <Button colorScheme="blue">Contact Me</Button>
        </VStack>
        <VStack as="footer" py={10}>
          <Text>Connect with me on social media</Text>
          <Flex justify="center" gap={4}>
            <IconButton as="a" href="#" icon={<FaInstagram />} aria-label="Instagram" />
            <IconButton as="a" href="#" icon={<FaLinkedin />} aria-label="LinkedIn" />
            <IconButton as="a" href="#" icon={<FaGithub />} aria-label="GitHub" />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
