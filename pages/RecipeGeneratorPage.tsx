import React, { useState, useCallback } from 'react';
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
  Heading,
  Icon,
  useColorModeValue,
  useToast,
  Card,
  CardBody,
  Badge,
  Stack,
  Divider,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import {
  FaUtensils,
  FaArrowLeft,
  FaSave,
  FaShare,
  FaClock,
  FaUsers,
  FaFire,
  FaCheck,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import type { Recipe } from '../types';
import { generateRecipes } from '../services/geminiService';
import { LoadingSpinner } from '../components/icons/LoadingSpinner';
import Footer from '../components/Footer';

const RecipeGeneratorPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [excludeIngredients, setExcludeIngredients] = useState<string>('');
  const [prioritizeIngredients, setPrioritizeIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toast = useToast();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleGenerateRecipes = useCallback(async () => {
    if (!ingredients.trim()) {
      setError('Please enter some ingredients.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecipes([]);

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
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    const recipeWithId = { 
      ...recipeToSave, 
      id: `recipe-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      savedAt: Date.now() 
    };
    savedRecipes.push(recipeWithId);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    
    toast({
      title: "Recipe Saved!",
      description: `${recipeToSave.recipeName} has been added to your saved recipes.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }, [toast]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleGenerateRecipes();
    }
  };

  const formatTime = (time: string) => {
    if (!time) return 'N/A';
    return time.replace(/\D/g, '') + ' min';
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box bg={cardBg} borderBottom="1px" borderColor={borderColor} py={4}>
        <Container maxW="container.xl">
          <HStack spacing={4} justify="space-between">
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/"
                leftIcon={<Icon as={FaArrowLeft} />}
                variant="ghost"
                size="sm"
              >
                Back to Home
              </Button>
              <Divider orientation="vertical" h={6} />
              <HStack spacing={2}>
                <Icon as={FaUtensils} color="green.500" />
                <Heading size="md" color={headingColor}>
                  Recipe Generator
                </Heading>
              </HStack>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Generator Form */}
          <Card bg={cardBg} shadow="xl" borderRadius="2xl">
            <CardBody p={8}>
              <VStack spacing={6}>
                <VStack spacing={4} textAlign="center">
                  <Heading size="lg" color={headingColor}>
                    Generate Your Perfect Recipe
                  </Heading>
                  <Text color={secondaryTextColor} maxW="2xl">
                    Tell us what ingredients you have, and our AI will create delicious recipes 
                    tailored to your preferences and dietary needs.
                  </Text>
                </VStack>

                {/* Ingredients Input */}
                <Box w="full">
                  <Text fontWeight="semibold" mb={2} color={headingColor}>
                    Your Ingredients *
                  </Text>
                  <Textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g., chicken breast, tomatoes, garlic, olive oil, basil, pasta..."
                    h={32}
                    disabled={isLoading}
                    fontSize="lg"
                    resize="vertical"
                  />
                  <Text fontSize="sm" color={secondaryTextColor} mt={2}>
                    Separate ingredients with commas. Press Enter to generate recipes.
                  </Text>
                </Box>

                {/* Optional Fields */}
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="full">
                  <Box>
                    <Text fontWeight="semibold" mb={2} color={headingColor}>
                      Prioritize Ingredients (optional)
                    </Text>
                    <Input
                      value={prioritizeIngredients}
                      onChange={(e) => setPrioritizeIngredients(e.target.value)}
                      placeholder="e.g., chicken, tomatoes"
                      disabled={isLoading}
                      size="lg"
                    />
                    <Text fontSize="sm" color={secondaryTextColor} mt={1}>
                      Focus recipes around these ingredients
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2} color={headingColor}>
                      Exclude Ingredients (optional)
                    </Text>
                    <Input
                      value={excludeIngredients}
                      onChange={(e) => setExcludeIngredients(e.target.value)}
                      placeholder="e.g., nuts, dairy, gluten"
                      disabled={isLoading}
                      size="lg"
                    />
                    <Text fontSize="sm" color={secondaryTextColor} mt={1}>
                      Avoid these ingredients in recipes
                    </Text>
                  </Box>
                </Grid>

                {/* Generate Button */}
                <Button
                  onClick={handleGenerateRecipes}
                  disabled={isLoading || !ingredients.trim()}
                  colorScheme="green"
                  size="lg"
                  w="full"
                  maxW="400px"
                  leftIcon={isLoading ? <LoadingSpinner className="w-5 h-5" /> : <Icon as={FaUtensils} />}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  {isLoading ? "Generating Recipes..." : "Generate Recipes"}
                </Button>
              </VStack>
            </CardBody>
          </Card>

          {/* Error Display */}
          {error && (
            <Alert status="error" borderRadius="xl">
              <AlertIcon />
              <Box>
                <AlertTitle>Error generating recipes!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Box>
            </Alert>
          )}

          {/* Loading State */}
          {isLoading && (
            <Card bg={cardBg} shadow="lg" borderRadius="xl">
              <CardBody p={8}>
                <VStack spacing={4}>
                  <Spinner size="xl" color="green.500" />
                  <Text color={secondaryTextColor} fontSize="lg">
                    Our AI is working hard to create the perfect recipes for you...
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          )}

          {/* Recipe Results */}
          {recipes.length > 0 && (
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color={headingColor} textAlign="center">
                Your Generated Recipes
              </Heading>
              {recipes.map((recipe, index) => (
                <Card key={index} bg={cardBg} shadow="lg" borderRadius="xl" overflow="hidden">
                  <CardBody p={8}>
                    <VStack spacing={6} align="stretch">
                      {/* Recipe Header */}
                      <Flex justify="space-between" align="start" wrap="wrap" gap={4}>
                        <VStack align="start" spacing={2} flex={1} minW="200px">
                          <Heading size="lg" color={headingColor}>
                            {recipe.recipeName}
                          </Heading>
                          <Text color={secondaryTextColor} fontSize="lg">
                            {recipe.description}
                          </Text>
                          <HStack spacing={4} wrap="wrap">
                            <Badge colorScheme="green" variant="subtle" px={3} py={1}>
                              <Icon as={FaClock} mr={1} />
                              {formatTime(recipe.cookTime)}
                            </Badge>
                            <Badge colorScheme="blue" variant="subtle" px={3} py={1}>
                              <Icon as={FaUsers} mr={1} />
                              {recipe.servings} servings
                            </Badge>
                            <Badge colorScheme="orange" variant="subtle" px={3} py={1}>
                              <Icon as={FaFire} mr={1} />
                              {recipe.difficulty}
                            </Badge>
                          </HStack>
                        </VStack>
                        <Stack direction={{ base: "column", sm: "row" }} spacing={2}>
                          <Button
                            leftIcon={<Icon as={FaSave} />}
                            colorScheme="green"
                            variant="outline"
                            size="sm"
                            onClick={() => saveRecipe(recipe)}
                          >
                            Save
                          </Button>
                          <Button
                            leftIcon={<Icon as={FaShare} />}
                            colorScheme="blue"
                            variant="outline"
                            size="sm"
                            isDisabled
                          >
                            Share
                          </Button>
                        </Stack>
                      </Flex>

                      <Divider />

                      {/* Ingredients */}
                      <Box>
                        <Heading size="md" color={headingColor} mb={4}>
                          Ingredients
                        </Heading>
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={2}>
                          {recipe.ingredients.map((ingredient, ingredientIndex) => (
                            <HStack key={ingredientIndex} spacing={2}>
                              <Icon as={FaCheck} color="green.500" fontSize="sm" />
                              <Text color={secondaryTextColor}>{ingredient}</Text>
                            </HStack>
                          ))}
                        </Grid>
                      </Box>

                      <Divider />

                      {/* Instructions */}
                      <Box>
                        <Heading size="md" color={headingColor} mb={4}>
                          Instructions
                        </Heading>
                        <VStack spacing={4} align="stretch">
                          {recipe.instructions.map((instruction, instructionIndex) => (
                            <HStack key={instructionIndex} align="start" spacing={4}>
                              <Badge
                                colorScheme="green"
                                variant="solid"
                                minW="24px"
                                h="24px"
                                borderRadius="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="xs"
                                fontWeight="bold"
                              >
                                {instructionIndex + 1}
                              </Badge>
                              <Text color={secondaryTextColor} lineHeight="tall">
                                {instruction}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          )}
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
};

export default RecipeGeneratorPage;
