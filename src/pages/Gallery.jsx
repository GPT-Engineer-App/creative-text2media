import { Container, Heading, SimpleGrid, Image, Box } from "@chakra-ui/react";

const Gallery = () => {
  const images = [
    // Array of image URLs
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h2" size="xl" mb={6}>Gallery</Heading>
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        {images.map((src, index) => (
          <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={src} alt={`Gallery image ${index + 1}`} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Gallery;