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
  FaDatabase,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const RecipeDatabaseArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const challenges = [
    "Cultural Authenticity - Ensuring recipes maintain their traditional character while being accessible globally",
    "Language Barriers - Translating cooking techniques and ingredient names accurately across languages",
    "Regional Variations - Documenting the many variations of the same dish across different regions",
    "Ingredient Substitutions - Finding appropriate substitutes for ingredients not available worldwide",
    "Measurement Systems - Converting between metric, imperial, and traditional measurement systems",
    "Seasonal Availability - Accounting for seasonal ingredient variations across different climates",
    "Dietary Restrictions - Adapting traditional recipes for various dietary needs and restrictions",
    "Quality Control - Maintaining consistency and accuracy across thousands of recipes"
  ];

  const solutions = [
    "Community Partnerships - Working directly with cultural communities and traditional cooks",
    "AI-Powered Translation - Using machine learning to accurately translate cooking terms and techniques",
    "Regional Documentation - Creating separate entries for regional variations of popular dishes",
    "Smart Substitution Engine - AI that suggests appropriate ingredient replacements based on flavor profiles",
    "Universal Measurement Converter - Automatic conversion between different measurement systems",
    "Seasonal Recipe Adaptation - Dynamic recipe suggestions based on local ingredient availability",
    "Dietary Filtering System - Automatic adaptation of recipes for specific dietary requirements",
    "Crowdsourced Verification - Community-driven quality control and recipe validation"
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
              <Badge colorScheme="blue" variant="subtle" px={4} py={2} borderRadius="full">
                Technology
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                Building a Global Recipe Database: Challenges and Solutions
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                Behind the scenes of how we're building the world's most comprehensive and culturally accurate recipe collection.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>Marcus Rodriguez</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 1, 2024</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>10 min read</Text>
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
                alt="Technology and cooking collaboration"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                Creating a truly global recipe database is one of the most ambitious projects in culinary technology. 
                It's not just about collecting recipes—it's about preserving cultural heritage, bridging language barriers, 
                and making authentic cooking accessible to everyone, everywhere. Here's an inside look at the challenges 
                we face and the innovative solutions we've developed.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Vision: A Universal Culinary Library
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Our goal is to create the world's most comprehensive and culturally accurate recipe database—one that 
                preserves traditional cooking methods while making them accessible to modern cooks. This means not 
                just translating recipes, but understanding the cultural context, seasonal variations, and regional 
                differences that make each dish unique.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Challenges We Face
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Building a global recipe database presents unique challenges that go far beyond simple data collection. 
                Each challenge requires innovative technological solutions and deep cultural understanding.
              </Text>

              <List spacing={4} w="full">
                {challenges.map((challenge, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    <Text as="span" fontWeight="semibold" color={headingColor}>
                      {challenge.split(' - ')[0]}:
                    </Text>
                    <Text as="span"> {challenge.split(' - ')[1]}</Text>
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Our Innovative Solutions
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                To address these challenges, we've developed a multi-layered approach that combines cutting-edge 
                technology with deep cultural partnerships and community engagement.
              </Text>

              <List spacing={4} w="full">
                {solutions.map((solution, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    <Text as="span" fontWeight="semibold" color={headingColor}>
                      {solution.split(' - ')[0]}:
                    </Text>
                    <Text as="span"> {solution.split(' - ')[1]}</Text>
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                The Technology Behind the Database
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Our database architecture is designed to handle the complexity of global cuisine while maintaining 
                performance and accuracy. We use a combination of machine learning, natural language processing, 
                and human expertise to ensure quality and authenticity.
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
                      🤖 AI-Powered Ingredient Recognition
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Our AI can identify ingredients from photos and suggest appropriate substitutions based on 
                      flavor profiles, nutritional content, and cultural context.
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
                      🌍 Cultural Context Engine
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Each recipe includes cultural context, seasonal information, and regional variations, 
                      helping users understand not just how to cook, but why certain techniques are used.
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
                      🔄 Dynamic Recipe Adaptation
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Recipes automatically adapt based on available ingredients, dietary restrictions, 
                      and cooking equipment, making authentic cuisine accessible to everyone.
                    </Text>
                  </VStack>
                </Box>
              </VStack>

              <Heading size="lg" color={headingColor}>
                Quality Assurance and Community Involvement
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Maintaining quality and authenticity in a global database requires constant vigilance and community 
                involvement. We work with cultural organizations, traditional cooks, and food historians to ensure 
                that each recipe maintains its authentic character.
              </Text>

              <VStack spacing={3} align="start" w="full">
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Every recipe is reviewed by cultural experts before publication
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Community members can suggest corrections and improvements
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Regular updates ensure recipes reflect current best practices
                  </Text>
                </HStack>
                <HStack spacing={3} align="start">
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="md" color={secondaryTextColor}>
                    Version control tracks changes and maintains recipe history
                  </Text>
                </HStack>
              </VStack>

              <Heading size="lg" color={headingColor}>
                The Future of Global Cuisine
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                As we continue to expand our database, we're not just preserving recipes—we're creating a living 
                archive of human culinary heritage. Our goal is to make authentic cooking accessible to everyone, 
                regardless of their location, language, or cooking experience.
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
                    <Icon as={FaDatabase} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Database Statistics
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    Our database currently contains over 50,000 recipes from 120+ countries, with new recipes 
                    added daily. Each recipe includes cultural context, nutritional information, and multiple 
                    preparation methods.
                  </Text>
                </VStack>
              </Box>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Want to explore our global recipe database? Our AI can recommend authentic recipes from 
                  around the world based on your preferences and available ingredients.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaDatabase} />}
                  onClick={() => navigate('/')}
                >
                  Explore Global Recipes
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

export default RecipeDatabaseArticle;
