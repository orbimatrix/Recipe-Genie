import React from 'react';
import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  Badge,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  FaBrain,
  FaGlobe,
  FaCheck,
} from 'react-icons/fa';
import {
  MdVideoLibrary,
  MdSchedule,
  MdTrendingUp,
} from 'react-icons/md';

const FeaturesSection: React.FC = () => {
  const featureBg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  const features = [
    {
      icon: FaBrain,
      title: "AI-Powered Recommendations",
      description: "Get personalized recipe suggestions based on your preferences, dietary restrictions, and available ingredients using advanced AI.",
      color: "green",
      benefits: [
        "Smart ingredient matching",
        "Dietary preference learning",
        "Nutritional optimization"
      ]
    },
    {
      icon: FaGlobe,
      title: "Cultural Recipe Authenticity",
      description: "Explore authentic recipes from 50+ countries, verified by local chefs and cultural experts to ensure traditional accuracy.",
      color: "blue",
      benefits: [
        "Local chef verification",
        "Traditional techniques",
        "Cultural context stories"
      ]
    },
    {
      icon: MdVideoLibrary,
      title: "Step-by-Step Video Tutorials",
      description: "Master every technique with professional video tutorials that guide you through each step of the cooking process.",
      color: "purple",
      benefits: [
        "Professional chef demonstrations",
        "Multiple camera angles",
        "Slow-motion techniques"
      ]
    },
    {
      icon: MdSchedule,
      title: "Personalized Meal Planning",
      description: "Create weekly meal plans tailored to your schedule, budget, and nutritional goals with smart shopping lists.",
      color: "orange",
      benefits: [
        "Smart scheduling",
        "Budget optimization",
        "Shopping list generation"
      ]
    }
  ];

  return (
    <Box py={20} bg={featureBg}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Badge
              colorScheme="blue"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              <Icon as={MdTrendingUp} mr={2} />
              Why Choose Recipe Genie?
            </Badge>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Four Powerful Features That Transform Your Cooking
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              From AI-powered recommendations to authentic cultural recipes, 
              we provide everything you need to become a master chef.
            </Text>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {features.map((feature, index) => (
              <Card
                key={index}
                bg={cardBg}
                shadow="xl"
                borderRadius="2xl"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
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
                  bgGradient={`linear(to-r, ${feature.color}.400, ${feature.color}.600)`}
                />
                <CardBody p={8}>
                  <VStack spacing={6} align="center" textAlign="center">
                    <Box
                      p={4}
                      borderRadius="full"
                      bgGradient={`linear(to-br, ${feature.color}.100, ${feature.color}.200)`}
                      color={`${feature.color}.600`}
                    >
                      <Icon as={feature.icon} w={8} h={8} />
                    </Box>
                    <VStack spacing={3}>
                      <Heading size="lg" color={headingColor}>
                        {feature.title}
                      </Heading>
                      <Text color={secondaryTextColor} lineHeight="tall">
                        {feature.description}
                      </Text>
                    </VStack>
                    <List spacing={2} w="full">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <ListItem key={benefitIndex} fontSize="sm" color={secondaryTextColor}>
                          <ListIcon as={FaCheck} color={`${feature.color}.500`} />
                          {benefit}
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
