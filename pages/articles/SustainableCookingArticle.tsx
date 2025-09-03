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
  FaLeaf,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const SustainableCookingArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const sustainablePractices = [
    "Plan meals to reduce food waste - only buy what you need and use everything you buy",
    "Choose seasonal and local ingredients - reduces transportation emissions and supports local farmers",
    "Embrace plant-based proteins - beans, lentils, and tofu have a much lower environmental impact than meat",
    "Use every part of vegetables - stems, leaves, and peels can often be used in stocks, pestos, or stir-fries",
    "Compost food scraps - turn kitchen waste into nutrient-rich soil for your garden",
    "Buy in bulk when possible - reduces packaging waste and often saves money",
    "Preserve seasonal abundance - freeze, can, or dry excess produce to enjoy year-round",
    "Choose sustainable seafood - look for MSC or ASC certified options",
    "Reduce energy consumption - use lids on pots, match pan size to burner size, and use residual heat"
  ];

  const wasteReductionTips = [
    "Store produce properly to extend shelf life - learn which items go in the fridge vs. counter",
    "Use the 'first in, first out' method - rotate older items to the front of your pantry and fridge",
    "Get creative with leftovers - transform yesterday's dinner into today's lunch",
    "Make vegetable stock from scraps - save onion peels, carrot tops, and herb stems",
    "Freeze excess ingredients - herbs, citrus zest, and even leftover wine can be frozen",
    "Share excess food - if you have too much, share with neighbors or donate to food banks"
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
              <Badge colorScheme="green" variant="subtle" px={4} py={2} borderRadius="full">
                Sustainability
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                Sustainable Cooking: Reducing Your Kitchen's Environmental Impact
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                Simple changes you can make in your kitchen to cook more sustainably and reduce food waste.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>Sarah Chen</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 3, 2024</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>6 min read</Text>
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
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop"
                alt="Sustainable cooking and fresh vegetables"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                The kitchen is one of the most impactful places in our homes when it comes to environmental sustainability. 
                From the food we choose to buy to how we prepare and store it, every decision we make can either 
                contribute to or help reduce our environmental footprint. The good news? Sustainable cooking doesn't 
                mean sacrificing flavor or convenience—it often leads to better-tasting, more creative meals.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Environmental Impact of Food
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Food production accounts for about 26% of global greenhouse gas emissions, with food waste contributing 
                an additional 6-8%. In the United States alone, we waste about 30-40% of our food supply, which 
                translates to significant environmental and economic costs. By making conscious choices in our kitchens, 
                we can make a meaningful difference.
              </Text>

              <Heading size="lg" color={headingColor}>
                Sustainable Cooking Practices
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Here are practical, actionable steps you can take to make your cooking more sustainable. Start with 
                a few that feel manageable, and gradually incorporate more as they become habits.
              </Text>

              <List spacing={3} w="full">
                {sustainablePractices.map((practice, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    {practice}
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Reducing Food Waste
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Food waste is one of the biggest sustainability challenges in our kitchens. The average family throws 
                away about $1,500 worth of food each year. These strategies can help you dramatically reduce waste 
                while saving money.
              </Text>

              <List spacing={3} w="full">
                {wasteReductionTips.map((tip, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    {tip}
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Sustainable Ingredient Choices
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                The ingredients you choose have a significant impact on your environmental footprint. Here's how to 
                make more sustainable choices without compromising on taste or nutrition.
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
                      🌱 Plant-Based Proteins
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Beans, lentils, chickpeas, and tofu have a much lower carbon footprint than animal proteins. 
                      Try incorporating them into at least one meal per day.
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
                      🥬 Seasonal Vegetables
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Choose vegetables that are in season in your area. They'll taste better, cost less, and 
                      have a smaller environmental impact.
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
                      🐟 Sustainable Seafood
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Look for MSC (Marine Stewardship Council) or ASC (Aquaculture Stewardship Council) 
                      certified seafood to ensure sustainable fishing practices.
                    </Text>
                  </VStack>
                </Box>
              </VStack>

              <Heading size="lg" color={headingColor}>
                Energy-Efficient Cooking
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                How you cook can also impact your environmental footprint. These energy-saving techniques will 
                reduce your utility bills while helping the planet.
              </Text>

              <VStack spacing={3} align="start" w="full">
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Use lids on pots and pans to reduce cooking time and energy use
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Match pan size to burner size for maximum efficiency
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Use residual heat by turning off burners a few minutes before food is done
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Consider pressure cookers and slow cookers for energy-efficient cooking
                  </Text>
                </HStack>
              </VStack>

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
                    <Icon as={FaLeaf} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Environmental Impact
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    By reducing food waste by just 25%, the average family can save about $375 per year and 
                    prevent approximately 1,200 pounds of CO2 emissions—equivalent to driving 1,400 fewer miles.
                  </Text>
                </VStack>
              </Box>

              <Heading size="lg" color={headingColor}>
                Getting Started
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Don't try to implement all these changes at once. Start with one or two practices that feel 
                manageable, like meal planning to reduce waste or choosing one plant-based meal per week. 
                As these become habits, gradually add more sustainable practices to your routine.
              </Text>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Ready to cook more sustainably? Our AI can help you plan meals that reduce waste, 
                  incorporate seasonal ingredients, and minimize your environmental impact.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaLeaf} />}
                  onClick={() => navigate('/')}
                >
                  Get Sustainable Recipe Ideas
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

export default SustainableCookingArticle;
