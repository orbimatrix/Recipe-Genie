import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Card,
  CardBody,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
} from '@chakra-ui/react';
import { FaGavel, FaUtensils, FaExclamationTriangle, FaShieldAlt, FaFileContract } from 'react-icons/fa';

const TermsPage: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  const lastUpdated = "December 2024";

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={16}>
        {/* Header */}
        <VStack spacing={8} mb={16} textAlign="center">
          <HStack spacing={4}>
            <Icon as={FaGavel} w={16} h={16} color="green.500" />
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              Terms of Service
            </Heading>
          </HStack>
          <Text fontSize="lg" color={secondaryTextColor}>
            Last updated: {lastUpdated}
          </Text>
        </VStack>

        {/* Important Notice */}
        <Alert status="warning" mb={8} borderRadius="lg">
          <AlertIcon />
          <Box>
            <AlertTitle>Important Legal Notice</AlertTitle>
            <AlertDescription>
              Please read these Terms of Service carefully before using Recipe Genie. 
              By using our service, you agree to be bound by these terms.
            </AlertDescription>
          </Box>
        </Alert>

        {/* Introduction */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>1. Introduction</Heading>
              <Text color={secondaryTextColor}>
                Welcome to Recipe Genie ("we," "our," or "us"). These Terms of Service ("Terms") govern 
                your use of our AI-powered recipe generation service, including our website, mobile 
                applications, and related services (collectively, the "Service").
              </Text>
              <Text color={secondaryTextColor}>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Acceptance of Terms */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>2. Acceptance of Terms</Heading>
              <Text color={secondaryTextColor}>
                By using Recipe Genie, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                you must not use our Service.
              </Text>
              <Text color={secondaryTextColor}>
                These Terms constitute a legally binding agreement between you and Recipe Genie.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Description of Service */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>3. Description of Service</Heading>
              <Text color={secondaryTextColor} mb={4}>
                Recipe Genie is an AI-powered platform that:
              </Text>
              <List spacing={2}>
                                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   Generates personalized recipes based on your available ingredients
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   Provides cooking instructions and nutritional information
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   Allows you to save and organize your favorite recipes
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   Offers dietary filtering and ingredient exclusion options
                 </ListItem>
              </List>
              <Text color={secondaryTextColor} mt={4}>
                The Service is provided "as is" and we make no warranties about its accuracy, 
                completeness, or suitability for your specific needs.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* User Responsibilities */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>4. User Responsibilities</Heading>
              <Text color={secondaryTextColor} mb={4}>
                As a user of Recipe Genie, you agree to:
              </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Provide accurate and truthful information about your ingredients and dietary preferences
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Use the Service in compliance with all applicable laws and regulations
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Not attempt to reverse engineer, hack, or compromise the Service
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Not use the Service for any illegal or unauthorized purpose
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Respect the intellectual property rights of others
                </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Prohibited Uses */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>5. Prohibited Uses</Heading>
              <Text color={secondaryTextColor} mb={4}>
                You may not use Recipe Genie:
              </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  For any unlawful purpose or to solicit others to perform unlawful acts
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of others
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  To submit false or misleading information
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="red.500" />
                  To upload or transmit viruses or any other type of malicious code
                </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Intellectual Property */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>6. Intellectual Property Rights</Heading>
              <Text color={secondaryTextColor}>
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of Recipe Genie and its licensors. The Service is protected by 
                copyright, trademark, and other laws.
              </Text>
              <Text color={secondaryTextColor}>
                Our trademarks and trade dress may not be used in connection with any product or service 
                without our prior written consent.
              </Text>
              <Text color={secondaryTextColor}>
                Generated recipes are provided for your personal use. You may not redistribute, 
                sell, or commercialize recipes generated by our Service without permission.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Disclaimers */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>7. Disclaimers</Heading>
              <Text color={secondaryTextColor} mb={4}>
                <Text as="span" fontWeight="semibold">Important:</Text> Recipe Genie provides AI-generated recipes for informational purposes only. 
                We make no warranties regarding:
              </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="orange.500" />
                  The accuracy, safety, or nutritional value of generated recipes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="orange.500" />
                  Allergen information or dietary suitability
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="orange.500" />
                  Cooking times, temperatures, or techniques
                </ListItem>
                <ListItem>
                  <ListIcon as={FaExclamationTriangle} color="orange.500" />
                  The availability or quality of ingredients
                </ListItem>
              </List>
              <Text color={secondaryTextColor} mt={4}>
                Always exercise caution when cooking, especially regarding food allergies, 
                dietary restrictions, and food safety practices.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Limitation of Liability */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>8. Limitation of Liability</Heading>
              <Text color={secondaryTextColor}>
                In no event shall Recipe Genie, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </Text>
              <Text color={secondaryTextColor}>
                This includes but is not limited to any health issues, food allergies, or injuries that 
                may result from following recipes generated by our Service.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Termination */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>9. Termination</Heading>
              <Text color={secondaryTextColor}>
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </Text>
              <Text color={secondaryTextColor}>
                Upon termination, your right to use the Service will cease immediately. All provisions 
                of the Terms which by their nature should survive termination shall survive termination.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Changes to Terms */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>10. Changes to Terms</Heading>
              <Text color={secondaryTextColor}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </Text>
              <Text color={secondaryTextColor}>
                By continuing to access or use our Service after those revisions become effective, 
                you agree to be bound by the revised terms.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Governing Law */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>11. Governing Law</Heading>
              <Text color={secondaryTextColor}>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
                Recipe Genie operates, without regard to its conflict of law provisions.
              </Text>
              <Text color={secondaryTextColor}>
                Our failure to enforce any right or provision of these Terms will not be considered 
                a waiver of those rights.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Contact Information */}
        <Card bg="green.50" borderColor="green.200" shadow="lg">
          <CardBody p={8} textAlign="center">
            <VStack spacing={4}>
              <Icon as={FaFileContract} w={12} h={12} color="green.500" />
              <Heading size="lg" color="green.500">Questions About These Terms?</Heading>
              <Text color="green.400" maxW="2xl">
                If you have any questions about these Terms of Service, please contact us at:
              </Text>
              <Badge colorScheme="green" fontSize="md" p={3}>
                legal@recipegenie.com
              </Badge>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default TermsPage;
