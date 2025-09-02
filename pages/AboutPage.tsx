import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  useColorModeValue,
  Divider,
  Avatar,
  AvatarGroup,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaUtensils, FaUsers, FaHeart, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  const teamMembers = [
    {
      name: "Saqib",
      role: "Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Founder and owner of Recipe Genie, passionate about making cooking accessible and enjoyable for everyone."
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Passion for Food",
      description: "We believe that cooking should be accessible, enjoyable, and creative for everyone, regardless of skill level."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to solve real-world cooking challenges and inspire culinary creativity."
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "We're building a community of food lovers who share recipes, tips, and the joy of cooking together."
    },
    {
      icon: FaShieldAlt,
      title: "Privacy First",
      description: "Your data and privacy are our top priorities. We use your information responsibly and transparently."
    }
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={16}>
        {/* Hero Section */}
        <VStack spacing={8} mb={16} textAlign="center">
          <HStack spacing={4}>
            <Icon as={FaUtensils} w={16} h={16} color="green.500" />
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              About Recipe Genie
            </Heading>
          </HStack>
          <Text fontSize="xl" color={secondaryTextColor} maxW="3xl">
            We're on a mission to make cooking more accessible, creative, and enjoyable for everyone. 
            Our AI-powered platform helps you discover new recipes using the ingredients you already have.
          </Text>
        </VStack>

        {/* Our Story */}
        <Card bg={cardBg} shadow="lg" mb={16}>
          <CardBody p={12}>
            <VStack spacing={6} textAlign="center">
              <Heading size="lg" color={headingColor}>Our Story</Heading>
              <Text fontSize="lg" color={secondaryTextColor} maxW="4xl">
                Recipe Genie was born from a simple observation: too many people struggle with meal planning 
                and end up wasting food because they don't know what to cook with the ingredients they have. 
                We saw an opportunity to use AI technology to solve this everyday problem.
              </Text>
              <Text fontSize="lg" color={secondaryTextColor} maxW="4xl">
                Founded in 2024, our team of food enthusiasts, developers, and AI specialists came together 
                to create a platform that not only generates recipes but also helps reduce food waste and 
                encourages culinary creativity. We believe that everyone deserves access to delicious, 
                personalized recipes that work with their lifestyle and dietary preferences.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Our Values */}
        <Box mb={16}>
          <Heading size="lg" textAlign="center" mb={12} color={headingColor}>Our Values</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {values.map((value, index) => (
              <Card key={index} bg={cardBg} shadow="md" h="full">
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={value.icon} w={12} h={12} color="green.500" />
                    <Heading size="md" color={headingColor}>{value.title}</Heading>
                    <Text color={secondaryTextColor}>{value.description}</Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Technology */}
        <Card bg={cardBg} shadow="lg" mb={16}>
          <CardBody p={12}>
            <VStack spacing={6}>
              <Heading size="lg" textAlign="center" color={headingColor}>Powered by Advanced AI</Heading>
              <Text fontSize="lg" color={secondaryTextColor} textAlign="center" maxW="4xl">
                Recipe Genie leverages Google's Gemini AI to understand your ingredients and preferences, 
                generating creative and practical recipes tailored to your needs. Our technology considers 
                flavor profiles, cooking techniques, dietary restrictions, and nutritional balance to 
                provide you with the best possible suggestions.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Badge colorScheme="green" fontSize="md" p={2}>Google Gemini AI</Badge>
                <Badge colorScheme="blue" fontSize="md" p={2}>Natural Language Processing</Badge>
                <Badge colorScheme="purple" fontSize="md" p={2}>Recipe Optimization</Badge>
                <Badge colorScheme="orange" fontSize="md" p={2}>Dietary Intelligence</Badge>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Team Section */}
        <Box mb={16} display="flex" justifyContent="center">
          <Box maxW="400px" w="full">
            <Heading size="lg" textAlign="center" mb={12} color={headingColor}>Meet Our Team</Heading>
            {teamMembers.map((member, index) => (
              <Card key={index} bg={cardBg} shadow="lg" h="full" borderRadius="2xl" overflow="hidden">
                <CardBody textAlign="center" p={8}>
                  <VStack spacing={6}>
                    <Box position="relative">
                      <Avatar 
                        size="2xl" 
                        src="/saqib.png" 
                        name={`👨‍💻 ${member.name}`}
                        border="4px solid"
                        borderColor="white"
                        boxShadow="0 0 30px rgba(72, 187, 120, 0.6), 0 0 60px rgba(72, 187, 120, 0.3)"
                        filter="saturate(1.2) contrast(1.1)"
                      />
                      <Box
                        position="absolute"
                        top="-2"
                        right="-2"
                        bg="green.500"
                        color="white"
                        borderRadius="full"
                        p={1}
                        fontSize="xs"
                        fontWeight="bold"
                        minW="24px"
                        textAlign="center"
                      >
                        NFT
                      </Box>
                    </Box>
                    <VStack spacing={3}>
                      <Heading size="lg" color={headingColor}>{member.name}</Heading>
                      <Text color="green.500" fontWeight="bold" fontSize="lg">{member.role}</Text>
                      <Text color={secondaryTextColor} fontSize="md" lineHeight="1.6">{member.description}</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Mission Statement */}
        <Card bg="green.50" borderColor="green.200" shadow="lg">
          <CardBody p={12} textAlign="center">
            <VStack spacing={6}>
              <Icon as={FaRocket} w={16} h={16} color="green.500" />
              <Heading size="lg" color="green.500">Our Mission</Heading>
              <Text fontSize="xl" color="green.400" maxW="4xl" fontWeight="medium">
                To democratize cooking by making it easier for everyone to create delicious meals 
                with whatever ingredients they have, reducing food waste and inspiring culinary creativity 
                through the power of artificial intelligence.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutPage;
