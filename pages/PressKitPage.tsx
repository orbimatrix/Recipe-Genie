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
  Image,
  Divider,
  Link,
  Code,
} from '@chakra-ui/react';
import {
  FaDownload,
  FaImage,
  FaFilePdf,
  FaNewspaper,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaAward,
  FaRocket,
  FaUsers,
  FaUtensils,
  FaLightbulb,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const PressKitPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const heroBg = useColorModeValue('linear(to-br, green.50, blue.50)', 'linear(to-br, gray.800, gray.700)');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const pressAssets = [
    {
      title: "Logo Package",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      icon: FaImage,
      size: "2.5 MB",
      format: "ZIP"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines including colors, typography, and usage",
      icon: FaFilePdf,
      size: "5.2 MB",
      format: "PDF"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of the Recipe Genie app and website",
      icon: FaImage,
      size: "8.1 MB",
      format: "ZIP"
    },
    {
      title: "Team Photos",
      description: "Professional headshots of our team members",
      icon: FaUsers,
      size: "12.3 MB",
      format: "ZIP"
    }
  ];

  const keyFacts = [
    {
      icon: FaRocket,
      title: "Founded",
      value: "2024",
      description: "Recipe Genie was founded with a vision to revolutionize cooking"
    },
    {
      icon: FaUsers,
      title: "Team Size",
      value: "25+",
      description: "Diverse team of engineers, chefs, and food enthusiasts"
    },
    {
      icon: FaGlobe,
      title: "Global Reach",
      value: "1+",
      description: "Countries served with authentic cultural recipes"
    },
    {
      icon: FaUtensils,
      title: "Recipes Generated",
      value: "1+",
      description: "AI-powered recipe recommendations created"
    }
  ];

  const pressReleases = [
    {
      title: "Recipe Genie Launches AI-Powered Cooking Platform",
      date: "December 1, 2024",
      summary: "Revolutionary cooking app combines artificial intelligence with authentic cultural recipes to transform home cooking experiences worldwide."
    },
    {
      title: "Recipe Genie Secures $10M Series A Funding",
      date: "November 15, 2024",
      summary: "Funding round led by prominent venture capital firms to accelerate AI development and global expansion."
    },
    {
      title: "Partnership with Michelin-Starred Chefs Announced",
      date: "October 20, 2024",
      summary: "Collaboration with world-renowned chefs to bring authentic techniques and recipes to home cooks."
    }
  ];

  const mediaQuotes = [
    {
      quote: "Recipe Genie is revolutionizing how people cook by making authentic recipes accessible to everyone.",
      author: "TechCrunch",
      date: "December 2024"
    },
    {
      quote: "The AI-powered recommendations are incredibly accurate and culturally respectful.",
      author: "Food & Wine Magazine",
      date: "November 2024"
    },
    {
      quote: "A game-changer for home cooks who want to explore global cuisines.",
      author: "The New York Times",
      date: "October 2024"
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
              <Icon as={FaNewspaper} mr={2} />
              Press Kit
            </Badge>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Media Resources & Information
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={secondaryTextColor}
              lineHeight="tall"
              maxW="4xl"
            >
              Everything you need to write about Recipe Genie, including press releases, 
              high-resolution assets, company information, and media contacts.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                colorScheme="green"
                size="lg"
                leftIcon={<Icon as={FaDownload} />}
              >
                Download Press Kit
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon as={FaEnvelope} />}
              >
                Contact Media Team
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Company Overview */}
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
                <Icon as={FaLightbulb} mr={2} />
                About Recipe Genie
              </Badge>
              <Heading
                as="h2"
                size={{ base: "lg", md: "xl", lg: "2xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Revolutionizing Cooking with AI
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                Recipe Genie is an AI-powered cooking platform that makes authentic, 
                culturally-rich recipes accessible to home cooks worldwide. Our technology 
                combines machine learning with culinary expertise to provide personalized 
                recipe recommendations, step-by-step video tutorials, and meal planning solutions.
              </Text>
              <VStack spacing={4} align="start">
                <Text fontWeight="semibold" color={headingColor}>
                  Key Features:
                </Text>
                <VStack spacing={2} align="start">
                  <HStack spacing={2}>
                    <Icon as={FaUtensils} color={accentColor} />
                    <Text fontSize="sm" color={secondaryTextColor}>
                      AI-powered recipe recommendations
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaGlobe} color={accentColor} />
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Authentic cultural recipes from around the world
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaUsers} color={accentColor} />
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Step-by-step video tutorials with professional chefs
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaRocket} color={accentColor} />
                    <Text fontSize="sm" color={secondaryTextColor}>
                      Personalized meal planning and shopping lists
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
            <Box>
              <Image
                src="/chicken.jpg"
                alt="Recipe Genie App"
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

      {/* Key Facts */}
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
                <Icon as={FaAward} mr={2} />
                Key Facts
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Company Statistics
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {keyFacts.map((fact, index) => (
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
                  <CardBody p={8} textAlign="center">
                    <VStack spacing={4}>
                      <Box
                        p={4}
                        borderRadius="full"
                        bgGradient={`linear(to-br, ${accentColor.replace('.500', '.100')}, ${accentColor.replace('.500', '.200')})`}
                        color={accentColor}
                      >
                        <Icon as={fact.icon} w={8} h={8} />
                      </Box>
                      <VStack spacing={2}>
                        <Text fontSize="3xl" fontWeight="bold" color={headingColor}>
                          {fact.value}
                        </Text>
                        <Text fontSize="lg" fontWeight="semibold" color={headingColor}>
                          {fact.title}
                        </Text>
                        <Text fontSize="sm" color={secondaryTextColor} textAlign="center">
                          {fact.description}
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

      {/* Press Assets */}
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
                <Icon as={FaDownload} mr={2} />
                Press Assets
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Download Media Resources
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                High-resolution images, logos, and brand assets for media use.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {pressAssets.map((asset, index) => (
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
                          <Icon as={asset.icon} w={6} h={6} />
                        </Box>
                        <VStack spacing={2} align="start" flex={1}>
                          <Heading size="lg" color={headingColor}>
                            {asset.title}
                          </Heading>
                          <Text color={secondaryTextColor} lineHeight="tall">
                            {asset.description}
                          </Text>
                          <HStack spacing={4}>
                            <Text fontSize="sm" color={secondaryTextColor}>
                              Size: {asset.size}
                            </Text>
                            <Text fontSize="sm" color={secondaryTextColor}>
                              Format: {asset.format}
                            </Text>
                          </HStack>
                        </VStack>
                      </HStack>
                      <Button
                        colorScheme="green"
                        size="md"
                        leftIcon={<Icon as={FaDownload} />}
                        w="full"
                      >
                        Download {asset.title}
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Press Releases */}
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
                <Icon as={FaNewspaper} mr={2} />
                Press Releases
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Latest News & Announcements
              </Heading>
            </VStack>

            <VStack spacing={6} w="full">
              {pressReleases.map((release, index) => (
                <Card
                  key={index}
                  bg={cardBg}
                  shadow="md"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  w="full"
                >
                  <CardBody p={8}>
                    <VStack spacing={4} align="start">
                      <HStack justify="space-between" w="full" wrap="wrap">
                        <Heading size="lg" color={headingColor} flex={1}>
                          {release.title}
                        </Heading>
                        <Badge colorScheme="gray" variant="subtle">
                          {release.date}
                        </Badge>
                      </HStack>
                      <Text color={secondaryTextColor} lineHeight="tall">
                        {release.summary}
                      </Text>
                      <Button
                        colorScheme="green"
                        variant="outline"
                        size="sm"
                        rightIcon={<Icon as={FaDownload} />}
                      >
                        Read Full Release
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Media Quotes */}
      <Box py={20}>
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
                Media Coverage
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                What the Press is Saying
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {mediaQuotes.map((quote, index) => (
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
                      <Text
                        fontSize="lg"
                        color={headingColor}
                        lineHeight="tall"
                        fontStyle="italic"
                      >
                        "{quote.quote}"
                      </Text>
                      <Divider />
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" color={headingColor}>
                          {quote.author}
                        </Text>
                        <Text fontSize="sm" color={secondaryTextColor}>
                          {quote.date}
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

      {/* Contact Information */}
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
                <Icon as={FaEnvelope} mr={2} />
                Media Contact
              </Badge>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Get in Touch
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={secondaryTextColor}
                lineHeight="tall"
              >
                For media inquiries, interview requests, or additional information, 
                please contact our press team.
              </Text>
            </VStack>

            <Card
              bg={cardBg}
              shadow="xl"
              borderRadius="2xl"
              border="1px solid"
              borderColor={borderColor}
              w="full"
              maxW="2xl"
            >
              <CardBody p={12}>
                <VStack spacing={8}>
                  <VStack spacing={6}>
                    <HStack spacing={4}>
                      <Icon as={FaEnvelope} color={accentColor} />
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" color={headingColor}>
                          Press Inquiries
                        </Text>
                        <Link href="mailto:press@recipegenie.com" color={accentColor}>
                          press@recipegenie.com
                        </Link>
                      </VStack>
                    </HStack>
                    <HStack spacing={4}>
                      <Icon as={FaPhone} color={accentColor} />
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" color={headingColor}>
                          Phone
                        </Text>
                        <Link href="tel:+15551234567" color={accentColor}>
                          +1 (555) 123-4567
                        </Link>
                      </VStack>
                    </HStack>
                    <HStack spacing={4}>
                      <Icon as={FaGlobe} color={accentColor} />
                      <VStack spacing={1} align="start">
                        <Text fontWeight="bold" color={headingColor}>
                          Website
                        </Text>
                        <Link href="https://recipegenie.com" color={accentColor} isExternal>
                          recipegenie.com
                        </Link>
                      </VStack>
                    </HStack>
                  </VStack>
                  <Button
                    colorScheme="green"
                    size="lg"
                    leftIcon={<Icon as={FaEnvelope} />}
                    w="full"
                  >
                    Send Media Inquiry
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PressKitPage;
