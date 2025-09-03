import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  VStack,
  HStack,
  Text,
  Button,
  Heading,
  Icon,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaArrowRight,
} from 'react-icons/fa';
import type { Recipe } from '../../types';

interface RecipeResultsProps {
  recipes: Recipe[];
  onClose: () => void;
  onSaveRecipe: (recipe: Recipe) => void;
  headingColor: string;
  secondaryTextColor: string;
}

const RecipeResults: React.FC<RecipeResultsProps> = ({
  recipes,
  onClose,
  onSaveRecipe,
  headingColor,
  secondaryTextColor,
}) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  if (recipes.length === 0) return null;

  return (
    <Box position="fixed" bottom="4" right="4" zIndex={1001}>
      <Card bg={cardBg} shadow="2xl" maxW="400px" maxH="500px" overflowY="auto">
        <CardHeader>
          <HStack justify="space-between">
            <Heading size="md" color={headingColor}>Generated Recipes</Heading>
            <IconButton
              aria-label="Close"
              icon={<Icon as={FaArrowRight} transform="rotate(45deg)" />}
              variant="ghost"
              size="sm"
              onClick={onClose}
            />
          </HStack>
        </CardHeader>
        <CardBody>
          <VStack spacing={4}>
            {recipes.slice(0, 3).map((recipe, index) => (
              <Box key={index} p={4} border="1px" borderColor="gray.200" borderRadius="md" w="full">
                <Text fontWeight="bold" color={headingColor} fontSize="sm">
                  {recipe.recipeName}
                </Text>
                <Text fontSize="xs" color={secondaryTextColor} noOfLines={2}>
                  {recipe.instructions}
                </Text>
                <HStack spacing={2} mt={2}>
                  <Button size="xs" colorScheme="green" onClick={() => onSaveRecipe(recipe)}>
                    Save
                  </Button>
                  <Button size="xs" variant="outline" colorScheme="green">
                    View
                  </Button>
                </HStack>
              </Box>
            ))}
            {recipes.length > 3 && (
              <Text fontSize="xs" color={secondaryTextColor} textAlign="center">
                +{recipes.length - 3} more recipes
              </Text>
            )}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default RecipeResults;
