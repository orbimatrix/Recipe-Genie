import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Input,
  Textarea,
  Grid,
  Heading,
  Icon,
  useColorModeValue,
  useToast,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Image,
  IconButton,
  Divider,
  Badge,
  Flex,
} from '@chakra-ui/react';
import {
  FaUpload,
  FaImage,
  FaTrash,
  FaPlus,
  FaSave,
  FaTimes,
} from 'react-icons/fa';

interface RecipeUploadFormProps {
  onSave: (recipe: any) => void;
  onCancel: () => void;
  initialRecipe?: any;
  isEditing?: boolean;
}

const RecipeUploadForm: React.FC<RecipeUploadFormProps> = ({
  onSave,
  onCancel,
  initialRecipe,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    recipeName: initialRecipe?.recipeName || '',
    description: initialRecipe?.description || '',
    prepTime: initialRecipe?.prepTime || '',
    cookTime: initialRecipe?.cookTime || '',
    servings: initialRecipe?.servings || 1,
    difficulty: initialRecipe?.difficulty || 'Easy',
    category: initialRecipe?.category || '',
    cuisine: initialRecipe?.cuisine || '',
    ingredients: initialRecipe?.ingredients || [''],
    instructions: initialRecipe?.instructions || [''],
    tags: initialRecipe?.tags || [],
    image: initialRecipe?.image || null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newIngredient, setNewIngredient] = useState('');
  const [newInstruction, setNewInstruction] = useState('');
  const [newTag, setNewTag] = useState('');

  const toast = useToast();
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('image', e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      handleInputChange('ingredients', [...formData.ingredients, newIngredient.trim()]);
      setNewIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    const updated = formData.ingredients.filter((_, i) => i !== index);
    handleInputChange('ingredients', updated);
  };

  const addInstruction = () => {
    if (newInstruction.trim()) {
      handleInputChange('instructions', [...formData.instructions, newInstruction.trim()]);
      setNewInstruction('');
    }
  };

  const removeInstruction = (index: number) => {
    const updated = formData.instructions.filter((_, i) => i !== index);
    handleInputChange('instructions', updated);
  };

  const addTag = () => {
    if (newTag.trim()) {
      handleInputChange('tags', [...formData.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    const updated = formData.tags.filter((_, i) => i !== index);
    handleInputChange('tags', updated);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.recipeName.trim()) {
      newErrors.recipeName = 'Recipe name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (formData.ingredients.length === 0 || formData.ingredients.every(i => !i.trim())) {
      newErrors.ingredients = 'At least one ingredient is required';
    }
    if (formData.instructions.length === 0 || formData.instructions.every(i => !i.trim())) {
      newErrors.instructions = 'At least one instruction is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const recipe = {
        ...formData,
        id: initialRecipe?.id || `recipe-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        createdAt: initialRecipe?.createdAt || Date.now(),
        updatedAt: Date.now(),
        ingredients: formData.ingredients.filter(i => i.trim()),
        instructions: formData.instructions.filter(i => i.trim()),
      };

      onSave(recipe);
      toast({
        title: isEditing ? "Recipe Updated!" : "Recipe Saved!",
        description: `${recipe.recipeName} has been ${isEditing ? 'updated' : 'saved'}.`,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    }
  };

  return (
    <Card bg={cardBg} shadow="xl" borderRadius={{ base: "none", sm: "2xl" }} maxW="2xl" mx="auto" h="full">
      <CardBody p={{ base: 4, sm: 5, md: 6 }}>
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <Heading size={{ base: "md", sm: "lg" }} color={headingColor}>
              {isEditing ? 'Edit Recipe' : 'Add New Recipe'}
            </Heading>
            <IconButton
              aria-label="Close"
              icon={<Icon as={FaTimes} />}
              variant="ghost"
              onClick={onCancel}
              size="sm"
            />
          </Flex>

          <Divider />

          {/* Basic Information */}
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Heading size={{ base: "sm", md: "md" }} color={headingColor}>Basic Information</Heading>
            
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={{ base: 3, md: 4 }}>
              <FormControl isInvalid={!!errors.recipeName}>
                <FormLabel>Recipe Name *</FormLabel>
                <Input
                  value={formData.recipeName}
                  onChange={(e) => handleInputChange('recipeName', e.target.value)}
                  placeholder="e.g., Grandma's Chocolate Cake"
                />
                <FormErrorMessage>{errors.recipeName}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  placeholder="Select category"
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
              </FormControl>
            </Grid>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description *</FormLabel>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your recipe..."
                h={{ base: 20, md: 24 }}
                resize="vertical"
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>

            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap={{ base: 3, md: 4 }}>
              <FormControl>
                <FormLabel>Prep Time</FormLabel>
                <Input
                  value={formData.prepTime}
                  onChange={(e) => handleInputChange('prepTime', e.target.value)}
                  placeholder="e.g., 15 min"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Cook Time</FormLabel>
                <Input
                  value={formData.cookTime}
                  onChange={(e) => handleInputChange('cookTime', e.target.value)}
                  placeholder="e.g., 30 min"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Servings</FormLabel>
                <NumberInput
                  value={formData.servings}
                  onChange={(_, value) => handleInputChange('servings', value)}
                  min={1}
                  max={20}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Grid>

            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={{ base: 3, md: 4 }}>
              <FormControl>
                <FormLabel>Difficulty</FormLabel>
                <Select
                  value={formData.difficulty}
                  onChange={(e) => handleInputChange('difficulty', e.target.value)}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Cuisine</FormLabel>
                <Input
                  value={formData.cuisine}
                  onChange={(e) => handleInputChange('cuisine', e.target.value)}
                  placeholder="e.g., Italian, Mexican, Asian"
                />
              </FormControl>
            </Grid>
          </VStack>

          <Divider />

          {/* Image Upload */}
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Heading size={{ base: "sm", md: "md" }} color={headingColor}>Recipe Image</Heading>
            
            {formData.image ? (
              <Box position="relative" maxW={{ base: "250px", sm: "300px" }} mx="auto">
                <Image
                  src={formData.image}
                  alt="Recipe preview"
                  borderRadius="lg"
                  boxShadow="md"
                  w="full"
                  h="auto"
                />
                <IconButton
                  aria-label="Remove image"
                  icon={<Icon as={FaTrash} />}
                  size="sm"
                  colorScheme="red"
                  variant="solid"
                  position="absolute"
                  top={2}
                  right={2}
                  onClick={() => handleInputChange('image', null)}
                />
              </Box>
            ) : (
              <Box
                border="2px dashed"
                borderColor={borderColor}
                borderRadius="lg"
                p={{ base: 6, md: 8 }}
                textAlign="center"
                cursor="pointer"
                _hover={{ borderColor: 'green.400' }}
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Icon as={FaImage} w={{ base: 8, md: 12 }} h={{ base: 8, md: 12 }} color={secondaryTextColor} mb={4} />
                <Text color={secondaryTextColor} fontSize={{ base: "sm", md: "md" }}>Click to upload recipe image</Text>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  display="none"
                />
              </Box>
            )}
          </VStack>

          <Divider />

          {/* Ingredients */}
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Heading size={{ base: "sm", md: "md" }} color={headingColor}>Ingredients</Heading>
            
            <VStack spacing={3} align="stretch">
              {formData.ingredients.map((ingredient, index) => (
                <HStack key={index} spacing={3}>
                  <Text fontWeight="bold" color={headingColor} minW="20px">
                    {index + 1}.
                  </Text>
                  <Input
                    value={ingredient}
                    onChange={(e) => {
                      const updated = [...formData.ingredients];
                      updated[index] = e.target.value;
                      handleInputChange('ingredients', updated);
                    }}
                    placeholder="Enter ingredient"
                  />
                  <IconButton
                    aria-label="Remove ingredient"
                    icon={<Icon as={FaTrash} />}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => removeIngredient(index)}
                  />
                </HStack>
              ))}
            </VStack>

            <HStack spacing={3} wrap="wrap">
              <Input
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Add new ingredient"
                onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                flex={1}
                minW="200px"
              />
              <Button
                leftIcon={<Icon as={FaPlus} />}
                onClick={addIngredient}
                colorScheme="green"
                variant="outline"
                size={{ base: "sm", md: "md" }}
              >
                Add
              </Button>
            </HStack>
            
            {errors.ingredients && (
              <Text color="red.500" fontSize="sm">{errors.ingredients}</Text>
            )}
          </VStack>

          <Divider />

          {/* Instructions */}
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Heading size={{ base: "sm", md: "md" }} color={headingColor}>Instructions</Heading>
            
            <VStack spacing={3} align="stretch">
              {formData.instructions.map((instruction, index) => (
                <HStack key={index} spacing={3} align="start">
                  <Text fontWeight="bold" color={headingColor} minW="20px" mt={2}>
                    {index + 1}.
                  </Text>
                  <Textarea
                    value={instruction}
                    onChange={(e) => {
                      const updated = [...formData.instructions];
                      updated[index] = e.target.value;
                      handleInputChange('instructions', updated);
                    }}
                    placeholder="Enter instruction step"
                    resize="vertical"
                    minH="60px"
                  />
                  <IconButton
                    aria-label="Remove instruction"
                    icon={<Icon as={FaTrash} />}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => removeInstruction(index)}
                    mt={2}
                  />
                </HStack>
              ))}
            </VStack>

            <VStack spacing={3} align="stretch">
              <Textarea
                value={newInstruction}
                onChange={(e) => setNewInstruction(e.target.value)}
                placeholder="Add new instruction step"
                resize="vertical"
                minH="60px"
              />
              <Button
                leftIcon={<Icon as={FaPlus} />}
                onClick={addInstruction}
                colorScheme="green"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                alignSelf="flex-start"
              >
                Add
              </Button>
            </VStack>
            
            {errors.instructions && (
              <Text color="red.500" fontSize="sm">{errors.instructions}</Text>
            )}
          </VStack>

          <Divider />

          {/* Tags */}
          <VStack spacing={{ base: 3, md: 4 }} align="stretch">
            <Heading size={{ base: "sm", md: "md" }} color={headingColor}>Tags</Heading>
            
            <HStack spacing={2} wrap="wrap">
              {formData.tags.map((tag, index) => (
                <Badge
                  key={index}
                  colorScheme="green"
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {tag}
                  <IconButton
                    aria-label="Remove tag"
                    icon={<Icon as={FaTimes} />}
                    size="xs"
                    variant="ghost"
                    ml={2}
                    onClick={() => removeTag(index)}
                  />
                </Badge>
              ))}
            </HStack>

            <HStack spacing={3} wrap="wrap">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add tag (e.g., vegetarian, quick, healthy)"
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
                flex={1}
                minW="200px"
              />
              <Button
                leftIcon={<Icon as={FaPlus} />}
                onClick={addTag}
                colorScheme="green"
                variant="outline"
                size={{ base: "sm", md: "md" }}
              >
                Add
              </Button>
            </HStack>
          </VStack>

          <Divider />

          {/* Actions */}
          <HStack spacing={4} justify="flex-end" wrap="wrap">
            <Button variant="outline" onClick={onCancel} size={{ base: "md", md: "lg" }}>
              Cancel
            </Button>
            <Button
              leftIcon={<Icon as={FaSave} />}
              onClick={handleSubmit}
              colorScheme="green"
              size={{ base: "md", md: "lg" }}
            >
              {isEditing ? 'Update Recipe' : 'Save Recipe'}
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default RecipeUploadForm;
