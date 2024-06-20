import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Multimedia Platform</Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/text-to-image" variant="link" color="white" mr={4}>Text to Image</Button>
          <Button as={RouterLink} to="/text-to-video" variant="link" color="white" mr={4}>Text to Video</Button>
          <Button as={RouterLink} to="/video-to-video" variant="link" color="white" mr={4}>Video to Video</Button>
          <Button as={RouterLink} to="/image-to-video" variant="link" color="white" mr={4}>Image to Video</Button>
          <Button as={RouterLink} to="/gallery" variant="link" color="white" mr={4}>Gallery</Button>
          <Button as={RouterLink} to="/login" variant="link" color="white" mr={4}>Login</Button>
          <Button as={RouterLink} to="/signup" variant="link" color="white">Signup</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;