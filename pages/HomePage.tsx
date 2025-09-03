import React, { useState, useCallback } from 'react';
import {
  Box,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import type { Recipe } from '../types';
import { generateRecipes } from '../services/geminiService';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';
import RecipeGeneratorModal from '../components/modals/RecipeGeneratorModal';
import ErrorDisplay from '../components/modals/ErrorDisplay';
import RecipeResults from '../components/modals/RecipeResults';

const HomePage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [excludeIngredients, setExcludeIngredients] = useState<string>('');
  const [prioritizeIngredients, setPrioritizeIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showRecipeGenerator, setShowRecipeGenerator] = useState<boolean>(false);

  const toast = useToast();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');



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
    // Simple save to localStorage for demo purposes
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

  return (
    <Box minH="100vh" bg={bgColor}>
      <HeroSection onStartCooking={() => setShowRecipeGenerator(true)} />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection onStartCooking={() => setShowRecipeGenerator(true)} />
      <Footer />

      {/* Recipe Generator Modal */}
      <RecipeGeneratorModal
        isOpen={showRecipeGenerator}
        onClose={() => setShowRecipeGenerator(false)}
        ingredients={ingredients}
        setIngredients={setIngredients}
        prioritizeIngredients={prioritizeIngredients}
        setPrioritizeIngredients={setPrioritizeIngredients}
        excludeIngredients={excludeIngredients}
        setExcludeIngredients={setExcludeIngredients}
        isLoading={isLoading}
        onGenerateRecipes={handleGenerateRecipes}
        onKeyDown={handleKeyDown}
      />

      {/* Error Display */}
      <ErrorDisplay
        error={error}
        onRetry={handleGenerateRecipes}
      />

      {/* Recipe Results */}
      <RecipeResults
        recipes={recipes}
        onClose={() => setRecipes([])}
        onSaveRecipe={saveRecipe}
        headingColor={headingColor}
        secondaryTextColor={secondaryTextColor}
      />
    </Box>
  );
};

export default HomePage;
