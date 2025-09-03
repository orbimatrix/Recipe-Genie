import React from 'react';
import {
  Box,
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
  IconButton,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaUtensils,
} from 'react-icons/fa';
import { LoadingSpinner } from '../icons/LoadingSpinner';

interface RecipeGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  ingredients: string;
  setIngredients: (value: string) => void;
  prioritizeIngredients: string;
  setPrioritizeIngredients: (value: string) => void;
  excludeIngredients: string;
  setExcludeIngredients: (value: string) => void;
  isLoading: boolean;
  onGenerateRecipes: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const RecipeGeneratorModal: React.FC<RecipeGeneratorModalProps> = ({
  isOpen,
  onClose,
  ingredients,
  setIngredients,
  prioritizeIngredients,
  setPrioritizeIngredients,
  excludeIngredients,
  setExcludeIngredients,
  isLoading,
  onGenerateRecipes,
  onKeyDown,
}) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.800', 'white');

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="blackAlpha.600"
      zIndex={1000}
      onClick={onClose}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg={cardBg}
        borderRadius="2xl"
        p={8}
        maxW="600px"
        w="90%"
        maxH="90vh"
        overflowY="auto"
        onClick={(e) => e.stopPropagation()}
      >
        <VStack spacing={6}>
          <HStack justify="space-between" w="full">
            <Heading size="lg" color={headingColor}>Generate Your Perfect Recipe</Heading>
            <IconButton
              aria-label="Close"
              icon={<Icon as={FaArrowRight} transform="rotate(45deg)" />}
              variant="ghost"
              onClick={onClose}
            />
          </HStack>
          
          <Box w="full">
            <Text fontWeight="semibold" mb={2} color={textColor}>
              Your Ingredients
            </Text>
            <Textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              onKeyDown={onKeyDown}
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
            onClick={onGenerateRecipes}
            disabled={isLoading || !ingredients.trim()}
            colorScheme="green"
            size="lg"
            w="full"
            leftIcon={isLoading ? <LoadingSpinner className="w-5 h-5" /> : <Icon as={FaUtensils} />}
          >
            {isLoading ? "Generating..." : "Generate Recipes"}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default RecipeGeneratorModal;
