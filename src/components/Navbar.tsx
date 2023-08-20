import { Box, Flex, Spacer, Button, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex>
        <Link href="/">Home</Link>
        <Spacer />
        <Box>
          <Link href="/about" pr={2}>About</Link>
          <Link href="/contact" pr={2}>Contact</Link>
          <Button colorScheme="teal" variant="outline">Login</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
