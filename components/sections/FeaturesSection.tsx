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
  FaBook,
  FaEdit,
  FaShare,
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
      icon: FaBook,
      title: "Personal Recipe Collection",
      description: "Upload, organize, and manage your personal recipe collection with photos, detailed instructions, and custom tags.",
      color: "green",
      benefits: [
        "Upload family recipes",
        "Organize by categories",
        "Search and filter easily"
      ]
    },
    {
      icon: FaBrain,
      title: "AI-Powered Recipe Generation",
      description: "Generate new recipes based on your available ingredients and preferences using advanced AI technology.",
      color: "blue",
      benefits: [
        "Smart ingredient matching",
        "Dietary preference learning",
        "Creative recipe suggestions"
      ]
    },
    {
      icon: FaEdit,
      title: "Easy Recipe Management",
      description: "Edit, update, and customize your recipes with our intuitive interface. Add notes, modify ingredients, and track changes.",
      color: "purple",
      benefits: [
        "Quick editing tools",
        "Version history",
        "Custom modifications"
      ]
    },
    {
      icon: FaShare,
      title: "Share & Collaborate",
      description: "Share your favorite recipes with friends and family, or keep them private in your personal collection.",
      color: "orange",
      benefits: [
        "Easy sharing options",
        "Privacy controls",
        "Family collaboration"
      ]
    }
  ];

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg={featureBg}>
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Section Header */}
          <VStack spacing={{ base: 3, md: 4 }} textAlign="center" maxW="3xl" px={{ base: 4, md: 0 }}>
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
              size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Everything You Need to Manage Your Recipes
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              From uploading family recipes to AI-powered generation, 
              we provide everything you need to build and manage your perfect recipe collection.
            </Text>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} w="full">
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
                <CardBody p={{ base: 6, md: 8 }}>
                  <VStack spacing={{ base: 4, md: 6 }} align="center" textAlign="center">
                    <Box
                      p={{ base: 3, md: 4 }}
                      borderRadius="full"
                      bgGradient={`linear(to-br, ${feature.color}.100, ${feature.color}.200)`}
                      color={`${feature.color}.600`}
                    >
                      <Icon as={feature.icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />
                    </Box>
                    <VStack spacing={{ base: 2, md: 3 }}>
                      <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
                        {feature.title}
                      </Heading>
                      <Text color={secondaryTextColor} lineHeight="tall" fontSize={{ base: "sm", md: "md" }}>
                        {feature.description}
                      </Text>
                    </VStack>
                    <List spacing={2} w="full">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <ListItem key={benefitIndex} fontSize={{ base: "xs", md: "sm" }} color={secondaryTextColor}>
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
