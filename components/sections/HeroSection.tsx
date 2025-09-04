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
      
      <Container maxW="container.xl" py={{ base: 12, md: 16, lg: 20 }} position="relative" zIndex={1}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 8, md: 12, lg: 16 }} alignItems="center" minH={{ base: "70vh", md: "80vh" }}>
          {/* Left Column - Content */}
          <VStack spacing={{ base: 6, md: 8 }} align="start" textAlign={{ base: "center", lg: "left" }}>
            <VStack spacing={{ base: 3, md: 4 }} align={{ base: "center", lg: "start" }}>
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
                size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", md: "shorter" }}
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
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                color={secondaryTextColor}
                maxW="2xl"
                lineHeight="tall"
                px={{ base: 4, md: 0 }}
              >
                Discover authentic recipes from around the world, guided by step-by-step video tutorials, 
                and personalized meal planning powered by artificial intelligence. Perfect for home cooks, 
                professional chefs, and food enthusiasts.
              </Text>
            </VStack>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 3, md: 4 }}
              w={{ base: "full", sm: "auto" }}
              align={{ base: "center", lg: "start" }}
              px={{ base: 4, md: 0 }}
            >
              <Button
                size={{ base: "md", md: "lg" }}
                colorScheme="green"
                rightIcon={<Icon as={FaArrowRight} />}
                onClick={onStartCooking}
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="semibold"
                borderRadius="xl"
                boxShadow="xl"
                w={{ base: "full", sm: "auto" }}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.3s ease"
              >
                Start Cooking Now
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="outline"
                colorScheme="green"
                leftIcon={<Icon as={FaPlay} />}
                px={{ base: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="semibold"
                borderRadius="xl"
                w={{ base: "full", sm: "auto" }}
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
            <HStack spacing={{ base: 6, md: 8 }} wrap="wrap" justify={{ base: "center", lg: "start" }} px={{ base: 4, md: 0 }}>
              <VStack spacing={1}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color={accentColor}>1</Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color={secondaryTextColor}>Recipes Generated</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color={accentColor}>1+</Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color={secondaryTextColor}>Happy Cooks</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color={accentColor}>1+</Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color={secondaryTextColor}>Countries</Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Right Column - Visual */}
          <Box position="relative" display={{ base: "none", lg: "block" }}>
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
                  backgroundImage="url('/chicken.jpg')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  position="relative"
                  overflow="hidden"
                >
                  {/* Overlay for better content readability */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.200"
                    zIndex={1}
                  />
                  {/* Mock Recipe Card */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="whiteAlpha.900"
                    backdropFilter="blur(10px)"
                    borderRadius="2xl"
                    p={6}
                    boxShadow="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    zIndex={2}
                    minW="280px"
                  >
                    <VStack spacing={4}>
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
                  </Box>
                  
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
                    zIndex={3}
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
                    zIndex={3}
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
