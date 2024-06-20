import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Multimedia Platform</Heading>
        <Text fontSize="xl">Generate images and videos from text inputs.</Text>
        <Button as={Link} to="/text-to-image" colorScheme="teal" size="lg">Text to Image</Button>
        <Button as={Link} to="/text-to-video" colorScheme="teal" size="lg">Text to Video</Button>
        <Button as={Link} to="/video-to-video" colorScheme="teal" size="lg">Video to Video</Button>
      </VStack>
    </Container>
  );
};

export default Index;