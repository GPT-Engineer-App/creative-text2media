import { Container, Heading, VStack, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const TextToVideo = () => {
  const [text, setText] = useState("");
  const [video, setVideo] = useState(null);

  const handleGenerateVideo = () => {
    // Placeholder for video generation logic
    setVideo("Generated video URL or base64 string");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Text to Video</Heading>
        <Textarea placeholder="Enter text to generate video" value={text} onChange={(e) => setText(e.target.value)} />
        <Button colorScheme="teal" onClick={handleGenerateVideo}>Generate Video</Button>
        {video && <video src={video} controls />}
      </VStack>
    </Container>
  );
};

export default TextToVideo;