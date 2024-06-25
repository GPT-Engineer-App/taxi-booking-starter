import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Taxi Booking
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/booking" color="white" mx={2}>
            Book a Taxi
          </Link>
          <Link as={RouterLink} to="/taxis" color="white" mx={2}>
            Available Taxis
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;