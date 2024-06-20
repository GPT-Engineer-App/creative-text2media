import { Container, Heading, VStack, Input, Button, Image } from "@chakra-ui/react";
import { useState } from "react";

const ImageToVideo = () => {
  const [imageFile, setImageFile] = useState(null);
  const [generatedVideo, setGeneratedVideo] = useState(null);

  const handleGenerateVideo = () => {
    // Placeholder for image-to-video generation logic
    setGeneratedVideo("Generated video URL or base64 string");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Image to Video</Heading>
        <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        <Button colorScheme="teal" onClick={handleGenerateVideo} isDisabled={!imageFile}>Generate Video</Button>
        {generatedVideo && <video src={generatedVideo} controls />}
      </VStack>
    </Container>
  );
};

export default ImageToVideo;