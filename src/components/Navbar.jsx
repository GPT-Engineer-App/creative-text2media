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
          <Button as={RouterLink} to="/video-to-video" variant="link" color="white">Video to Video</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;