import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Heading,
  Badge,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
  Divider,
} from '@chakra-ui/react';
import {
  FaCheck,
  FaCrown,
  FaRocket,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa';

const PricingSection: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI-powered cooking",
      icon: FaRocket,
      color: "gray",
      features: [
        "5 AI recipe generations per day",
        "Basic video tutorials",
        "Access to 100+ recipes",
        "Community support",
        "Mobile app access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For serious home cooks who want unlimited access",
      icon: FaStar,
      color: "blue",
      features: [
        "Unlimited AI recipe generations",
        "Premium video tutorials",
        "Access to 10,000+ recipes",
        "Priority support",
        "Advanced meal planning",
        "Shopping list generation",
        "Nutritional analysis",
        "Recipe sharing & collaboration"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Chef",
      price: "$19.99",
      period: "per month",
      description: "For professional chefs and culinary enthusiasts",
      icon: FaCrown,
      color: "purple",
      features: [
        "Everything in Pro",
        "Professional chef consultations",
        "Custom recipe development",
        "Advanced analytics & insights",
        "API access for integrations",
        "White-label options",
        "Priority feature requests",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Badge
              colorScheme="green"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              <Icon as={FaStar} mr={2} />
              Simple Pricing
            </Badge>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Choose Your Perfect Plan
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              Start free and upgrade as you grow. All plans include our core AI-powered 
              recipe generation and video tutorials.
            </Text>
          </VStack>

          {/* Pricing Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {plans.map((plan, index) => (
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
                border={plan.popular ? "2px solid" : "1px solid"}
                borderColor={plan.popular ? `${plan.color}.300` : "gray.200"}
              >
                {plan.popular && (
                  <Box
                    position="absolute"
                    top="0"
                    left="50%"
                    transform="translateX(-50%)"
                    bgGradient={`linear(to-r, ${plan.color}.400, ${plan.color}.600)`}
                    color="white"
                    px={6}
                    py={2}
                    borderRadius="0 0 12px 12px"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Most Popular
                  </Box>
                )}
                
                <CardHeader pb={4}>
                  <VStack spacing={4} align="center">
                    <Box
                      p={4}
                      borderRadius="full"
                      bgGradient={`linear(to-br, ${plan.color}.100, ${plan.color}.200)`}
                      color={`${plan.color}.600`}
                    >
                      <Icon as={plan.icon} w={8} h={8} />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="lg" color={headingColor}>
                        {plan.name}
                      </Heading>
                      <Text color={secondaryTextColor} textAlign="center" fontSize="sm">
                        {plan.description}
                      </Text>
                    </VStack>
                    <VStack spacing={1}>
                      <HStack align="baseline">
                        <Text fontSize="4xl" fontWeight="bold" color={headingColor}>
                          {plan.price}
                        </Text>
                        <Text fontSize="sm" color={secondaryTextColor}>
                          {plan.period}
                        </Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </CardHeader>

                <CardBody pt={0}>
                  <VStack spacing={6}>
                    <List spacing={3} w="full">
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} fontSize="sm" color={secondaryTextColor}>
                          <ListIcon as={FaCheck} color={`${plan.color}.500`} />
                          {feature}
                        </ListItem>
                      ))}
                    </List>

                    <Divider />

                    <Button
                      w="full"
                      colorScheme={plan.color}
                      size="lg"
                      rightIcon={<Icon as={FaArrowRight} />}
                      variant={plan.popular ? "solid" : "outline"}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      transition="all 0.3s ease"
                    >
                      {plan.cta}
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {/* Additional Info */}
          <VStack spacing={6} textAlign="center" maxW="2xl">
            <Text fontSize="sm" color={secondaryTextColor}>
              All plans include a 14-day free trial. Cancel anytime. No hidden fees.
            </Text>
            <HStack spacing={8} wrap="wrap" justify="center">
              <HStack spacing={2}>
                <Icon as={FaCheck} color="green.500" />
                <Text fontSize="sm" color={secondaryTextColor}>14-day free trial</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaCheck} color="green.500" />
                <Text fontSize="sm" color={secondaryTextColor}>Cancel anytime</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaCheck} color="green.500" />
                <Text fontSize="sm" color={secondaryTextColor}>No setup fees</Text>
              </HStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default PricingSection;
