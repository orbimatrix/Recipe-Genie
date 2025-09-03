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
  FaGlobe,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const CulturalCookingArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const preservationMethods = [
    "Digital Recipe Archives - Creating searchable databases of traditional recipes",
    "Video Documentation - Recording cooking techniques passed down through generations",
    "Community Partnerships - Working directly with cultural communities and elders",
    "Ingredient Sourcing - Documenting traditional ingredients and their substitutes",
    "Seasonal Cooking - Preserving knowledge of seasonal ingredients and preparations",
    "Cultural Context - Recording the stories and traditions behind each recipe"
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
              <Badge colorScheme="purple" variant="subtle" px={4} py={2} borderRadius="full">
                Culture
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                Cultural Cooking: Preserving Authentic Recipes in the Digital Age
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                How we're working with communities worldwide to preserve and share traditional cooking methods.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>Marcus Rodriguez</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 10, 2024</Text>
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
                alt="Traditional cooking methods"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                In our rapidly globalizing world, traditional cooking methods and authentic recipes are at risk of being lost forever. 
                At Recipe Genie, we believe that preserving cultural culinary heritage is not just important—it's essential for 
                maintaining the rich tapestry of human culture and ensuring that future generations can experience the authentic 
                flavors of their ancestors.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Challenge of Cultural Preservation
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Traditional recipes are often passed down orally from generation to generation, with techniques and ingredients 
                that have been refined over centuries. However, as younger generations move to urban areas and adopt modern 
                lifestyles, these precious culinary traditions are at risk of disappearing. Our mission is to bridge the gap 
                between tradition and technology, ensuring that authentic recipes are preserved and accessible to everyone.
              </Text>

              <Heading size="lg" color={headingColor}>
                Our Approach to Cultural Preservation
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                We work directly with cultural communities, elders, and traditional cooks to document and preserve their 
                authentic recipes. Our approach combines modern technology with deep respect for cultural traditions, 
                ensuring that each recipe maintains its authentic character while being accessible to a global audience.
              </Text>

              <List spacing={4} w="full">
                {preservationMethods.map((method, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    {method}
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Respecting Cultural Authenticity
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                One of our core principles is maintaining the authenticity of traditional recipes. We never modify or 
                "improve" traditional methods without explicit permission from the cultural community. Each recipe in 
                our database includes detailed cultural context, including the story behind the dish, its significance 
                in the community, and the proper way to serve it.
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
                    <Icon as={FaGlobe} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Cultural Partnership
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    We partner with cultural organizations and community leaders to ensure that our documentation process 
                    is respectful and beneficial to the communities we work with. Many of our cultural partners receive 
                    compensation for sharing their knowledge, helping to support traditional cooking practices.
                  </Text>
                </VStack>
              </Box>

              <Heading size="lg" color={headingColor}>
                The Impact of Digital Preservation
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                By digitizing traditional recipes, we're not just preserving them—we're making them accessible to 
                people around the world who might never have encountered these culinary traditions otherwise. This 
                global accessibility helps to celebrate cultural diversity and promotes understanding between different 
                communities through the universal language of food.
              </Text>

              <Heading size="lg" color={headingColor}>
                Looking to the Future
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Our work is ongoing, and we're constantly expanding our cultural recipe database. We're particularly 
                focused on documenting recipes from indigenous communities and cultures that are at the highest risk 
                of losing their culinary traditions. Through partnerships with universities, cultural organizations, 
                and community groups, we're building a comprehensive archive of human culinary heritage.
              </Text>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Interested in exploring authentic cultural recipes? Our AI can recommend traditional dishes 
                  from around the world based on your preferences and available ingredients.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaGlobe} />}
                  onClick={() => navigate('/')}
                >
                  Explore Cultural Recipes
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

export default CulturalCookingArticle;
