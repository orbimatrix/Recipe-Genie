
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import type { Recipe } from './types';
import { generateRecipes } from './services/geminiService';
import { RecipeCard } from './components/RecipeCard';
import { ChefHatIcon } from './components/icons/ChefHatIcon';
import { LoadingSpinner } from './components/icons/LoadingSpinner';
import { SearchIcon } from './components/icons/SearchIcon';

const App: React.FC = () => {
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


  useEffect(() => {
    try {
      const storedRecipes = localStorage.getItem('savedRecipes');
      if (storedRecipes) {
        setSavedRecipes(JSON.parse(storedRecipes));
      }
      const storedFavorites = localStorage.getItem('favoriteRecipes');
      if (storedFavorites) {
        setFavoriteRecipes(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse recipes from localStorage", error);
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

    try {
      const result = await generateRecipes(ingredients, prioritizeIngredients, excludeIngredients);
      if (result && result.length > 0) {
        setRecipes(result);
      } else {
        setError("Could not generate recipes. Try being more specific or adding more ingredients.");
      }
    } catch (err) {
      console.error('Error generating recipes:', err);
      setError('Failed to generate recipes. This could be due to an invalid API key or a network problem. Please check and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, prioritizeIngredients, excludeIngredients]);
  
  const saveRecipe = useCallback((recipeToSave: Recipe) => {
    setSavedRecipes(prevSaved => {
      if (prevSaved.some(r => r.recipeName === recipeToSave.recipeName)) {
        return prevSaved;
      }
      const recipeWithTimestamp = { ...recipeToSave, savedAt: Date.now() };
      const newSavedRecipes = [...prevSaved, recipeWithTimestamp];
      localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
      return newSavedRecipes;
    });
  }, []);

  const removeRecipe = useCallback((recipeToRemove: Recipe) => {
    setSavedRecipes(prevSaved => {
      const newSavedRecipes = prevSaved.filter(r => r.recipeName !== recipeToRemove.recipeName);
      localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
      return newSavedRecipes;
    });
  }, []);

  const toggleFavoriteRecipe = useCallback((recipeToToggle: Recipe) => {
    setFavoriteRecipes(prevFavorites => {
      const isFavorited = prevFavorites.some(r => r.recipeName === recipeToToggle.recipeName);
      let newFavorites;
      if (isFavorited) {
        newFavorites = prevFavorites.filter(r => r.recipeName !== recipeToToggle.recipeName);
      } else {
        newFavorites = [...prevFavorites, recipeToToggle];
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const clearAllSavedRecipes = useCallback(() => {
    if (window.confirm('Are you sure you want to remove all saved recipes? This action cannot be undone.')) {
        setSavedRecipes([]);
        localStorage.removeItem('savedRecipes');
    }
  }, []);

  const isRecipeSaved = (recipe: Recipe) => {
    return savedRecipes.some(r => r.recipeName === recipe.recipeName);
  };

  const isRecipeFavorite = (recipe: Recipe) => {
    return favoriteRecipes.some(r => r.recipeName === recipe.recipeName);
  }

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4">
            <ChefHatIcon className="w-16 h-16 text-emerald-500" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text">
              Recipe Genie
            </h1>
          </div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Enter the ingredients you have, and let AI conjure up delicious recipes for you!
          </p>
        </header>

        <main>
          <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg p-6 ring-1 ring-slate-900/5">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="ingredients-input" className="font-semibold text-slate-700 dark:text-slate-300">
                  Your Ingredients
                </label>
                <textarea
                  id="ingredients-input"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g., chicken breast, tomatoes, garlic, olive oil, basil..."
                  className="w-full mt-1 h-32 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200 resize-none"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prioritize-input" className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                    Prioritize Ingredients (optional)
                  </label>
                  <input
                    id="prioritize-input"
                    type="text"
                    value={prioritizeIngredients}
                    onChange={(e) => setPrioritizeIngredients(e.target.value)}
                    placeholder="e.g., chicken, tomatoes"
                    className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="exclude-input" className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                    Exclude Ingredients (optional)
                  </label>
                  <input
                    id="exclude-input"
                    type="text"
                    value={excludeIngredients}
                    onChange={(e) => setExcludeIngredients(e.target.value)}
                    placeholder="e.g., nuts, dairy"
                    className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button
                onClick={handleGenerateRecipes}
                disabled={isLoading || !ingredients.trim()}
                className="w-full sm:w-auto self-end px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg shadow-md hover:bg-emerald-600 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner className="w-5 h-5" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <span>Generate Recipes</span>
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-10">
            {error && (
              <div className="bg-red-100 dark:bg-red-900/50 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-center" role="alert">
                <div className="flex flex-col items-center justify-center gap-3">
                    <strong className="font-bold">An Error Occurred</strong>
                    <span>{error}</span>
                    <button
                        onClick={handleGenerateRecipes}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
                    >
                        Retry
                    </button>
                </div>
              </div>
            )}

            {!isLoading && recipes.length === 0 && !error && (
               <div className="text-center py-10">
                  <p className="text-slate-500 dark:text-slate-400">Your delicious recipes will appear here.</p>
               </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </div>

          {savedRecipes.length > 0 && (
             <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                  <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300">
                    My Saved Recipes
                  </h2>
                  <div className='flex items-center gap-2 w-full sm:w-auto flex-wrap'>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                      className="p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200"
                      aria-label="Sort saved recipes"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                    <div className="relative flex-grow sm:flex-grow-0 sm:w-48">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                      </span>
                      <input
                        type="text"
                        placeholder="Search saved recipes..."
                        value={savedRecipesSearchTerm}
                        onChange={(e) => setSavedRecipesSearchTerm(e.target.value)}
                        className="w-full p-2 pl-10 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition duration-200"
                        aria-label="Search saved recipes"
                      />
                    </div>
                    <button
                      onClick={clearAllSavedRecipes}
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
                      title="Clear all saved recipes"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSavedRecipes.map((recipe, index) => (
                  <RecipeCard 
                    key={index} 
                    recipe={recipe} 
                    onRemove={removeRecipe}
                    isGeneratedInSession={currentRecipeNames.has(recipe.recipeName)}
                    onToggleFavorite={toggleFavoriteRecipe}
                    isFavorite={isRecipeFavorite(recipe)}
                  />
                ))}
              </div>
            </div>
          )}

          {favoriteRecipes.length > 0 && (
             <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                  <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-300">
                    My Favorite Recipes
                  </h2>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
