import React, { useState, useMemo } from 'react';
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
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowRight,
  FaUtensils,
  FaLightbulb,
  FaGlobe,
  FaHeart,
  FaBookOpen,
  FaFilter,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const heroBg = useColorModeValue('linear(to-br, green.50, blue.50)', 'linear(to-br, gray.800, gray.700)');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = {
    title: "The Future of AI-Powered Cooking: How Technology is Revolutionizing Kitchens",
    excerpt: "Discover how artificial intelligence is transforming the way we cook, from personalized recipe recommendations to smart kitchen appliances that learn your preferences.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    category: "Technology",
    readTime: "8 min read",
    image: "/chicken.jpg"
  };

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Spices Every Home Cook Should Have",
      excerpt: "Build your spice collection with these fundamental ingredients that will elevate any dish.",
      author: "Elena Petrov",
      date: "December 12, 2024",
      category: "Cooking Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=300&fit=crop",
      content: "Full article content about essential spices..."
    },
    {
      id: 2,
      title: "Cultural Cooking: Preserving Authentic Recipes in the Digital Age",
      excerpt: "How we're working with communities worldwide to preserve and share traditional cooking methods.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      category: "Culture",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      content: "Full article content about cultural cooking..."
    },
    {
      id: 3,
      title: "Meal Planning Made Simple: A Beginner's Guide",
      excerpt: "Learn how to plan your meals efficiently, reduce food waste, and save time in the kitchen.",
      author: "David Kim",
      date: "December 8, 2024",
      category: "Meal Planning",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop",
      content: "Full article content about meal planning..."
    },
    {
      id: 4,
      title: "The Science Behind Perfect Pasta: Temperature, Timing, and Technique",
      excerpt: "Master the art of pasta cooking with these scientifically-backed techniques for perfect results every time.",
      author: "Elena Petrov",
      date: "December 5, 2024",
      category: "Cooking Science",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop",
      content: "Full article content about pasta science..."
    },
    {
      id: 5,
      title: "Sustainable Cooking: Reducing Your Kitchen's Environmental Impact",
      excerpt: "Simple changes you can make in your kitchen to cook more sustainably and reduce food waste.",
      author: "Sarah Chen",
      date: "December 3, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop",
      content: "Full article content about sustainable cooking..."
    },
    {
      id: 6,
      title: "Building a Global Recipe Database: Challenges and Solutions",
      excerpt: "Behind the scenes of how we're building the world's most comprehensive and culturally accurate recipe collection.",
      author: "Marcus Rodriguez",
      date: "December 1, 2024",
      category: "Technology",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      content: "Full article content about recipe database..."
    }
  ];

  const categories = [
    "All Posts",
    "Technology",
    "Cooking Tips",
    "Culture",
    "Meal Planning",
    "Cooking Science",
    "Sustainability"
  ];

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  // Click handlers
  const handleArticleClick = (postId: number) => {
    const articleRoutes = {
      1: '/articles/spices',
      2: '/articles/cultural-cooking',
      3: '/articles/meal-planning',
      4: '/articles/pasta-science',
      5: '/articles/sustainable-cooking',
      6: '/articles/recipe-database'
    };
    
    const route = articleRoutes[postId as keyof typeof articleRoutes];
    if (route) {
      navigate(route);
    }
  };

  const handleFeaturedArticleClick = () => {
    // Navigate to a featured article page (could be the first article or a special featured one)
    navigate('/articles/spices');
  };

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
              <Icon as={FaBookOpen} mr={2} />
              Recipe Genie Blog
            </Badge>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Stories, Tips & Insights from the Kitchen
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color={secondaryTextColor}
              lineHeight="tall"
              maxW="4xl"
            >
              Discover cooking tips, cultural insights, technology updates, and inspiring 
              stories from our community of food lovers and culinary experts.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Search and Filter Section */}
      <Box py={8} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={6}>
                         <HStack spacing={4} w="full" maxW="2xl">
               <InputGroup>
                 <InputLeftElement>
                   <Icon as={FaSearch} color={secondaryTextColor} />
                 </InputLeftElement>
                 <Input
                   placeholder="Search articles..."
                   bg={cardBg}
                   border="1px solid"
                   borderColor={borderColor}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
               </InputGroup>
               <Select
                 placeholder="All Categories"
                 bg={cardBg}
                 border="1px solid"
                 borderColor={borderColor}
                 maxW="200px"
                 value={selectedCategory}
                 onChange={(e) => setSelectedCategory(e.target.value)}
               >
                 {categories.map((category) => (
                   <option key={category} value={category}>
                     {category}
                   </option>
                 ))}
               </Select>
             </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Featured Post Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <HStack spacing={4} align="center" w="full">
              <Icon as={FaLightbulb} color={accentColor} />
              <Heading
                as="h2"
                size={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color={headingColor}
              >
                Featured Article
              </Heading>
            </HStack>

                         <Card
               bg={cardBg}
               shadow="xl"
               borderRadius="2xl"
               overflow="hidden"
               transition="all 0.3s ease"
               cursor="pointer"
               _hover={{
                 transform: "translateY(-4px)",
                 shadow: "2xl",
               }}
               onClick={handleFeaturedArticleClick}
             >
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
                <Box h={{ base: "300px", lg: "400px" }}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
                <CardBody p={8}>
                  <VStack spacing={6} align="start" h="full" justify="center">
                    <VStack spacing={4} align="start">
                      <Badge colorScheme="green" variant="subtle" px={3} py={1}>
                        {featuredPost.category}
                      </Badge>
                      <Heading
                        as="h3"
                        size={{ base: "lg", md: "xl" }}
                        fontWeight="bold"
                        color={headingColor}
                        lineHeight="shorter"
                      >
                        {featuredPost.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color={secondaryTextColor}
                        lineHeight="tall"
                      >
                        {featuredPost.excerpt}
                      </Text>
                    </VStack>

                    <VStack spacing={4} align="start" w="full">
                      <HStack spacing={6} wrap="wrap">
                        <HStack spacing={2}>
                          <Icon as={FaUser} w={4} h={4} color={secondaryTextColor} />
                          <Text fontSize="sm" color={secondaryTextColor}>
                            {featuredPost.author}
                          </Text>
                        </HStack>
                        <HStack spacing={2}>
                          <Icon as={FaCalendar} w={4} h={4} color={secondaryTextColor} />
                          <Text fontSize="sm" color={secondaryTextColor}>
                            {featuredPost.date}
                          </Text>
                        </HStack>
                        <HStack spacing={2}>
                          <Icon as={FaTag} w={4} h={4} color={secondaryTextColor} />
                          <Text fontSize="sm" color={secondaryTextColor}>
                            {featuredPost.readTime}
                          </Text>
                        </HStack>
                      </HStack>
                      <Button
                        colorScheme="green"
                        size="lg"
                        rightIcon={<Icon as={FaArrowRight} />}
                        w="full"
                      >
                        Read Full Article
                      </Button>
                    </VStack>
                  </VStack>
                </CardBody>
              </SimpleGrid>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Blog Posts Grid */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <HStack spacing={4} align="center" w="full" justify="space-between">
              <HStack spacing={4} align="center">
                <Icon as={FaBookOpen} color={accentColor} />
                <Heading
                  as="h2"
                  size={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color={headingColor}
                >
                  Latest Articles
                </Heading>
              </HStack>
              <Text fontSize="sm" color={secondaryTextColor}>
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </Text>
            </HStack>

                         {filteredPosts.length > 0 ? (
               <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                 {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  bg={cardBg}
                  shadow="lg"
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  cursor="pointer"
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "xl",
                  }}
                  onClick={() => handleArticleClick(post.id)}
                >
                  <Box h="200px" overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <Badge colorScheme="blue" variant="subtle" px={2} py={1}>
                        {post.category}
                      </Badge>
                      <Heading
                        as="h3"
                        size="md"
                        fontWeight="bold"
                        color={headingColor}
                        lineHeight="shorter"
                      >
                        {post.title}
                      </Heading>
                      <Text
                        fontSize="sm"
                        color={secondaryTextColor}
                        lineHeight="tall"
                        noOfLines={3}
                      >
                        {post.excerpt}
                      </Text>
                      <VStack spacing={3} align="start" w="full">
                        <HStack spacing={4} wrap="wrap">
                          <HStack spacing={1}>
                            <Icon as={FaUser} w={3} h={3} color={secondaryTextColor} />
                            <Text fontSize="xs" color={secondaryTextColor}>
                              {post.author}
                            </Text>
                          </HStack>
                          <HStack spacing={1}>
                            <Icon as={FaCalendar} w={3} h={3} color={secondaryTextColor} />
                            <Text fontSize="xs" color={secondaryTextColor}>
                              {post.date}
                            </Text>
                          </HStack>
                        </HStack>
                                                 <HStack spacing={1}>
                           <Icon as={FaTag} w={3} h={3} color={secondaryTextColor} />
                           <Text fontSize="xs" color={secondaryTextColor}>
                             {post.readTime}
                           </Text>
                         </HStack>
                         <Text fontSize="xs" color={accentColor} fontWeight="medium">
                           Click to read more →
                         </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
                 ))}
               </SimpleGrid>
             ) : (
               <VStack spacing={4} py={12}>
                 <Icon as={FaSearch} w={12} h={12} color={secondaryTextColor} />
                 <Text fontSize="lg" color={headingColor} fontWeight="semibold">
                   No articles found
                 </Text>
                 <Text fontSize="sm" color={secondaryTextColor} textAlign="center">
                   Try adjusting your search terms or category filter
                 </Text>
               </VStack>
             )}

            <Button
              colorScheme="green"
              size="lg"
              rightIcon={<Icon as={FaArrowRight} />}
            >
              Load More Articles
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Card
            bgGradient="linear(to-r, green.500, blue.500)"
            color="white"
            borderRadius="2xl"
            overflow="hidden"
          >
            <CardBody p={12}>
              <VStack spacing={8} textAlign="center">
                <VStack spacing={4}>
                  <Icon as={FaHeart} w={12} h={12} />
                  <Heading
                    as="h2"
                    size={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                  >
                    Stay Updated with Our Latest Stories
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    opacity={0.9}
                    maxW="2xl"
                  >
                    Get the latest cooking tips, cultural insights, and technology updates 
                    delivered straight to your inbox.
                  </Text>
                </VStack>
                <HStack spacing={4} w="full" maxW="md">
                  <Input
                    placeholder="Enter your email"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.700" }}
                    flex={1}
                  />
                  <Button
                    colorScheme="white"
                    color="green.500"
                    fontWeight="bold"
                    rightIcon={<Icon as={FaArrowRight} />}
                  >
                    Subscribe
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogPage;
