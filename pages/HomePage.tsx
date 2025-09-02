import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Textarea,
  Input,
  Grid,
  GridItem,
  Heading,
  Badge,
  Icon,
  useColorModeValue,
  Flex,
  Spacer,
  Divider,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Image,
  Avatar,
  AvatarGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useToast,
} from '@chakra-ui/react';
import { FaUtensils, FaSearch, FaHeart, FaShare, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import type { Recipe } from '../types';
import { generateRecipes } from '../services/geminiService';
import { RecipeCard } from '../components/RecipeCard';
import { LoadingSpinner } from '../components/icons/LoadingSpinner';

const HomePage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [excludeIngredients, setExcludeIngredients] = useState<string>('');
  const [prioritizeIngredients, setPrioritizeIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [savedRecipesSearchTerm, setSavedRecipesSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [initialRecipe, setInitialRecipe] = useState<Recipe | null>(null);

  const toast = useToast();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    try {
      const storedRecipes = localStorage.getItem('savedRecipes');
      const storedFavorites = localStorage.getItem('favoriteRecipes');
      
      const saved = storedRecipes ? JSON.parse(storedRecipes) : [];
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      setSavedRecipes(saved);
      setFavoriteRecipes(favorites);
      
      // One-time check for a shared recipe from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const recipeIdFromUrl = urlParams.get('recipeId');

      if (recipeIdFromUrl) {
          const allRecipesFromStorage = [...saved, ...favorites];
          const foundRecipe = allRecipesFromStorage.find(r => (r.id || r.recipeName) === recipeIdFromUrl);

          if (foundRecipe) {
              setInitialRecipe(foundRecipe);
          } else {
              setError(`The linked recipe "${decodeURIComponent(recipeIdFromUrl)}" was not found in your saved recipes. It might be a temporary recipe that wasn't saved.`);
          }

          // Clean the URL to avoid re-triggering on refresh
          window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (error) {
      console.error("Failed to parse recipes from localStorage or process URL", error);
      setSavedRecipes([]);
      setFavoriteRecipes([]);
    }
  }, []);

  const handleGenerateRecipes = useCallback(async () => {
    if (!ingredients.trim()) {
      setError('Please enter some ingredients.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecipes([]);
    setInitialRecipe(null);

    try {
      const result = await generateRecipes(ingredients, prioritizeIngredients, excludeIngredients);
      if (result && result.length > 0) {
        setRecipes(result);
        toast({
          title: "Recipes Generated!",
          description: `Found ${result.length} delicious recipes for you.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setError("Could not generate recipes. Try being more specific or adding more ingredients.");
      }
    } catch (err) {
      console.error('Error generating recipes:', err);
      setError('Failed to generate recipes. This could be due to an invalid API key or a network problem. Please check and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, prioritizeIngredients, excludeIngredients, toast]);
  
  const saveRecipe = useCallback((recipeToSave: Recipe) => {
    setSavedRecipes(prevSaved => {
      if (prevSaved.some(r => r.recipeName === recipeToSave.recipeName)) {
        return prevSaved;
      }
      const recipeWithIdAndTimestamp = { 
        ...recipeToSave, 
        id: `recipe-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        savedAt: Date.now() 
      };
      const newSavedRecipes = [...prevSaved, recipeWithIdAndTimestamp];
      localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
      return newSavedRecipes;
    });
    toast({
      title: "Recipe Saved!",
      description: `${recipeToSave.recipeName} has been added to your saved recipes.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }, [toast]);

  const removeRecipe = useCallback((recipeToRemove: Recipe) => {
    setSavedRecipes(prevSaved => {
      const newSavedRecipes = prevSaved.filter(r => 
        recipeToRemove.id ? r.id !== recipeToRemove.id : r.recipeName !== recipeToRemove.recipeName
      );
      localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
      return newSavedRecipes;
    });
    toast({
      title: "Recipe Removed",
      description: `${recipeToRemove.recipeName} has been removed from your saved recipes.`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  }, [toast]);

  const toggleFavoriteRecipe = useCallback((recipeToToggle: Recipe) => {
    setFavoriteRecipes(prevFavorites => {
      const isFavorited = prevFavorites.some(r => r.recipeName === recipeToToggle.recipeName);
      let newFavorites;
      if (isFavorited) {
        newFavorites = prevFavorites.filter(r => r.recipeName !== recipeToToggle.recipeName);
        toast({
          title: "Removed from Favorites",
          description: `${recipeToToggle.recipeName} has been removed from your favorites.`,
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      } else {
        newFavorites = [...prevFavorites, recipeToToggle];
        toast({
          title: "Added to Favorites!",
          description: `${recipeToToggle.recipeName} has been added to your favorites.`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, [toast]);

  const clearAllSavedRecipes = useCallback(() => {
    if (window.confirm('Are you sure you want to remove all saved recipes? This action cannot be undone.')) {
        setSavedRecipes([]);
        localStorage.removeItem('savedRecipes');
        toast({
          title: "All Recipes Cleared",
          description: "All saved recipes have been removed.",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
    }
  }, [toast]);

  const isRecipeSaved = (recipe: Recipe) => {
    return savedRecipes.some(r => r.recipeName === recipe.recipeName);
  };

  const favoriteRecipeNames = useMemo(() => new Set(favoriteRecipes.map(r => r.recipeName)), [favoriteRecipes]);
  
  const isRecipeFavorite = useCallback((recipe: Recipe) => {
    return favoriteRecipeNames.has(recipe.recipeName);
  }, [favoriteRecipeNames]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleGenerateRecipes();
    }
  };

  const filteredSavedRecipes = useMemo(() => {
    const sorted = [...savedRecipes].sort((a, b) => {
      const dateA = a.savedAt ?? 0;
      const dateB = b.savedAt ?? 0;
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return sorted.filter(recipe => 
      recipe.recipeName.toLowerCase().includes(savedRecipesSearchTerm.toLowerCase())
    );
  }, [savedRecipes, savedRecipesSearchTerm, sortOrder]);

  const currentRecipeNames = useMemo(() => new Set(recipes.map(r => r.recipeName)), [recipes]);

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={8}>
        {/* Hero Section */}
        <VStack spacing={8} mb={16}>
          <VStack spacing={4} textAlign="center">
            <HStack spacing={4}>
              <Icon as={FaUtensils} w={16} h={16} color="green.500" />
              <Heading
                as="h1"
                size="2xl"
                bgGradient="linear(to-r, green.400, blue.500)"
                bgClip="text"
                fontWeight="bold"
              >
                Recipe Genie
              </Heading>
            </HStack>
            <Text fontSize="xl" color={secondaryTextColor} maxW="2xl">
              Enter the ingredients you have, and let AI conjure up delicious recipes for you!
            </Text>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full" maxW="4xl">
            <Stat textAlign="center">
              <StatLabel>Recipes Generated</StatLabel>
              <StatNumber color="green.500">10,000+</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                This month
              </StatHelpText>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Happy Cooks</StatLabel>
              <StatNumber color="blue.500">5,000+</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                Active users
              </StatHelpText>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Ingredients Used</StatLabel>
              <StatNumber color="purple.500">500+</StatNumber>
              <StatHelpText>Unique items</StatHelpText>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Time Saved</StatLabel>
              <StatNumber color="orange.500">2.5hrs</StatNumber>
              <StatHelpText>Per user daily</StatHelpText>
            </Stat>
          </SimpleGrid>
        </VStack>

        {/* Main Recipe Generator */}
        <Card bg={cardBg} shadow="lg" mb={12}>
          <CardHeader>
            <Heading size="lg" color={headingColor}>Generate Your Perfect Recipe</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={6}>
              <Box w="full">
                <Text fontWeight="semibold" mb={2} color={textColor}>
                  Your Ingredients
                </Text>
                <Textarea
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g., chicken breast, tomatoes, garlic, olive oil, basil..."
                  h={32}
                  disabled={isLoading}
                />
              </Box>

              <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4} w="full">
                <Box>
                  <Text fontWeight="semibold" fontSize="sm" mb={2} color={textColor}>
                    Prioritize Ingredients (optional)
                  </Text>
                  <Input
                    value={prioritizeIngredients}
                    onChange={(e) => setPrioritizeIngredients(e.target.value)}
                    placeholder="e.g., chicken, tomatoes"
                    disabled={isLoading}
                  />
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="sm" mb={2} color={textColor}>
                    Exclude Ingredients (optional)
                  </Text>
                  <Input
                    value={excludeIngredients}
                    onChange={(e) => setExcludeIngredients(e.target.value)}
                    placeholder="e.g., nuts, dairy"
                    disabled={isLoading}
                  />
                </Box>
              </Grid>

              <Button
                onClick={handleGenerateRecipes}
                disabled={isLoading || !ingredients.trim()}
                colorScheme="green"
                size="lg"
                w={{ base: "full", sm: "auto" }}
                leftIcon={isLoading ? <LoadingSpinner className="w-5 h-5" /> : <Icon as={FaUtensils} />}
              >
                {isLoading ? "Generating..." : "Generate Recipes"}
              </Button>
            </VStack>
          </CardBody>
        </Card>

        {/* Error Display */}
        {error && (
          <Card bg="red.50" borderColor="red.200" mb={8}>
            <CardBody>
              <VStack spacing={3}>
                <Text fontWeight="bold" color="red.700">
                  An Error Occurred
                </Text>
                <Text color="red.600">{error}</Text>
                {error.includes("Failed to generate recipes") && (
                  <Button
                    onClick={handleGenerateRecipes}
                    colorScheme="red"
                    size="sm"
                  >
                    Retry
                  </Button>
                )}
              </VStack>
            </CardBody>
          </Card>
        )}

        {/* Initial Recipe from Shared Link */}
        {initialRecipe && (
          <Box mb={12}>
            <Heading size="lg" mb={6} pb={2} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')} color={headingColor}>
              From a Shared Link
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              <RecipeCard 
                key={initialRecipe.id || initialRecipe.recipeName}
                recipe={initialRecipe} 
                onSave={!isRecipeSaved(initialRecipe) ? saveRecipe : undefined}
                onRemove={isRecipeSaved(initialRecipe) ? removeRecipe : undefined}
                isSaved={isRecipeSaved(initialRecipe)} 
                onToggleFavorite={toggleFavoriteRecipe}
                isFavorite={isRecipeFavorite(initialRecipe)}
              />
            </Grid>
          </Box>
        )}

        {/* Generated Recipes */}
        {!isLoading && recipes.length === 0 && !error && !initialRecipe && (
          <Card textAlign="center" py={10}>
            <CardBody>
              <Text color={secondaryTextColor}>Your delicious recipes will appear here.</Text>
            </CardBody>
          </Card>
        )}
        
        {recipes.length > 0 && (
          <Box mb={12}>
            <Heading size="lg" mb={6} pb={2} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')} color={headingColor}>
              Generated Recipes
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              {recipes.map((recipe, index) => (
                <RecipeCard 
                  key={index} 
                  recipe={recipe} 
                  onSave={saveRecipe} 
                  isSaved={isRecipeSaved(recipe)} 
                  onToggleFavorite={toggleFavoriteRecipe}
                  isFavorite={isRecipeFavorite(recipe)}
                />
              ))}
            </Grid>
          </Box>
        )}

        {/* Saved Recipes Section */}
        {savedRecipes.length > 0 && (
          <Box mb={12} pt={8} borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
            <Flex direction={{ base: "column", sm: "row" }} justify="space-between" align="center" mb={8} gap={4}>
              <Heading size="lg" color={headingColor}>
                My Saved Recipes
              </Heading>
              <HStack spacing={2} w={{ base: "full", sm: "auto" }} flexWrap="wrap">
                <Input
                  placeholder="Search saved recipes..."
                  value={savedRecipesSearchTerm}
                  onChange={(e) => setSavedRecipesSearchTerm(e.target.value)}
                  size="sm"
                  w={{ base: "full", sm: "48" }}
                />
                <Button
                  onClick={clearAllSavedRecipes}
                  colorScheme="red"
                  size="sm"
                >
                  Clear All
                </Button>
              </HStack>
            </Flex>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              {filteredSavedRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id || recipe.recipeName}
                  recipe={recipe} 
                  onRemove={removeRecipe}
                  isGeneratedInSession={currentRecipeNames.has(recipe.recipeName)}
                  onToggleFavorite={toggleFavoriteRecipe}
                  isFavorite={isRecipeFavorite(recipe)}
                />
              ))}
            </Grid>
          </Box>
        )}

        {/* Favorite Recipes Section */}
        {favoriteRecipes.length > 0 && (
          <Box mb={12} pt={8} borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
            <Heading size="lg" mb={8} color={headingColor}>
              My Favorite Recipes
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
              {favoriteRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  onRemove={isRecipeSaved(recipe) ? removeRecipe : undefined}
                  onSave={!isRecipeSaved(recipe) ? saveRecipe : undefined}
                  isSaved={isRecipeSaved(recipe)}
                  onToggleFavorite={toggleFavoriteRecipe}
                  isFavorite={true}
                  isGeneratedInSession={currentRecipeNames.has(recipe.recipeName)}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
