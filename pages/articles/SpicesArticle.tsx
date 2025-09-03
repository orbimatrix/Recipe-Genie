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
  FaUtensils,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const SpicesArticle: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const essentialSpices = [
    "Black Pepper - The king of spices, adds heat and depth to any dish",
    "Garlic Powder - Convenient way to add garlic flavor without the prep work",
    "Onion Powder - Adds sweet, savory depth to marinades and rubs",
    "Paprika - Sweet or smoked, adds color and mild heat",
    "Cumin - Earthy, warm flavor essential for Mexican, Indian, and Middle Eastern dishes",
    "Cinnamon - Sweet and warm, perfect for both sweet and savory applications",
    "Bay Leaves - Subtle herbal flavor that transforms soups and stews",
    "Oregano - Mediterranean herb that's essential for Italian and Greek cooking",
    "Thyme - Delicate herb that pairs well with poultry and vegetables",
    "Red Pepper Flakes - Adds controlled heat to any dish"
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
                Cooking Tips
              </Badge>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="shorter"
              >
                10 Essential Spices Every Home Cook Should Have
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
                maxW="3xl"
              >
                Build your spice collection with these fundamental ingredients that will elevate any dish.
              </Text>
              
              <HStack spacing={6} wrap="wrap" justify="center">
                <HStack spacing={2}>
                  <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>Elena Petrov</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>December 12, 2024</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                  <Text fontSize="sm" color={secondaryTextColor}>5 min read</Text>
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
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop"
                alt="Essential spices collection"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>

            {/* Article Body */}
            <VStack spacing={8} align="start" maxW="4xl">
              <Text fontSize="lg" color={secondaryTextColor} lineHeight="tall">
                Building a well-stocked spice collection is one of the most important investments you can make in your kitchen. 
                These ten essential spices will transform your cooking from basic to extraordinary, allowing you to create 
                complex, layered flavors that will impress family and friends.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Foundation of Flavor
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                A good spice collection is like a painter's palette - each spice adds a unique color and texture to your 
                culinary canvas. The key is to start with versatile spices that work across multiple cuisines and cooking 
                styles. These ten spices form the foundation that every home cook should have in their pantry.
              </Text>

              <Heading size="lg" color={headingColor}>
                The Essential Ten
              </Heading>

              <List spacing={4} w="full">
                {essentialSpices.map((spice, index) => (
                  <ListItem key={index} fontSize="md" color={secondaryTextColor}>
                    <ListIcon as={FaCheck} color={accentColor} />
                    <Text as="span" fontWeight="semibold" color={headingColor}>
                      {spice.split(' - ')[0]}:
                    </Text>
                    <Text as="span"> {spice.split(' - ')[1]}</Text>
                  </ListItem>
                ))}
              </List>

              <Heading size="lg" color={headingColor}>
                Storage Tips for Maximum Freshness
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                To get the most out of your spice collection, proper storage is crucial. Keep spices in a cool, dry place 
                away from direct sunlight. Whole spices last longer than ground spices, so consider buying whole versions 
                and grinding them as needed. Most ground spices lose their potency after 2-3 years, while whole spices 
                can last 3-4 years.
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
                    <Icon as={FaUtensils} color={accentColor} />
                    <Text fontWeight="bold" color={headingColor}>
                      Pro Tip
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                    To test if your spices are still fresh, rub a small amount between your fingers. If you can't smell 
                    the spice clearly, it's time to replace it. Fresh spices should have a strong, distinct aroma.
                  </Text>
                </VStack>
              </Box>

              <Heading size="lg" color={headingColor}>
                Building Your Collection Gradually
              </Heading>

              <Text fontSize="md" color={secondaryTextColor} lineHeight="tall">
                Don't feel overwhelmed by trying to buy all ten spices at once. Start with the basics like black pepper, 
                garlic powder, and paprika, then gradually add others as you explore new recipes. Many grocery stores 
                sell spices in bulk, allowing you to buy small amounts to try before committing to larger quantities.
              </Text>

              <Divider />

              <VStack spacing={4} align="start" w="full">
                <Text fontSize="sm" color={secondaryTextColor}>
                  Ready to start cooking with these essential spices? Try our AI-powered recipe recommendations 
                  to discover new ways to use your spice collection.
                </Text>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaUtensils} />}
                  onClick={() => navigate('/')}
                >
                  Get Recipe Recommendations
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

export default SpicesArticle;
