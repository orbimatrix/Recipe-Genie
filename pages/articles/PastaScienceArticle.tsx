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
  FaFlask,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const PastaScienceArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const scientificPrinciples = [
    "Starch Gelatinization - The process where starch granules absorb water and swell, creating the perfect al dente texture",
    "Protein Coagulation - Gluten proteins in pasta form a network that traps starch, preventing overcooking",
    "Temperature Control - Water at 212°F (100°C) ensures even cooking without temperature fluctuations",
    "Salt Concentration - 1-2% salt in water enhances flavor and helps control starch release",
    "Surface Tension - Proper stirring prevents pasta from sticking together during cooking",
    "Thermal Mass - Using plenty of water maintains stable temperature when pasta is added"
  ];

  const techniques = [
    "Use 4-6 quarts of water per pound of pasta for proper temperature stability",
    "Bring water to a rolling boil before adding pasta - this ensures maximum heat transfer",
    "Add salt after water boils but before adding pasta - about 1-2 tablespoons per gallon",
    "Stir pasta immediately after adding to prevent sticking",
    "Test for doneness 2 minutes before package directions - pasta continues cooking",
    "Reserve pasta water before draining - the starchy water is perfect for sauce binding",
    "Never rinse pasta after draining - it removes the starch needed for sauce adhesion"
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
              <Badge colorScheme="cyan" variant="subtle" px={4} py={2} borderRadius="full">
                Cooking Science
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                The Science Behind Perfect Pasta: Temperature, Timing, and Technique
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                Master the art of pasta cooking with these scientifically-backed techniques for perfect results every time.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>Elena Petrov</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 5, 2024</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>9 min read</Text>
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
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=400&fit=crop"
                alt="Perfect pasta cooking"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                Cooking perfect pasta isn't just about following a recipe—it's about understanding the science behind 
                what happens when starch, protein, and water interact at high temperatures. By mastering these 
                fundamental principles, you can achieve consistently perfect pasta every time, regardless of the 
                type or brand you're using.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Chemistry of Pasta Cooking
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                When you drop pasta into boiling water, several chemical and physical processes occur simultaneously. 
                Understanding these processes is the key to perfect pasta cooking. The most important reactions 
                involve starch gelatinization and protein coagulation, which work together to create the ideal 
                texture and flavor.
              </Text>

              <List spacing={4} w="full">
                {scientificPrinciples.map((principle, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    <Text as="span" fontWeight="semibold" color={headingColor}>
                      {principle.split(' - ')[0]}:
                    </Text>
                    <Text as="span"> {principle.split(' - ')[1]}</Text>
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                The Perfect Pasta Technique
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Now that you understand the science, here's the step-by-step technique that applies these principles 
                for consistently perfect results. Each step is designed to optimize the chemical reactions happening 
                in your pot.
              </Text>

              <List spacing={3} w="full">
                {techniques.map((technique, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    {technique}
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Understanding Pasta Types
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Different pasta shapes and compositions require slight adjustments to the basic technique. Fresh pasta, 
                for example, cooks much faster than dried pasta because it contains more moisture. Whole wheat pasta 
                may need slightly longer cooking times due to its higher fiber content.
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
                      Fresh Pasta
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Cook for 2-4 minutes in rapidly boiling water. Fresh pasta is ready when it floats to the surface 
                      and has a tender but slightly chewy texture.
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
                      Dried Pasta
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Follow package directions but start testing 2 minutes early. The pasta should be al dente—firm 
                      to the bite with a slight resistance in the center.
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
                      Whole Wheat Pasta
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      May require 1-2 minutes longer cooking time. The higher fiber content means it needs more time 
                      for the starch to fully gelatinize.
                    </Text>
                  </VStack>
                </Box>
              </VStack>

              <Heading size="lg" color={headingColor}>
                Common Mistakes and How to Avoid Them
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Even experienced cooks make these common pasta mistakes. Understanding why these techniques don't work 
                will help you avoid them and achieve better results.
              </Text>

              <VStack spacing={4} align="start" w="full">
                <Box
                  bg="red.50"
                  p={6}
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderLeftColor="red.400"
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color="red.600">
                      ❌ Adding Oil to Pasta Water
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Oil creates a barrier that prevents sauce from sticking to pasta. The starch in pasta water 
                      is what helps sauce adhere properly.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="red.50"
                  p={6}
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderLeftColor="red.400"
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color="red.600">
                      ❌ Rinsing Pasta After Draining
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Rinsing removes the starch that helps sauce stick to pasta. The starchy surface is essential 
                      for proper sauce adhesion.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="red.50"
                  p={6}
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderLeftColor="red.400"
                  w="full"
                >
                  <VStack spacing={3} align="start">
                    <Text fontWeight="bold" color="red.600">
                      ❌ Using Too Little Water
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Insufficient water causes temperature drops when pasta is added, leading to uneven cooking 
                      and sticky pasta.
                    </Text>
                  </VStack>
                </Box>
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
                    <Icon as={FaFlask} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Scientific Insight
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    The perfect al dente texture occurs when about 70% of the starch has gelatinized. This creates 
                    a pasta that's tender on the outside but still has a slight resistance in the center—the 
                    hallmark of perfectly cooked pasta.
                  </Text>
                </VStack>
              </Box>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Ready to put these scientific principles to the test? Our AI can recommend the perfect pasta 
                  recipes and cooking techniques based on your preferences and available ingredients.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaFlask} />}
                  onClick={() => navigate('/')}
                >
                  Get Pasta Recipe Recommendations
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

export default PastaScienceArticle;
