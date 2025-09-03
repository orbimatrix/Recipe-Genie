import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  Heading,
  Badge,
  Icon,
  useColorModeValue,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';
import {
  FaBrain,
  FaArrowRight,
  FaPlay,
  FaUtensils,
  FaGlobe,
} from 'react-icons/fa';

interface HeroSectionProps {
  onStartCooking: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartCooking }) => {
  const heroBg = useColorModeValue('linear(to-br, green.50, blue.50)', 'linear(to-br, gray.800, gray.900)');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');

  return (
    <Box
      bgGradient={heroBg}
      minH="100vh"
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.05}
        bg="gray.200"
      />
      
      <Container maxW="container.xl" py={20} position="relative" zIndex={1}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center" minH="80vh">
          {/* Left Column - Content */}
          <VStack spacing={8} align="start" textAlign={{ base: "center", lg: "left" }}>
            <VStack spacing={4} align={{ base: "center", lg: "start" }}>
              <Badge
                colorScheme="green"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                <Icon as={FaBrain} mr={2} />
                AI-Powered Recipe Discovery
              </Badge>
              
              <Heading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight="shorter"
                color={headingColor}
              >
                Transform Your Kitchen with{' '}
                <Text
                  as="span"
                  bgGradient="linear(to-r, green.400, blue.500)"
                  bgClip="text"
                >
                  AI-Powered Recipes
                </Text>
              </Heading>
              
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={secondaryTextColor}
                maxW="2xl"
                lineHeight="tall"
              >
                Discover authentic recipes from around the world, guided by step-by-step video tutorials, 
                and personalized meal planning powered by artificial intelligence. Perfect for home cooks, 
                professional chefs, and food enthusiasts.
              </Text>
            </VStack>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              w={{ base: "full", sm: "auto" }}
              align={{ base: "center", lg: "start" }}
            >
              <Button
                size="lg"
                colorScheme="green"
                rightIcon={<Icon as={FaArrowRight} />}
                onClick={onStartCooking}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderRadius="xl"
                boxShadow="xl"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.3s ease"
              >
                Start Cooking Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="green"
                leftIcon={<Icon as={FaPlay} />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderRadius="xl"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                Watch Demo
              </Button>
            </Stack>

            {/* Trust Indicators */}
            <HStack spacing={8} wrap="wrap" justify={{ base: "center", lg: "start" }}>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>1</Text>
                <Text fontSize="sm" color={secondaryTextColor}>Recipes Generated</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>1+</Text>
                <Text fontSize="sm" color={secondaryTextColor}>Happy Cooks</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>1+</Text>
                <Text fontSize="sm" color={secondaryTextColor}>Countries</Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Right Column - Visual */}
          <Box position="relative">
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              transform="rotate(3deg)"
              _hover={{
                transform: "rotate(0deg) scale(1.02)",
                transition: "all 0.3s ease",
              }}
            >
              <AspectRatio ratio={4/5} maxW="400px" mx="auto">
                <Box
                  bgGradient="linear(to-br, green.100, blue.100)"
                  position="relative"
                  overflow="hidden"
                >
                  {/* Mock Recipe Card */}
                  <VStack spacing={4} p={6} h="full" justify="center">
                    <Icon as={FaUtensils} w={16} h={16} color="green.500" />
                    <VStack spacing={2}>
                      <Text fontWeight="bold" fontSize="lg" color="gray.800">
                        Mediterranean Chicken
                      </Text>
                      <Text fontSize="sm" color="gray.600" textAlign="center">
                        AI-recommended based on your preferences
                      </Text>
                    </VStack>
                    <HStack spacing={2}>
                      <Badge colorScheme="green" variant="subtle">Italian</Badge>
                      <Badge colorScheme="blue" variant="subtle">30 min</Badge>
                    </HStack>
                  </VStack>
                  
                  {/* Floating Elements */}
                  <Box
                    position="absolute"
                    top="10%"
                    right="10%"
                    bg="white"
                    borderRadius="full"
                    p={3}
                    boxShadow="lg"
                    animation="float 3s ease-in-out infinite"
                  >
                    <Icon as={FaBrain} color="green.500" />
                  </Box>
                  <Box
                    position="absolute"
                    bottom="20%"
                    left="10%"
                    bg="white"
                    borderRadius="full"
                    p={3}
                    boxShadow="lg"
                    animation="float 3s ease-in-out infinite 1.5s"
                  >
                    <Icon as={FaGlobe} color="blue.500" />
                  </Box>
                </Box>
              </AspectRatio>
            </Box>
            
            {/* Background Decoration */}
            <Box
              position="absolute"
              top="-10%"
              right="-10%"
              w="200px"
              h="200px"
              bg="green.200"
              borderRadius="full"
              opacity={0.3}
              zIndex={-1}
            />
            <Box
              position="absolute"
              bottom="-10%"
              left="-10%"
              w="150px"
              h="150px"
              bg="blue.200"
              borderRadius="full"
              opacity={0.3}
              zIndex={-1}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
