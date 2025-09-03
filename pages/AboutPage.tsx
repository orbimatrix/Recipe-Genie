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
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react';
import {
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaAward,
  FaRocket,
  FaUtensils,
  FaBrain,
  FaPlay,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const heroBg = useColorModeValue('linear(to-br, green.50, blue.50)', 'linear(to-br, gray.800, gray.700)');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const teamMembers = [
    {
      name: "Saqib",
      role: "Owner & Founder",
      image: "/saqib.png",
      description: "Passionate developer and entrepreneur dedicated to revolutionizing cooking with AI technology"
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Passion for Food",
      description: "We believe cooking is an art that brings people together and creates lasting memories."
    },
    {
      icon: FaBrain,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to make cooking more accessible and enjoyable."
    },
    {
      icon: FaGlobe,
      title: "Cultural Respect",
      description: "We honor authentic recipes and cooking traditions from around the world."
    },
    {
      icon: FaUsers,
      title: "Community Focus",
      description: "We build tools that connect cooks, share knowledge, and celebrate culinary diversity."
    }
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Hero Section */}
      <Box py={20} bgGradient={heroBg}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Badge
              colorScheme="green"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="semibold"
            >
              <Icon as={FaUtensils} mr={2} />
              About Recipe Genie
            </Badge>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Revolutionizing Cooking with AI
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={secondaryTextColor}
              lineHeight="tall"
              maxW="4xl"
            >
              We're on a mission to make cooking accessible, enjoyable, and culturally rich 
              for everyone, everywhere. Through the power of artificial intelligence, we're 
              transforming how people discover, learn, and create amazing meals.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} align="center">
            <VStack spacing={6} align="start">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                <Icon as={FaRocket} mr={2} />
                Our Mission
              </Badge>
              <Heading
                as="h2"
                size={{ base: "lg", md: "xl", lg: "2xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Making Cooking Accessible to Everyone
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                We believe that cooking should be a joyful, creative experience that brings 
                people together. Our AI-powered platform removes barriers, provides guidance, 
                and celebrates the rich diversity of global cuisines.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <Button
                  colorScheme="green"
                  size="lg"
                  rightIcon={<Icon as={FaPlay} />}
                >
                  Watch Our Story
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<Icon as={FaUtensils} />}
                >
                  Try Recipe Genie
                </Button>
              </Stack>
            </VStack>
            <Box>
              <Image
                src="/chicken.jpg"
                alt="Cooking ingredients"
                borderRadius="2xl"
                shadow="xl"
                w="full"
                h="400px"
                objectFit="cover"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
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
                <Icon as={FaHeart} mr={2} />
                Our Values
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                What Drives Us Forward
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                These core values guide everything we do, from product development 
                to community building.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {values.map((value, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  shadow="lg"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "xl",
                  }}
                >
                  <CardBody p={8}>
                    <VStack spacing={4} align="start">
                      <Box
                        p={4}
                        borderRadius="full"
                        bgGradient={`linear(to-br, ${accentColor.replace('.500', '.100')}, ${accentColor.replace('.500', '.200')})`}
                        color={accentColor}
                      >
                        <Icon as={value.icon} w={8} h={8} />
                      </Box>
                      <VStack spacing={3} align="start">
                        <Heading size="lg" color={headingColor}>
                          {value.title}
                        </Heading>
                        <Text color={secondaryTextColor} lineHeight="tall">
                          {value.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center" maxW="3xl">
              <Badge
                colorScheme="orange"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                <Icon as={FaUsers} mr={2} />
                Meet the Founder
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Meet the Founder
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                The passionate developer and entrepreneur behind Recipe Genie, 
                dedicated to making cooking more accessible and enjoyable for everyone.
              </Text>
            </VStack>

            <SimpleGrid columns={1} spacing={8} w="full" maxW="md" mx="auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  shadow="lg"
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "xl",
                  }}
                >
                  <Box h="250px" overflow="hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      w="full"
                      h="full"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </Box>
                  <CardBody p={6}>
                    <VStack spacing={3} align="start">
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                          {member.name}
                        </Text>
                        <Text fontSize="sm" color={accentColor} fontWeight="medium">
                          {member.role}
                        </Text>
                      </VStack>
                      <Text fontSize="sm" color={secondaryTextColor} lineHeight="tall">
                        {member.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
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
                <Icon as={FaAward} mr={2} />
                Our Impact
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Making a Difference in Kitchens Worldwide
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              <VStack spacing={4} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                  1+
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color={headingColor}>
                  Recipes Generated
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  AI-powered recipe recommendations
                </Text>
              </VStack>
              <VStack spacing={4} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                  1+
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color={headingColor}>
                  Happy Users
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  Cooks worldwide using our platform
                </Text>
              </VStack>
              <VStack spacing={4} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                  1+
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color={headingColor}>
                  Countries Served
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  Global reach and cultural diversity
                </Text>
              </VStack>
              <VStack spacing={4} textAlign="center">
                <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                  0.0★
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color={headingColor}>
                  User Rating
                </Text>
                <Text fontSize="sm" color={secondaryTextColor}>
                  Based on user feedback
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutPage;