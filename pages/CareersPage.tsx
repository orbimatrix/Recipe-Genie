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
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  FaRocket,
  FaUsers,
  FaHeart,
  FaLightbulb,
  FaGlobe,
  FaCode,
  FaUtensils,
  FaPalette,
  FaChartLine,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const heroBg = useColorModeValue('linear(to-br, green.50, blue.50)', 'linear(to-br, gray.800, gray.700)');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Unlimited PTO",
    "Stocked kitchen with snacks",
    "Team cooking events",
    "Remote work options"
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      icon: FaCode,
      description: "Lead the development of our AI recommendation engine and work on cutting-edge machine learning models.",
      requirements: [
        "5+ years of experience in AI/ML",
        "Strong background in Python and TensorFlow",
        "Experience with recommendation systems",
        "PhD in Computer Science preferred"
      ]
    },
    {
      title: "Culinary Content Manager",
      department: "Content",
      location: "New York, NY",
      type: "Full-time",
      icon: FaUtensils,
      description: "Curate and create authentic recipe content, ensuring cultural accuracy and culinary excellence.",
      requirements: [
        "Culinary degree or equivalent experience",
        "Experience with global cuisines",
        "Strong writing and communication skills",
        "Passion for food culture and traditions"
      ]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      icon: FaPalette,
      description: "Design intuitive and beautiful user experiences that make cooking more accessible and enjoyable.",
      requirements: [
        "3+ years of product design experience",
        "Proficiency in Figma and design systems",
        "Experience with mobile and web design",
        "Portfolio demonstrating user-centered design"
      ]
    },
    {
      title: "Growth Marketing Manager",
      department: "Marketing",
      location: "Austin, TX",
      type: "Full-time",
      icon: FaChartLine,
      description: "Drive user acquisition and retention through data-driven marketing strategies and campaigns.",
      requirements: [
        "4+ years of growth marketing experience",
        "Experience with digital marketing channels",
        "Analytical mindset and data-driven approach",
        "Experience in food/tech industry preferred"
      ]
    }
  ];

  const cultureValues = [
    {
      icon: FaHeart,
      title: "Passion for Food",
      description: "We're food enthusiasts who believe cooking brings people together."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies to solve real-world problems."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "We work together as a team, supporting each other's growth and success."
    },
    {
      icon: FaGlobe,
      title: "Diversity",
      description: "We celebrate different cultures, backgrounds, and perspectives."
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
              <Icon as={FaRocket} mr={2} />
              Join Our Team
            </Badge>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Build the Future of Cooking
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={secondaryTextColor}
              lineHeight="tall"
              maxW="4xl"
            >
              We're looking for passionate individuals who want to revolutionize how people 
              cook, learn, and connect through food. Join us in making cooking more accessible, 
              enjoyable, and culturally rich for everyone.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                colorScheme="green"
                size="lg"
                rightIcon={<Icon as={FaRocket} />}
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                rightIcon={<Icon as={FaUsers} />}
              >
                Learn About Our Culture
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Culture Section */}
      <Box py={20}>
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
                Our Culture
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                What Makes Recipe Genie Special
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                We're more than just a company - we're a community of food lovers, 
                innovators, and problem-solvers working together to make cooking better.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {cultureValues.map((value, index) => (
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

      {/* Benefits Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center" maxW="3xl">
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                <Icon as={FaGraduationCap} mr={2} />
                Benefits & Perks
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                We Take Care of Our Team
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                We believe in supporting our team members both professionally and personally.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {benefits.map((benefit, index) => (
                <HStack
                  key={index}
                  spacing={4}
                  p={4}
                  bg={cardBg}
                  borderRadius="lg"
                  shadow="md"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Icon as={FaCheck} color={accentColor} />
                  <Text fontSize="sm" color={headingColor} fontWeight="medium">
                    {benefit}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Open Positions Section */}
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
                <Icon as={FaRocket} mr={2} />
                Open Positions
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Join Our Growing Team
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                We're always looking for talented individuals who share our passion 
                for food and technology.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
              {openPositions.map((position, index) => (
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
                    <VStack spacing={6} align="start">
                      <HStack spacing={4} align="start">
                        <Box
                          p={3}
                          borderRadius="full"
                          bgGradient={`linear(to-br, ${accentColor.replace('.500', '.100')}, ${accentColor.replace('.500', '.200')})`}
                          color={accentColor}
                        >
                          <Icon as={position.icon} w={6} h={6} />
                        </Box>
                        <VStack spacing={2} align="start" flex={1}>
                          <Heading size="lg" color={headingColor}>
                            {position.title}
                          </Heading>
                          <HStack spacing={4} wrap="wrap">
                            <Badge colorScheme="blue" variant="subtle">
                              {position.department}
                            </Badge>
                            <HStack spacing={1}>
                              <Icon as={FaMapMarkerAlt} w={3} h={3} color={secondaryTextColor} />
                              <Text fontSize="sm" color={secondaryTextColor}>
                                {position.location}
                              </Text>
                            </HStack>
                            <HStack spacing={1}>
                              <Icon as={FaClock} w={3} h={3} color={secondaryTextColor} />
                              <Text fontSize="sm" color={secondaryTextColor}>
                                {position.type}
                              </Text>
                            </HStack>
                          </HStack>
                        </VStack>
                      </HStack>

                      <Text color={secondaryTextColor} lineHeight="tall">
                        {position.description}
                      </Text>

                      <VStack spacing={3} align="start" w="full">
                        <Text fontWeight="semibold" color={headingColor}>
                          Requirements:
                        </Text>
                        <List spacing={2} w="full">
                          {position.requirements.map((req, reqIndex) => (
                            <ListItem key={reqIndex} fontSize="sm" color={secondaryTextColor}>
                              <ListIcon as={FaCheck} color={accentColor} />
                              {req}
                            </ListItem>
                          ))}
                        </List>
                      </VStack>

                      <Button
                        colorScheme="green"
                        size="md"
                        w="full"
                        rightIcon={<Icon as={FaRocket} />}
                      >
                        Apply Now
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Don't See Your Dream Job?
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
              maxW="2xl"
            >
              We're always interested in meeting talented people who share our vision. 
              Send us your resume and tell us how you'd like to contribute to Recipe Genie.
            </Text>
            <Button
              colorScheme="green"
              size="lg"
              rightIcon={<Icon as={FaUsers} />}
            >
              Send Us Your Resume
            </Button>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default CareersPage;
