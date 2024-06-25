import { Container, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Booking = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking from", pickup, "to", dropoff);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <FormControl id="pickup">
          <FormLabel>Pickup Location</FormLabel>
          <Input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} />
        </FormControl>
        <FormControl id="dropoff">
          <FormLabel>Drop-off Location</FormLabel>
          <Input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleBooking}>
          Find Taxis
        </Button>
      </VStack>
    </Container>
  );
};

export default Booking;