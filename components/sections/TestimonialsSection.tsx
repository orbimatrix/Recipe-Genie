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
  HStack,
  Avatar,
} from '@chakra-ui/react';
import {
  FaQuoteLeft,
  FaStar,
  FaBrain,
  FaGlobe,
} from 'react-icons/fa';
import {
  MdSchedule,
} from 'react-icons/md';

const TestimonialsSection: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Home Cook",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Recipe Genie has completely changed how I cook! The AI recommendations are spot-on, and the video tutorials helped me master techniques I never thought I could learn. My family can't believe the transformation in my cooking skills.",
      badge: {
        icon: FaBrain,
        text: "AI Recommendations",
        colorScheme: "green"
      }
    },
    {
      name: "Marco Rodriguez",
      role: "Executive Chef",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "As a professional chef, I'm impressed by the authenticity of the cultural recipes. The traditional techniques and local chef verification make this app invaluable for expanding my culinary repertoire.",
      badge: {
        icon: FaGlobe,
        text: "Cultural Authenticity",
        colorScheme: "blue"
      }
    },
    {
      name: "Emma Thompson",
      role: "Food Blogger",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The meal planning feature is a game-changer! It saves me hours every week and the shopping lists are perfectly organized. The video tutorials are so clear that even complex dishes feel approachable.",
      badge: {
        icon: MdSchedule,
        text: "Meal Planning",
        colorScheme: "orange"
      }
    }
  ];

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Badge
              colorScheme="purple"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              <Icon as={FaQuoteLeft} mr={2} />
              What Our Users Say
            </Badge>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Loved by Home Cooks, Chefs, and Food Enthusiasts
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              Join thousands of satisfied users who have transformed their cooking experience.
            </Text>
          </VStack>

          {/* Testimonials Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {testimonials.map((testimonial, index) => (
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
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack spacing={4}>
                      <Avatar
                        size="lg"
                        name={testimonial.name}
                        src={testimonial.avatar}
                      />
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" color={headingColor}>{testimonial.name}</Text>
                        <Text fontSize="sm" color={secondaryTextColor}>{testimonial.role}</Text>
                        <HStack spacing={1}>
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} as={FaStar} color="yellow.400" />
                          ))}
                        </HStack>
                      </VStack>
                    </HStack>
                    <Text color={secondaryTextColor} lineHeight="tall" fontStyle="italic">
                      "{testimonial.quote}"
                    </Text>
                    <Badge colorScheme={testimonial.badge.colorScheme} variant="subtle" fontSize="xs">
                      <Icon as={testimonial.badge.icon} mr={1} />
                      {testimonial.badge.text}
                    </Badge>
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

export default TestimonialsSection;
