import React, { useState } from 'react';
import type { Recipe } from '../types';
import { StarIcon } from './icons/StarIcon';
import { ShareIcon } from './icons/ShareIcon';
import { CheckIcon } from './icons/CheckIcon';

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isRecipeTextCopied, setIsRecipeTextCopied] = useState(false);

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
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 1500); // Confirmation message for 1.5 seconds
    }
  };

  const handleShare = async () => {
    if (navigator.clipboard) {
        const shareText = `Check out this recipe: ${recipe.recipeName}\n\n${recipe.description}`;
        try {
            await navigator.clipboard.writeText(shareText);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Show confirmation for 2 seconds
        } catch (err) {
            console.error('Failed to copy recipe:', err);
            alert('Failed to copy recipe.');
        }
    } else {
        alert('Clipboard functionality is not available in your browser.');
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
            setTimeout(() => {
                setIsRecipeTextCopied(false);
            }, 2000); // Show confirmation for 2 seconds
        } catch (err) {
            console.error('Failed to copy recipe:', err);
            alert('Failed to copy recipe.');
        }
    } else {
        alert('Clipboard functionality is not available in your browser.');
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    if (!difficulty) return null; // Handle older saved recipes without difficulty
    const lowerCaseDifficulty = difficulty.toLowerCase();
    let colorClasses = 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'; // Default
    if (lowerCaseDifficulty.includes('easy')) {
        colorClasses = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300';
    } else if (lowerCaseDifficulty.includes('medium')) {
        colorClasses = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-300';
    } else if (lowerCaseDifficulty.includes('hard')) {
        colorClasses = 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-300';
    }
    return (
        <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${colorClasses}`}>
            {difficulty}
        </span>
    );
  };

  const buttonText = showConfirmation ? 'Saved!' : (isSaved ? 'Saved' : 'Save Recipe');
  
  const baseButtonClasses = "w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800";

  const getDynamicButtonClasses = () => {
    if (showConfirmation) {
      return `${baseButtonClasses} bg-lime-500 scale-110 focus:ring-lime-400`;
    }
    if (isSaved) {
      return `${baseButtonClasses} bg-slate-400 cursor-not-allowed shadow-none`;
    }
    return `${baseButtonClasses} bg-emerald-500 hover:bg-emerald-600 active:scale-95 focus:ring-emerald-400`;
  };
  
  const saveButtonClass = getDynamicButtonClasses();

  const cardClasses = `bg-white dark:bg-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out ${isGeneratedInSession ? 'ring-2 ring-cyan-500' : 'ring-1 ring-slate-900/5'}`;

  return (
    <div className={cardClasses}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 pr-2 flex-1">{recipe.recipeName}</h3>
            <div className="flex items-center gap-2">
                <button
                    onClick={handleShare}
                    className="p-1 rounded-full transition-colors duration-200 text-slate-400 hover:text-emerald-500"
                    aria-label={isCopied ? 'Copied to clipboard' : 'Share recipe'}
                    title={isCopied ? 'Copied!' : 'Share recipe'}
                    disabled={isCopied}
                >
                    {isCopied ? (
                        <CheckIcon className="w-6 h-6 text-emerald-500" />
                    ) : (
                        <ShareIcon className="w-6 h-6" />
                    )}
                </button>
                {onToggleFavorite && (
                    <button
                    onClick={() => onToggleFavorite(recipe)}
                    className={`p-1 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800 ${
                        isFavorite
                        ? 'text-yellow-400'
                        : 'text-slate-400 hover:text-yellow-400'
                    }`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                    <StarIcon className={`w-6 h-6 transition-transform ${isFavorite ? 'fill-current' : 'fill-none'}`} />
                    </button>
                )}
            </div>
        </div>
        {recipe.difficulty && (
            <div className="mb-4">
                {getDifficultyBadge(recipe.difficulty)}
            </div>
        )}
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{recipe.description}</p>
        
        {recipe.nutrition && (
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm">
              Nutritional Info <span className="font-normal text-xs text-slate-500 dark:text-slate-400">(est. per serving)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">Calories</p>
                <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{recipe.nutrition.calories}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">Protein</p>
                <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{recipe.nutrition.protein}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">Carbs</p>
                <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{recipe.nutrition.carbs}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg">
                <p className="text-xs text-slate-500 dark:text-slate-400">Fat</p>
                <p className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{recipe.nutrition.fat}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Ingredients</h4>
            <div className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <label key={index} className="flex items-center text-slate-600 dark:text-slate-400 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={checkedIngredients.has(index)}
                    onChange={() => handleIngredientCheck(index)}
                    className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-emerald-500 focus:ring-emerald-500 bg-transparent"
                  />
                  <span className={`ml-3 transition-colors ${checkedIngredients.has(index) ? 'line-through text-slate-500 dark:text-slate-500' : ''}`}>
                    {ingredient}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Instructions</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <div className="space-y-2">
          {onSave && (
            <button
              onClick={handleSave}
              disabled={isSaved || showConfirmation}
              className={saveButtonClass}
            >
              {buttonText}
            </button>
          )}
          {onRemove && (
            <button
              onClick={() => onRemove(recipe)}
              className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
            >
              Remove
            </button>
          )}
          <button
              onClick={handleCopyRecipe}
              disabled={isRecipeTextCopied}
              className={`w-full px-4 py-2 font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                  isRecipeTextCopied
                  ? 'bg-emerald-500 text-white cursor-not-allowed'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
          >
              {isRecipeTextCopied ? (
                  <>
                      <CheckIcon className="w-5 h-5" />
                      <span>Copied!</span>
                  </>
              ) : (
                  <span>Copy Recipe</span>
              )}
          </button>
        </div>
      </div>
    </div>
  );
};