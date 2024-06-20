import { Container, Heading, VStack, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const TextToImage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = () => {
    // Placeholder for image generation logic
    setImage("Generated image URL or base64 string");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Text to Image</Heading>
        <Textarea placeholder="Enter text to generate image" value={text} onChange={(e) => setText(e.target.value)} />
        <Button colorScheme="teal" onClick={handleGenerateImage}>Generate Image</Button>
        {image && <img src={image} alt="Generated" />}
      </VStack>
    </Container>
  );
};

export default TextToImage;