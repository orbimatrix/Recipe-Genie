import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Heading,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Image,
  Badge,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Textarea,
  Divider,
  Stack,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaShare,
  FaClock,
  FaUsers,
  FaFire,
  FaFilter,
  FaSort,
  FaEye,
  FaHeart,
  FaMagic,
  FaTimes,
} from 'react-icons/fa';
import { LoadingSpinner } from '../components/icons/LoadingSpinner';
import RecipeUploadForm from '../components/forms/RecipeUploadForm';
import Footer from '../components/Footer';

interface Recipe {
  id: string;
  recipeName: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  category: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  tags?: string[];
  image?: string;
  createdAt: number;
  updatedAt: number;
}

const RecipeCollectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // All hooks must be called before any early returns
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Load recipes from localStorage
  useEffect(() => {
    const loadRecipes = () => {
      try {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        const userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
        const allRecipes = [...savedRecipes, ...userRecipes];
        setRecipes(allRecipes);
        setFilteredRecipes(allRecipes);
      } catch (error) {
        console.error('Error loading recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, []);

  // Reload recipes when page becomes visible (user returns from add-recipe page)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        const userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
        const allRecipes = [...savedRecipes, ...userRecipes];
        setRecipes(allRecipes);
        setFilteredRecipes(allRecipes);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Filter and search recipes
  useEffect(() => {
    let filtered = recipes;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        (recipe.tags && recipe.tags.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }

    // Category filter
    if (categoryFilter) {
      filtered = filtered.filter(recipe => recipe.category === categoryFilter);
    }

    // Difficulty filter
    if (difficultyFilter) {
      filtered = filtered.filter(recipe => recipe.difficulty === difficultyFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.createdAt - a.createdAt;
        case 'oldest':
          return a.createdAt - b.createdAt;
        case 'name':
          return a.recipeName.localeCompare(b.recipeName);
        case 'prepTime':
          return parseInt(a.prepTime) - parseInt(b.prepTime);
        default:
          return 0;
      }
    });

    setFilteredRecipes(filtered);
  }, [recipes, searchTerm, categoryFilter, difficultyFilter, sortBy]);


  const handleEditRecipe = (recipe: Recipe) => {
    const updatedRecipes = recipes.map(r => r.id === recipe.id ? recipe : r);
    setRecipes(updatedRecipes);
    
    // Update both localStorage stores
    const userRecipes = updatedRecipes.filter(r => !r.savedAt);
    const savedRecipes = updatedRecipes.filter(r => r.savedAt);
    
    localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    
    setIsEditModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleDeleteRecipe = (recipeId: string) => {
    const updatedRecipes = recipes.filter(r => r.id !== recipeId);
    setRecipes(updatedRecipes);
    
    // Update both localStorage stores
    const userRecipes = updatedRecipes.filter(r => !r.savedAt);
    const savedRecipes = updatedRecipes.filter(r => r.savedAt);
    
    localStorage.setItem('userRecipes', JSON.stringify(userRecipes));
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  };

  const openEditModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsEditModalOpen(true);
  };

  const openViewModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsViewModalOpen(true);
  };

  const formatTime = (time: string) => {
    return time.replace(/\D/g, '') + ' min';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'green';
      case 'Medium': return 'yellow';
      case 'Hard': return 'red';
      default: return 'gray';
    }
  };

  if (isLoading) {
    return (
      <Box minH="100vh" bg={bgColor} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" color="green.500" />
          <Text color={secondaryTextColor}>Loading your recipes...</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <VStack align="start" spacing={2}>
              <Heading size="lg" color={headingColor}>
                My Recipe Collection
              </Heading>
              <Text color={secondaryTextColor}>
                {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} saved
              </Text>
            </VStack>
            <Button
              leftIcon={<Icon as={FaPlus} />}
              colorScheme="green"
              size="lg"
              onClick={() => navigate('/add-recipe')}
            >
              Add Recipe
            </Button>
          </Flex>

          {/* Search and Filters */}
          <Card bg={cardBg} shadow="md" borderRadius="xl">
            <CardBody p={6}>
              <VStack spacing={4}>
                <HStack spacing={4} w="full" wrap="wrap">
                  <InputGroup flex={1} minW="300px">
                    <InputLeftElement>
                      <Icon as={FaSearch} color={secondaryTextColor} />
                    </InputLeftElement>
                    <Input
                      placeholder="Search recipes, ingredients, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                  
                  <Select
                    placeholder="All Categories"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    w="200px"
                  >
                    <option value="Appetizer">Appetizer</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Side Dish">Side Dish</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Snack">Snack</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                  </Select>

                  <Select
                    placeholder="All Difficulties"
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    w="150px"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </Select>

                  <Menu>
                    <MenuButton as={Button} rightIcon={<Icon as={FaSort} />} variant="outline">
                      Sort
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => setSortBy('newest')}>Newest First</MenuItem>
                      <MenuItem onClick={() => setSortBy('oldest')}>Oldest First</MenuItem>
                      <MenuItem onClick={() => setSortBy('name')}>Name A-Z</MenuItem>
                      <MenuItem onClick={() => setSortBy('prepTime')}>Prep Time</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Recipes Grid */}
          {filteredRecipes.length === 0 ? (
            <Card bg={cardBg} shadow="md" borderRadius="xl">
              <CardBody p={12} textAlign="center">
                <VStack spacing={4}>
                  <Icon as={FaPlus} w={16} h={16} color={secondaryTextColor} />
                  <Heading size="md" color={headingColor}>
                    {searchTerm || categoryFilter || difficultyFilter
                      ? 'No recipes match your filters'
                      : 'No recipes yet'
                    }
                  </Heading>
                  <Text color={secondaryTextColor}>
                    {searchTerm || categoryFilter || difficultyFilter
                      ? 'Try adjusting your search criteria'
                      : 'Start building your recipe collection by adding your first recipe!'
                    }
                  </Text>
                  {!searchTerm && !categoryFilter && !difficultyFilter && (
                    <Button
                      leftIcon={<Icon as={FaPlus} />}
                      colorScheme="green"
                      onClick={() => navigate('/add-recipe')}
                    >
                      Add Your First Recipe
                    </Button>
                  )}
                </VStack>
              </CardBody>
            </Card>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
              {filteredRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  bg={cardBg}
                  shadow="lg"
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "2xl",
                  }}
                >
                  {recipe.image && (
                    <Image
                      src={recipe.image}
                      alt={recipe.recipeName}
                      h="200px"
                      w="full"
                      objectFit="cover"
                    />
                  )}
                  <CardBody p={6}>
                    <VStack spacing={4} align="stretch">
                      <VStack spacing={2} align="start">
                        <Heading size="md" color={headingColor} noOfLines={2}>
                          {recipe.recipeName}
                        </Heading>
                        <Text color={secondaryTextColor} fontSize="sm" noOfLines={2}>
                          {recipe.description}
                        </Text>
                      </VStack>

                      <HStack spacing={2} wrap="wrap">
                        {recipe.category && (
                          <Badge colorScheme="blue" variant="subtle">
                            {recipe.category}
                          </Badge>
                        )}
                        {recipe.difficulty && (
                          <Badge colorScheme={getDifficultyColor(recipe.difficulty)} variant="subtle">
                            {recipe.difficulty}
                          </Badge>
                        )}
                        {recipe.cuisine && (
                          <Badge colorScheme="purple" variant="subtle">
                            {recipe.cuisine}
                          </Badge>
                        )}
                      </HStack>

                      <HStack spacing={4} fontSize="sm" color={secondaryTextColor}>
                        {recipe.prepTime && (
                          <HStack spacing={1}>
                            <Icon as={FaClock} />
                            <Text>{formatTime(recipe.prepTime)}</Text>
                          </HStack>
                        )}
                        <HStack spacing={1}>
                          <Icon as={FaUsers} />
                          <Text>{recipe.servings}</Text>
                        </HStack>
                      </HStack>

                      <HStack spacing={2} justify="flex-end">
                        <IconButton
                          aria-label="View recipe"
                          icon={<Icon as={FaEye} />}
                          size="sm"
                          variant="ghost"
                          onClick={() => openViewModal(recipe)}
                        />
                        <IconButton
                          aria-label="Edit recipe"
                          icon={<Icon as={FaEdit} />}
                          size="sm"
                          variant="ghost"
                          onClick={() => openEditModal(recipe)}
                        />
                        <IconButton
                          aria-label="Delete recipe"
                          icon={<Icon as={FaTrash} />}
                          size="sm"
                          variant="ghost"
                          colorScheme="red"
                          onClick={() => handleDeleteRecipe(recipe.id)}
                        />
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>


      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} size={{ base: "md", sm: "lg", md: "xl", lg: "2xl", xl: "3xl" }}>
        <ModalOverlay />
        <ModalContent maxH="90vh" overflowY="auto" m={4}>
          {selectedRecipe && (
            <RecipeUploadForm
              onSave={handleEditRecipe}
              onCancel={() => {
                setIsEditModalOpen(false);
                setSelectedRecipe(null);
              }}
              initialRecipe={selectedRecipe}
              isEditing={true}
            />
          )}
        </ModalContent>
      </Modal>

      {/* View Modal */}
      <Modal isOpen={isViewModalOpen} onClose={() => {
        setIsViewModalOpen(false);
        setSelectedRecipe(null);
      }} size={{ base: "md", sm: "lg", md: "xl", lg: "2xl", xl: "3xl" }}>
        <ModalOverlay />
        <ModalContent maxH="90vh" m={4}>
          <ModalHeader>
            <Flex justify="space-between" align="center">
              <Heading fontSize={{ base: "lg", md: "xl" }} color={headingColor}>
                {selectedRecipe?.recipeName}
              </Heading>
              <IconButton
                aria-label="Close"
                icon={<Icon as={FaTimes} />}
                variant="ghost"
                onClick={() => {
                  setIsViewModalOpen(false);
                  setSelectedRecipe(null);
                }}
                size="sm"
              />
            </Flex>
          </ModalHeader>
          <ModalBody overflowY="auto" p={0}>
            {selectedRecipe && (
              <Box p={6}>
                <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                  {selectedRecipe.image && (
                    <Image
                      src={selectedRecipe.image}
                      alt={selectedRecipe.recipeName}
                      borderRadius="lg"
                      maxH={{ base: "200px", md: "300px" }}
                      objectFit="cover"
                      w="full"
                    />
                  )}

                  <Text color={secondaryTextColor} fontSize={{ base: "md", md: "lg" }}>
                    {selectedRecipe.description}
                  </Text>

                  <HStack spacing={2} wrap="wrap">
                    {selectedRecipe.category && (
                      <Badge colorScheme="blue" variant="subtle" px={2} py={1} fontSize="xs">
                        {selectedRecipe.category}
                      </Badge>
                    )}
                    {selectedRecipe.difficulty && (
                      <Badge colorScheme={getDifficultyColor(selectedRecipe.difficulty)} variant="subtle" px={2} py={1} fontSize="xs">
                        {selectedRecipe.difficulty}
                      </Badge>
                    )}
                    {selectedRecipe.cuisine && (
                      <Badge colorScheme="purple" variant="subtle" px={2} py={1} fontSize="xs">
                        {selectedRecipe.cuisine}
                      </Badge>
                    )}
                  </HStack>

                  <HStack spacing={{ base: 4, md: 6 }} fontSize={{ base: "xs", md: "sm" }} color={secondaryTextColor} wrap="wrap">
                    {selectedRecipe.prepTime && (
                      <HStack spacing={1}>
                        <Icon as={FaClock} />
                        <Text>Prep: {formatTime(selectedRecipe.prepTime)}</Text>
                      </HStack>
                    )}
                    {selectedRecipe.cookTime && (
                      <HStack spacing={1}>
                        <Icon as={FaClock} />
                        <Text>Cook: {formatTime(selectedRecipe.cookTime)}</Text>
                      </HStack>
                    )}
                    <HStack spacing={1}>
                      <Icon as={FaUsers} />
                      <Text>Serves: {selectedRecipe.servings}</Text>
                    </HStack>
                  </HStack>

                  <Divider />

                  <Box>
                    <Heading size={{ base: "sm", md: "md" }} color={headingColor} mb={3}>Ingredients</Heading>
                    <VStack spacing={2} align="stretch">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <HStack key={index} spacing={3} align="start">
                          <Text fontWeight="bold" color={headingColor} minW="20px" fontSize={{ base: "sm", md: "md" }}>
                            {index + 1}.
                          </Text>
                          <Text color={secondaryTextColor} fontSize={{ base: "sm", md: "md" }}>{ingredient}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <Divider />

                  <Box>
                    <Heading size={{ base: "sm", md: "md" }} color={headingColor} mb={3}>Instructions</Heading>
                    <VStack spacing={{ base: 3, md: 4 }} align="stretch">
                      {selectedRecipe.instructions.map((instruction, index) => (
                        <HStack key={index} spacing={3} align="start">
                          <Text fontWeight="bold" color={headingColor} minW="20px" mt={1} fontSize={{ base: "sm", md: "md" }}>
                            {index + 1}.
                          </Text>
                          <Text color={secondaryTextColor} lineHeight="tall" fontSize={{ base: "sm", md: "md" }}>
                            {instruction}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  {selectedRecipe.tags && selectedRecipe.tags.length > 0 && (
                    <>
                      <Divider />
                      <Box>
                        <Heading size={{ base: "sm", md: "md" }} color={headingColor} mb={3}>Tags</Heading>
                        <HStack spacing={2} wrap="wrap">
                          {selectedRecipe.tags.map((tag, index) => (
                            <Badge key={index} colorScheme="green" variant="subtle" px={2} py={1} fontSize="xs">
                              {tag}
                            </Badge>
                          ))}
                        </HStack>
                      </Box>
                    </>
                  )}
                </VStack>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Footer />
    </Box>
  );
};

export default RecipeCollectionPage;
