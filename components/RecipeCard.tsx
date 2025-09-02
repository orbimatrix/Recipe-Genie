
import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  List,
  ListItem,
  OrderedList,
  Grid,
  GridItem,
  useColorModeValue,
  useToast,
  Tooltip,
  Divider,
} from '@chakra-ui/react';
import { FaStar, FaShare, FaCheck, FaTwitter, FaFacebook, FaLink, FaCopy } from 'react-icons/fa';
import type { Recipe } from '../types';


interface RecipeCardProps {
  recipe: Recipe;
  onSave?: (recipe: Recipe) => void;
  onRemove?: (recipe: Recipe) => void;
  isSaved?: boolean;
  isGeneratedInSession?: boolean;
  onToggleFavorite?: (recipe: Recipe) => void;
  isFavorite?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSave, onRemove, isSaved, isGeneratedInSession, onToggleFavorite, isFavorite }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [isRecipeTextCopied, setIsRecipeTextCopied] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  const toast = useToast();
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  const recipeId = recipe.id || recipe.recipeName;
  const shareUrl = `${window.location.origin}${window.location.pathname}?recipeId=${encodeURIComponent(recipeId)}`;

  const handleIngredientCheck = (index: number) => {
    setCheckedIngredients(prevChecked => {
      const newChecked = new Set(prevChecked);
      if (newChecked.has(index)) {
        newChecked.delete(index);
      } else {
        newChecked.add(index);
      }
      return newChecked;
    });
  };
  
  const handleSave = () => {
    if (onSave && !isSaved) {
      onSave(recipe);
      toast({
        title: "Recipe Saved!",
        description: `${recipe.recipeName} has been added to your saved recipes.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleShare = async () => {
    const shareText = `Check out this recipe for ${recipe.recipeName}!\n\n${recipe.description}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.recipeName,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Failed to share:', err);
      }
    }
  };

  const handleCopyLink = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setIsLinkCopied(true);
        toast({
          title: "Link Copied!",
          description: "Recipe link has been copied to clipboard.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          setIsLinkCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  const handleCopyRecipe = async () => {
    const ingredientsText = recipe.ingredients.map(ing => `- ${ing}`).join('\n');
    const instructionsText = recipe.instructions.map((step, i) => `${i + 1}. ${step}`).join('\n');
    
    let nutritionText = '';
    if (recipe.nutrition) {
      nutritionText = `\nNutritional Info (estimated per serving):\n` +
                      `- Calories: ${recipe.nutrition.calories}\n` +
                      `- Protein: ${recipe.nutrition.protein}\n` +
                      `- Carbs: ${recipe.nutrition.carbs}\n` +
                      `- Fat: ${recipe.nutrition.fat}`;
    }

    const fullRecipeText = `Recipe: ${recipe.recipeName}\n\n` +
                      `${recipe.description}\n\n` +
                      `Difficulty: ${recipe.difficulty}` +
                      `${nutritionText}\n\n` +
                      `Ingredients:\n${ingredientsText}\n\n` +
                      `Instructions:\n${instructionsText}`;

    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(fullRecipeText);
            setIsRecipeTextCopied(true);
            toast({
              title: "Recipe Copied!",
              description: "Full recipe has been copied to clipboard.",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setTimeout(() => {
                setIsRecipeTextCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy recipe:', err);
            toast({
              title: "Copy Failed",
              description: "Failed to copy recipe to clipboard.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
        }
    } else {
        toast({
          title: "Clipboard Not Available",
          description: "Clipboard functionality is not available in your browser.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    if (!difficulty) return null;
    const lowerCaseDifficulty = difficulty.toLowerCase();
    let colorScheme = 'gray';
    if (lowerCaseDifficulty.includes('easy')) {
      colorScheme = 'green';
    } else if (lowerCaseDifficulty.includes('medium')) {
      colorScheme = 'yellow';
    } else if (lowerCaseDifficulty.includes('hard')) {
      colorScheme = 'red';
    }
    return (
      <Badge colorScheme={colorScheme} size="sm">
        {difficulty}
      </Badge>
    );
  };

  const shareText = `Check out this recipe for ${recipe.recipeName}!`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <Card 
      bg={cardBg} 
      shadow="lg" 
      borderRadius="xl" 
      overflow="hidden"
      border={isGeneratedInSession ? "2px solid" : "1px solid"}
      borderColor={isGeneratedInSession ? "cyan.500" : borderColor}
      _hover={{ transform: "scale(1.02)" }}
      transition="all 0.3s ease"
    >
      <CardBody p={6}>
        <VStack spacing={4} align="stretch">
          {/* Header */}
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={2} flex={1}>
              <Heading size="md" color="green.500">
                {recipe.recipeName}
              </Heading>
              {recipe.difficulty && getDifficultyBadge(recipe.difficulty)}
            </VStack>
            <HStack spacing={2}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaShare />}
                  variant="ghost"
                  size="sm"
                  color="gray.500"
                  _hover={{ color: "green.500" }}
                />
                <MenuList>
                  <MenuItem icon={<FaTwitter />} onClick={() => window.open(twitterUrl, '_blank')}>
                    Share on Twitter
                  </MenuItem>
                  <MenuItem icon={<FaFacebook />} onClick={() => window.open(facebookUrl, '_blank')}>
                    Share on Facebook
                  </MenuItem>
                  <MenuItem 
                    icon={isLinkCopied ? <FaCheck /> : <FaLink />} 
                    onClick={handleCopyLink}
                    color={isLinkCopied ? "green.500" : undefined}
                  >
                    {isLinkCopied ? 'Copied!' : 'Copy Link'}
                  </MenuItem>
                </MenuList>
              </Menu>
              {onToggleFavorite && (
                <Tooltip label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
                  <IconButton
                    icon={<FaStar />}
                    variant="ghost"
                    size="sm"
                    color={isFavorite ? "yellow.400" : "gray.400"}
                    _hover={{ color: "yellow.400" }}
                    onClick={() => onToggleFavorite(recipe)}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  />
                </Tooltip>
              )}
            </HStack>
          </HStack>

          {/* Description */}
          <Text color="gray.600" fontSize="sm">
            {recipe.description}
          </Text>

          {/* Source */}
          {recipe.source && (
            <Text fontSize="xs" color="gray.500">
              <Text as="span" fontWeight="semibold">Source:</Text> {recipe.source}
            </Text>
          )}

          {/* Nutrition */}
          {recipe.nutrition && (
            <Box>
              <Text fontWeight="semibold" fontSize="sm" mb={2}>
                Nutritional Info <Text as="span" fontWeight="normal" fontSize="xs" color="gray.500">(est. per serving)</Text>
              </Text>
              <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                <GridItem>
                  <Box bg="gray.100" p={2} borderRadius="md" textAlign="center">
                    <Text fontSize="xs" color="gray.500">Calories</Text>
                    <Text fontWeight="bold" fontSize="sm" color="green.500">{recipe.nutrition.calories}</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box bg="gray.100" p={2} borderRadius="md" textAlign="center">
                    <Text fontSize="xs" color="gray.500">Protein</Text>
                    <Text fontWeight="bold" fontSize="sm" color="green.500">{recipe.nutrition.protein}</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box bg="gray.100" p={2} borderRadius="md" textAlign="center">
                    <Text fontSize="xs" color="gray.500">Carbs</Text>
                    <Text fontWeight="bold" fontSize="sm" color="green.500">{recipe.nutrition.carbs}</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box bg="gray.100" p={2} borderRadius="md" textAlign="center">
                    <Text fontSize="xs" color="gray.500">Fat</Text>
                    <Text fontWeight="bold" fontSize="sm" color="green.500">{recipe.nutrition.fat}</Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          )}

          <Divider />

          {/* Ingredients */}
          <Box>
            <Text fontWeight="semibold" fontSize="sm" mb={2} borderBottom="1px" borderColor={borderColor} pb={1}>
              Ingredients
            </Text>
            <VStack spacing={2} align="stretch">
              {recipe.ingredients.map((ingredient, index) => (
                <HStack key={index} spacing={3}>
                  <Checkbox
                    isChecked={checkedIngredients.has(index)}
                    onChange={() => handleIngredientCheck(index)}
                    colorScheme="green"
                  />
                  <Text 
                    fontSize="sm" 
                    color="gray.600"
                    textDecoration={checkedIngredients.has(index) ? "line-through" : "none"}
                    opacity={checkedIngredients.has(index) ? 0.6 : 1}
                  >
                    {ingredient}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Instructions */}
          <Box>
            <Text fontWeight="semibold" fontSize="sm" mb={2} borderBottom="1px" borderColor={borderColor} pb={1}>
              Instructions
            </Text>
            <OrderedList spacing={2}>
              {recipe.instructions.map((step, index) => (
                <ListItem key={index} fontSize="sm" color="gray.600">
                  {step}
                </ListItem>
              ))}
            </OrderedList>
          </Box>

          {/* Action Buttons */}
          <VStack spacing={2} align="stretch">
            {onSave && (
              <Button
                onClick={handleSave}
                disabled={isSaved}
                colorScheme="green"
                size="sm"
              >
                {isSaved ? 'Saved' : 'Save Recipe'}
              </Button>
            )}
            {onRemove && (
              <Button
                onClick={() => onRemove(recipe)}
                colorScheme="red"
                size="sm"
                variant="outline"
              >
                Remove
              </Button>
            )}
            <Button
              onClick={handleCopyRecipe}
              disabled={isRecipeTextCopied}
              variant="outline"
              size="sm"
              leftIcon={isRecipeTextCopied ? <FaCheck /> : <FaCopy />}
              colorScheme={isRecipeTextCopied ? "green" : "gray"}
            >
              {isRecipeTextCopied ? 'Copied!' : 'Copy Recipe'}
            </Button>
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
