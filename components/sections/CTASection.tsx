import React from 'react';
import {
  Box,
  Container,
  VStack,
  Text,
  Button,
  Heading,
  Icon,
  Stack,
  HStack,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaDownload,
} from 'react-icons/fa';

interface CTASectionProps {
  onStartCooking: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onStartCooking }) => {
  return (
    <Box py={20} bgGradient="linear(to-br, green.500, blue.600)" position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.1}
        bg="whiteAlpha.200"
      />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12} textAlign="center">
          <VStack spacing={6} maxW="4xl">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="white"
            >
              Ready to Transform Your Cooking Experience?
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.900"
              lineHeight="tall"
              maxW="2xl"
            >
              Join thousands of home cooks, professional chefs, and food enthusiasts 
              who have discovered the joy of AI-powered cooking with Recipe Genie.
            </Text>
          </VStack>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={6}
            align="center"
          >
            <Button
              size="xl"
              bg="white"
              color="green.600"
              rightIcon={<Icon as={FaArrowRight} />}
              onClick={onStartCooking}
              px={12}
              py={8}
              fontSize="xl"
              fontWeight="bold"
              borderRadius="2xl"
              boxShadow="2xl"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "3xl",
                bg: "gray.50",
              }}
              transition="all 0.3s ease"
            >
              Start Cooking Now
            </Button>
           
          </Stack>

          {/* Trust Indicators */}
          <HStack spacing={12} wrap="wrap" justify="center" color="whiteAlpha.800">
            <VStack spacing={1}>
              <Text fontSize="3xl" fontWeight="bold" color="white">1</Text>
              <Text fontSize="sm">Recipes Generated</Text>
            </VStack>
            <VStack spacing={1}>
              <Text fontSize="3xl" fontWeight="bold" color="white">1+</Text>
              <Text fontSize="sm">Happy Users</Text>
            </VStack>
            <VStack spacing={1}>
              <Text fontSize="3xl" fontWeight="bold" color="white">1+</Text>
              <Text fontSize="sm">Countries</Text>
            </VStack>
            <VStack spacing={1}>
              <Text fontSize="3xl" fontWeight="bold" color="white">0.0★</Text>
              <Text fontSize="sm">User Rating</Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default CTASection;
