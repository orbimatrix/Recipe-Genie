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
  Image,
  Button,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  FaArrowLeft,
  FaCalendar,
  FaUser,
  FaTag,
  FaClipboardList,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const MealPlanningArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const mealPlanningSteps = [
    "Assess Your Schedule - Look at your week and identify busy days vs. days with more time to cook",
    "Plan Your Proteins - Choose 2-3 different proteins for the week to add variety",
    "Batch Prep Vegetables - Wash, chop, and store vegetables for easy access",
    "Create a Shopping List - Organize by store sections to save time and avoid impulse buys",
    "Prep Ahead - Cook grains, proteins, and sauces in advance when possible",
    "Plan for Leftovers - Design meals that can be repurposed for lunch or another dinner",
    "Keep It Flexible - Allow for 1-2 nights of flexibility for unexpected changes"
  ];

  const benefits = [
    "Reduces food waste by planning exactly what you need",
    "Saves money by avoiding impulse purchases and takeout",
    "Saves time by eliminating daily 'what's for dinner?' decisions",
    "Improves nutrition by planning balanced meals in advance",
    "Reduces stress by having a clear plan for the week"
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box py={8} bg={cardBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Button
              leftIcon={<Icon as={FaArrowLeft} />}
              variant="ghost"
              onClick={() => navigate('/blog')}
              alignSelf="start"
            >
              Back to Blog
            </Button>
            
            <VStack spacing={4} textAlign="center" maxW="4xl">
              <Badge colorScheme="orange" variant="subtle" px={4} py={2} borderRadius="full">
                Meal Planning
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                Meal Planning Made Simple: A Beginner's Guide
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                Learn how to plan your meals efficiently, reduce food waste, and save time in the kitchen.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>David Kim</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 8, 2024</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>7 min read</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Article Content */}
      <Box py={16}>
        <Container maxW="container.lg">
          <VStack spacing={12} align="start">
            {/* Featured Image */}
            <Box w="full" borderRadius="2xl" overflow="hidden" shadow="xl">
              <Image
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop"
                alt="Meal planning and prep"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                Meal planning might seem overwhelming at first, but it's one of the most effective ways to save time, 
                money, and reduce food waste. Whether you're cooking for one or feeding a family, a little planning 
                goes a long way in making your kitchen life more efficient and enjoyable.
              </Text>

              <Heading size="lg" color={headingColor}>
                Why Meal Planning Matters
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                The average person makes over 200 food-related decisions per day, and most of them happen when we're 
                hungry and pressed for time. Meal planning eliminates the daily stress of deciding what to eat and 
                ensures you always have the ingredients you need on hand.
              </Text>

              <List spacing={3} w="full">
                {benefits.map((benefit, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    {benefit}
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                The 7-Step Meal Planning Process
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Here's a simple, systematic approach to meal planning that works for beginners and experienced planners alike. 
                Start with these steps and adjust them to fit your lifestyle and preferences.
              </Text>

              <List spacing={4} w="full">
                {mealPlanningSteps.map((step, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    <Text as="span" fontWeight="semibold" color={headingColor}>
                      Step {index + 1}:
                    </Text>
                    <Text as="span"> {step}</Text>
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Meal Planning Templates
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Having a template can make meal planning much easier. Here are some popular approaches:
              </Text>

              <VStack spacing={4} align="start" w="full">
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color={headingColor}>
                      Theme Nights
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Monday: Meatless Monday, Tuesday: Taco Tuesday, Wednesday: Pasta Night, 
                      Thursday: Stir-fry, Friday: Pizza Night, Saturday: Grill Night, Sunday: Slow Cooker
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color={headingColor}>
                      Protein Rotation
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Choose 2-3 proteins for the week and plan meals around them. 
                      For example: Chicken (3 meals), Fish (2 meals), Vegetarian (2 meals)
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color={headingColor}>
                      Batch Cooking
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Cook large quantities of versatile ingredients (grains, proteins, vegetables) 
                      and mix and match throughout the week
                    </Text>
                  </VStack>
                </Box>
              </VStack>

              <Heading size="lg" color={headingColor}>
                Tips for Success
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Start small and build your meal planning skills gradually. Begin with planning just 3-4 meals per week, 
                and don't be afraid to repeat meals you love. The goal is to make your life easier, not to create 
                elaborate menus every week.
              </Text>

              <Box
                bg={accentColor.replace('.500', '.50')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor={accentColor}
                w="full"
              >
                <VStack spacing={3} align="start">
                  <HStack spacing={2}>
                    <Icon as={FaClipboardList} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Pro Tip
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    Keep a running list of meals your family loves. When you're stuck for ideas, 
                    refer back to this list. It's perfectly fine to have the same meals every few weeks!
                  </Text>
                </VStack>
              </Box>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Ready to start meal planning? Our AI can help you create personalized meal plans 
                  based on your preferences, dietary needs, and available ingredients.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaClipboardList} />}
                  onClick={() => navigate('/')}
                >
                  Create My Meal Plan
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default MealPlanningArticle;
