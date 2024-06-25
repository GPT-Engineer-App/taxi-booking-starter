import { Container, VStack, Text, Box } from "@chakra-ui/react";

const Taxis = () => {
  const availableTaxis = [
    { id: 1, name: "Taxi 1", driver: "John Doe" },
    { id: 2, name: "Taxi 2", driver: "Jane Smith" },
    { id: 3, name: "Taxi 3", driver: "Bob Johnson" },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Available Taxis</Text>
        {availableTaxis.map((taxi) => (
          <Box key={taxi.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text fontSize="xl">{taxi.name}</Text>
            <Text>Driver: {taxi.driver}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Taxis;