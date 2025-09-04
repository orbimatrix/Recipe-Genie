import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Badge,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaBrain,
  FaPlay,
  FaUtensils,
  FaArrowRight,
} from 'react-icons/fa';

const HowItWorksSection: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');

  const steps = [
    {
      step: "01",
      icon: FaSearch,
      title: "Enter Your Ingredients",
      description: "Simply list the ingredients you have available in your kitchen. Our AI will understand what you're working with.",
      color: "blue"
    },
    {
      step: "02", 
      icon: FaBrain,
      title: "AI Analyzes & Recommends",
      description: "Our advanced AI analyzes your ingredients and suggests the best recipes based on your preferences and dietary needs.",
      color: "green"
    },
    {
      step: "03",
      icon: FaPlay,
      title: "Watch Video Tutorials",
      description: "Follow step-by-step video tutorials with professional chefs guiding you through each cooking technique.",
      color: "purple"
    },
    {
      step: "04",
      icon: FaUtensils,
      title: "Cook & Enjoy",
      description: "Create delicious meals with confidence. Save your favorites and share your culinary masterpieces.",
      color: "orange"
    }
  ];

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg={bgColor}>
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Section Header */}
          <VStack spacing={{ base: 3, md: 4 }} textAlign="center" maxW="3xl" px={{ base: 4, md: 0 }}>
            <Badge
              colorScheme="purple"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              <Icon as={FaBrain} mr={2} />
              How It Works
            </Badge>
            <Heading
              as="h2"
              size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              From Ingredients to Masterpiece in 4 Simple Steps
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              Our AI-powered platform makes cooking accessible to everyone, 
              regardless of skill level. Here's how we transform your ingredients into amazing meals.
            </Text>
          </VStack>

          {/* Steps Grid */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 8 }} w="full">
            {steps.map((step, index) => (
              <Card
                key={index}
                bg={cardBg}
                shadow="xl"
                borderRadius="2xl"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                }}
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  h="4px"
                  bgGradient={`linear(to-r, ${step.color}.400, ${step.color}.600)`}
                />
                <CardBody p={{ base: 6, md: 8 }}>
                  <Flex direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 6 }} align="start">
                    {/* Step Number & Icon */}
                    <VStack spacing={4} align="center" minW={{ base: "100px", md: "120px" }}>
                      <Box
                        position="relative"
                        w={{ base: "60px", md: "80px" }}
                        h={{ base: "60px", md: "80px" }}
                        borderRadius="full"
                        bgGradient={`linear(to-br, ${step.color}.100, ${step.color}.200)`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text
                          position="absolute"
                          top="-8px"
                          right="-8px"
                          fontSize="xs"
                          fontWeight="bold"
                          color="white"
                          bg={`${step.color}.500`}
                          borderRadius="full"
                          w="24px"
                          h="24px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {step.step}
                        </Text>
                        <Icon as={step.icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color={`${step.color}.600`} />
                      </Box>
                    </VStack>

                    {/* Content */}
                    <VStack spacing={{ base: 3, md: 4 }} align="start" flex={1}>
                      <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
                        {step.title}
                      </Heading>
                      <Text color={secondaryTextColor} lineHeight="tall" fontSize={{ base: "sm", md: "md" }}>
                        {step.description}
                      </Text>
                    </VStack>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {/* Process Flow */}
          <Box w="full" maxW="4xl" mx="auto" px={{ base: 4, md: 0 }}>
            <VStack spacing={{ base: 6, md: 8 }}>
              <Heading
                as="h3"
                size={{ base: "md", sm: "lg", md: "xl" }}
                fontWeight="bold"
                color={headingColor}
                textAlign="center"
              >
                The Complete Cooking Journey
              </Heading>
              <HStack
                spacing={{ base: 2, md: 4 }}
                wrap="wrap"
                justify="center"
                align="center"
              >
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <VStack spacing={2} minW={{ base: "100px", md: "120px" }}>
                      <Box
                        w={{ base: "50px", md: "60px" }}
                        h={{ base: "50px", md: "60px" }}
                        borderRadius="full"
                        bgGradient={`linear(to-br, ${step.color}.100, ${step.color}.200)`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="3px solid"
                        borderColor={`${step.color}.300`}
                      >
                        <Icon as={step.icon} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} color={`${step.color}.600`} />
                      </Box>
                      <Text fontSize={{ base: "2xs", md: "xs" }} color={secondaryTextColor} textAlign="center" fontWeight="medium">
                        {step.title}
                      </Text>
                    </VStack>
                    {index < steps.length - 1 && (
                      <Icon 
                        as={FaArrowRight} 
                        color={secondaryTextColor} 
                        w={{ base: 3, md: 4 }} 
                        h={{ base: 3, md: 4 }}
                        display={{ base: "none", md: "block" }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
