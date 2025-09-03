import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Stack,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUtensils,
  FaHeart,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('gray.300', 'gray.400');
  const headingColor = useColorModeValue('white', 'gray.100');
  const borderColor = useColorModeValue('gray.700', 'gray.600');
  const hoverColor = useColorModeValue('green.400', 'green.300');

  const currentYear = new Date().getFullYear();

  return (
    <Box bg={bgColor} color={textColor}>
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Brand Section */}
          <VStack spacing={6} align="start">
            <HStack spacing={3}>
              <Icon as={FaUtensils} w={8} h={8} color="green.400" />
              <VStack spacing={0} align="start">
                <Text fontSize="2xl" fontWeight="bold" color={headingColor}>
                  Recipe Genie
                </Text>
                <Text fontSize="sm" color={textColor}>
                  AI-Powered Cooking
                </Text>
              </VStack>
            </HStack>
            <Text fontSize="sm" lineHeight="tall" maxW="300px" color={textColor}>
              Transform your kitchen with AI-powered recipe recommendations, 
              authentic cultural recipes, and personalized meal planning.
            </Text>
            <HStack spacing={4}>
              <Link
                href="https://facebook.com"
                isExternal
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaFacebook} w={5} h={5} />
              </Link>
              <Link
                href="https://twitter.com"
                isExternal
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaTwitter} w={5} h={5} />
              </Link>
              <Link
                href="https://instagram.com"
                isExternal
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaInstagram} w={5} h={5} />
              </Link>
              <Link
                href="https://youtube.com"
                isExternal
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaYoutube} w={5} h={5} />
              </Link>
              <Link
                href="https://linkedin.com"
                isExternal
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaLinkedin} w={5} h={5} />
              </Link>
            </HStack>
          </VStack>

          {/* Features Section */}
          <VStack spacing={6} align="start">
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>
              Features
            </Text>
            <VStack spacing={3} align="start">
              <Link
                href="#ai-recommendations"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                AI-Powered Recommendations
              </Link>
              <Link
                href="#cultural-recipes"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Cultural Recipe Authenticity
              </Link>
              <Link
                href="#video-tutorials"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Step-by-Step Video Tutorials
              </Link>
              <Link
                href="#meal-planning"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Personalized Meal Planning
              </Link>
            </VStack>
          </VStack>

          {/* Company Section */}
          <VStack spacing={6} align="start">
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>
              Company
            </Text>
            <VStack spacing={3} align="start">
              <Link
                href="/about"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Blog
              </Link>
              <Link
                href="/press"
                color={textColor}
                _hover={{ color: hoverColor }}
                transition="color 0.3s ease"
                fontSize="sm"
              >
                Press Kit
              </Link>
            </VStack>
          </VStack>

          {/* Contact Section */}
          <VStack spacing={6} align="start">
            <Text fontSize="lg" fontWeight="bold" color={headingColor}>
              Contact
            </Text>
            <VStack spacing={4} align="start">
              <HStack spacing={3}>
                <Icon as={FaEnvelope} w={4} h={4} color="green.400" />
                <Text fontSize="sm" color={textColor}>hello@recipegenie.com</Text>
              </HStack>
              <HStack spacing={3}>
                <Icon as={FaPhone} w={4} h={4} color="green.400" />
                <Text fontSize="sm" color={textColor}>+1 (555) 123-4567</Text>
              </HStack>
              <HStack spacing={3} align="start">
                <Icon as={FaMapMarkerAlt} w={4} h={4} color="green.400" mt={0.5} />
                <Text fontSize="sm" color={textColor}>
                  123 Culinary Street<br />
                  Food City, FC 12345
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor={borderColor} my={12} />

        {/* Bottom Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          spacing={4}
        >
          <Text fontSize="sm" color={textColor}>
            © {currentYear} Recipe Genie. All rights reserved.
          </Text>
          <HStack spacing={6}>
            <Link
              href="/privacy"
              color={textColor}
              _hover={{ color: hoverColor }}
              transition="color 0.3s ease"
              fontSize="sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color={textColor}
              _hover={{ color: hoverColor }}
              transition="color 0.3s ease"
              fontSize="sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              color={textColor}
              _hover={{ color: hoverColor }}
              transition="color 0.3s ease"
              fontSize="sm"
            >
              Cookie Policy
            </Link>
          </HStack>
        </Stack>

        {/* Made with Love */}
        <Box textAlign="center" mt={8}>
          <Text fontSize="sm" color={textColor}>
            Made with <Icon as={FaHeart} color="red.400" mx={1} /> by the Recipe Genie Team
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
