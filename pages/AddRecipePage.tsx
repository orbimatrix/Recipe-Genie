import React from 'react';
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
  Divider,
} from '@chakra-ui/react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import RecipeUploadForm from '../components/forms/RecipeUploadForm';
import Footer from '../components/Footer';

const AddRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');

  const handleSaveRecipe = (recipe: any) => {
    // Save to localStorage
    const existingRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
    const updatedRecipes = [...existingRecipes, recipe];
    localStorage.setItem('userRecipes', JSON.stringify(updatedRecipes));
    
    // Navigate back to recipes collection
    navigate('/recipes');
  };

  const handleCancel = () => {
    navigate('/recipes');
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box bg={useColorModeValue('white', 'gray.800')} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} py={4}>
        <Container maxW="container.xl">
          <HStack spacing={4} justify="space-between">
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/recipes"
                leftIcon={<Icon as={FaArrowLeft} />}
                variant="ghost"
                size="sm"
              >
                Back to Recipes
              </Button>
              <Divider orientation="vertical" h={6} />
              <HStack spacing={2}>
                <Icon as={FaPlus} color="green.500" />
                <Heading size="md" color={headingColor}>
                  Add New Recipe
                </Heading>
              </HStack>
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <RecipeUploadForm
          onSave={handleSaveRecipe}
          onCancel={handleCancel}
        />
      </Container>

      <Footer />
    </Box>
  );
};

export default AddRecipePage;
