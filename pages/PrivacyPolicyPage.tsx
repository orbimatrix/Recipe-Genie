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
  Divider,
  List,
  ListItem,
  ListIcon,
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { FaShieldAlt, FaUtensils, FaLock, FaEye, FaUserShield, FaDatabase } from 'react-icons/fa';

const PrivacyPolicyPage: React.FC = () => {
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
            <Icon as={FaShieldAlt} w={16} h={16} color="green.500" />
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              Privacy Policy
            </Heading>
          </HStack>
          <Text fontSize="lg" color={secondaryTextColor}>
            Last updated: {lastUpdated}
          </Text>
        </VStack>

        {/* Privacy Notice */}
        <Alert status="info" mb={8} borderRadius="lg">
          <AlertIcon />
          <Box>
            <AlertTitle>Your Privacy Matters!</AlertTitle>
            <AlertDescription>
              We are committed to protecting your privacy and being transparent about how we collect, 
              use, and protect your information.
            </AlertDescription>
          </Box>
        </Alert>

        {/* Introduction */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={4} align="start">
              <Heading size="lg" color={headingColor}>Introduction</Heading>
              <Text color={secondaryTextColor}>
                Recipe Genie ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                AI-powered recipe generation service. Please read this privacy policy carefully.
              </Text>
              <Text color={secondaryTextColor}>
                By using Recipe Genie, you agree to the collection and use of information in accordance 
                with this policy.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Information We Collect */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <HStack>
                <Icon as={FaDatabase} color="green.500" />
                <Heading size="lg" color={headingColor}>Information We Collect</Heading>
              </HStack>
              
              <Box>
                <Heading size="md" mb={3} color={headingColor}>Personal Information</Heading>
                <Text color={secondaryTextColor} mb={3}>
                  We may collect personal information that you voluntarily provide to us, including:
                </Text>
                <List spacing={2}>
                                     <ListItem>
                     <ListIcon as={FaUtensils} color="green.500" />
                     Recipe ingredients and preferences you input
                   </ListItem>
                   <ListItem>
                     <ListIcon as={FaUtensils} color="green.500" />
                     Dietary restrictions and food allergies
                   </ListItem>
                   <ListItem>
                     <ListIcon as={FaUtensils} color="green.500" />
                     Saved recipes and favorites
                   </ListItem>
                   <ListItem>
                     <ListIcon as={FaUtensils} color="green.500" />
                     Usage patterns and preferences
                   </ListItem>
                </List>
              </Box>

              <Box>
                <Heading size="md" mb={3} color={headingColor}>Automatically Collected Information</Heading>
                <Text color={secondaryTextColor} mb={3}>
                  We automatically collect certain information when you use our service:
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={FaEye} color="blue.500" />
                    Device information (browser type, operating system)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaEye} color="blue.500" />
                    Usage data (pages visited, time spent, features used)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaEye} color="blue.500" />
                    IP address and general location information
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaEye} color="blue.500" />
                    Cookies and similar tracking technologies
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        {/* How We Use Information */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <Heading size="lg" color={headingColor}>How We Use Your Information</Heading>
              <Text color={secondaryTextColor} mb={4}>
                We use the information we collect for the following purposes:
              </Text>
              <List spacing={3}>
                                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Recipe Generation:</Text> To create personalized recipes based on your ingredients and preferences
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Service Improvement:</Text> To analyze usage patterns and improve our AI algorithms
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Personalization:</Text> To remember your saved recipes and preferences
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Communication:</Text> To respond to your inquiries and provide customer support
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Analytics:</Text> To understand how our service is used and identify areas for improvement
                 </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Data Security */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <HStack>
                <Icon as={FaLock} color="green.500" />
                <Heading size="lg" color={headingColor}>Data Security</Heading>
              </HStack>
              <Text color={secondaryTextColor}>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Encryption of data in transit and at rest
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Regular security assessments and updates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Access controls and authentication measures
                </ListItem>
                <ListItem>
                  <ListIcon as={FaShieldAlt} color="green.500" />
                  Secure data storage and backup procedures
                </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Data Sharing */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <HStack>
                <Icon as={FaUserShield} color="green.500" />
                <Heading size="lg" color={headingColor}>Information Sharing</Heading>
              </HStack>
              <Text color={secondaryTextColor} mb={4}>
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </Text>
              <List spacing={2}>
                                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Service Providers:</Text> We may share information with trusted third-party service providers who assist us in operating our service
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Legal Requirements:</Text> We may disclose information when required by law or to protect our rights and safety
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Consent:</Text> We may share information with your explicit consent
                 </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Your Rights */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <Heading size="lg" color={headingColor}>Your Rights</Heading>
              <Text color={secondaryTextColor} mb={4}>
                You have certain rights regarding your personal information:
              </Text>
              <List spacing={2}>
                                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Access:</Text> Request access to your personal information
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Correction:</Text> Request correction of inaccurate information
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Deletion:</Text> Request deletion of your personal information
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Portability:</Text> Request a copy of your data in a portable format
                 </ListItem>
                 <ListItem>
                   <ListIcon as={FaUtensils} color="green.500" />
                   <Text as="span" fontWeight="semibold">Objection:</Text> Object to certain processing of your information
                 </ListItem>
              </List>
            </VStack>
          </CardBody>
        </Card>

        {/* Cookies */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <Heading size="lg" color={headingColor}>Cookies and Tracking</Heading>
              <Text color={secondaryTextColor}>
                We use cookies and similar tracking technologies to enhance your experience on our service. 
                Cookies are small data files stored on your device that help us remember your preferences 
                and improve our service functionality.
              </Text>
              <Text color={secondaryTextColor}>
                You can control cookie settings through your browser preferences. However, disabling cookies 
                may affect the functionality of our service.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Children's Privacy */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <Heading size="lg" color={headingColor}>Children's Privacy</Heading>
              <Text color={secondaryTextColor}>
                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us immediately.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card bg={cardBg} shadow="lg" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="start">
              <Heading size="lg" color={headingColor}>Changes to This Privacy Policy</Heading>
              <Text color={secondaryTextColor}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically for any changes.
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {/* Contact Information */}
        <Card bg="green.50" borderColor="green.200" shadow="lg">
          <CardBody p={8} textAlign="center">
            <VStack spacing={4}>
              <Icon as={FaShieldAlt} w={12} h={12} color="green.500" />
              <Heading size="lg" color="green.500">Questions About This Privacy Policy?</Heading>
              <Text color="green.400" maxW="2xl">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </Text>
              <Badge colorScheme="green" fontSize="md" p={3}>
                privacy@recipegenie.com
              </Badge>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
