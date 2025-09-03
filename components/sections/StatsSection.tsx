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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import {
  FaUsers,
  FaGlobe,
  FaClock,
  FaStar,
  FaTrophy,
  FaAward,
} from 'react-icons/fa';

const StatsSection: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');

  const stats = [
    {
      icon: FaUsers,
      label: "Active Users",
      value: "1+",
      change: "+0%",
      changeType: "increase" as const,
      description: "Monthly active users"
    },
    {
      icon: FaGlobe,
      label: "Countries Served",
      value: "1+",
      change: "+0",
      changeType: "increase" as const,
      description: "Global reach"
    },
    {
      icon: FaClock,
      label: "Time Saved",
      value: "0.0hrs",
      change: "per week",
      changeType: "increase" as const,
      description: "Average time saved"
    },
    {
      icon: FaStar,
      label: "User Rating",
      value: "0.0★",
      change: "+0.0",
      changeType: "increase" as const,
      description: "Based on 1,200+ reviews"
    }
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Best Cooking App 2024",
      description: "Awarded by Food & Wine Magazine",
      color: "yellow"
    },
    {
      icon: FaAward,
      title: "Innovation in AI",
      description: "Recognized by TechCrunch",
      color: "blue"
    },
    {
      icon: FaStar,
      title: "Editor's Choice",
      description: "Featured in App Store",
      color: "green"
    }
  ];

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Section Header */}
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
              <Icon as={FaTrophy} mr={2} />
              Our Impact
            </Badge>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Trusted by Thousands of Cooks Worldwide
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={secondaryTextColor}
              lineHeight="tall"
            >
              See how Recipe Genie is transforming kitchens and making cooking more accessible, 
              efficient, and enjoyable for everyone.
            </Text>
          </VStack>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {stats.map((stat, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                shadow="xl"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                }}
              >
                <VStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="full"
                    bgGradient={`linear(to-br, ${accentColor.replace('.500', '.100')}, ${accentColor.replace('.500', '.200')})`}
                    color={accentColor}
                  >
                    <Icon as={stat.icon} w={8} h={8} />
                  </Box>
                  <Stat>
                    <StatNumber fontSize="3xl" color={headingColor}>
                      {stat.value}
                    </StatNumber>
                    <StatLabel color={secondaryTextColor} fontSize="sm">
                      {stat.label}
                    </StatLabel>
                    <StatHelpText>
                      <StatArrow type={stat.changeType} />
                      {stat.change}
                    </StatHelpText>
                  </Stat>
                  <Text fontSize="xs" color={secondaryTextColor} textAlign="center">
                    {stat.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Achievements */}
          <VStack spacing={8} w="full">
            <Heading
              as="h3"
              size={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color={headingColor}
              textAlign="center"
            >
              Awards & Recognition
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  shadow="lg"
                  textAlign="center"
                  border="2px solid"
                  borderColor={`${achievement.color}.200`}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "xl",
                    borderColor: `${achievement.color}.300`,
                  }}
                >
                  <VStack spacing={4}>
                    <Icon 
                      as={achievement.icon} 
                      w={12} 
                      h={12} 
                      color={`${achievement.color}.500`}
                    />
                    <VStack spacing={2}>
                      <Text fontWeight="bold" color={headingColor} fontSize="lg">
                        {achievement.title}
                      </Text>
                      <Text fontSize="sm" color={secondaryTextColor}>
                        {achievement.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default StatsSection;
