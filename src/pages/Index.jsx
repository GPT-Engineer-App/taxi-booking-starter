import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">Welcome to Taxi Booking App</Text>
        <Text fontSize="xl">Book your ride with ease and comfort.</Text>
        <Button as={Link} to="/booking" colorScheme="teal" size="lg">
          Book a Taxi
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;