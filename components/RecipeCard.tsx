
import React, { useState } from 'react';
import type { Recipe } from '../types';
import { StarIcon } from './icons/StarIcon';

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

  const buttonText = showConfirmation ? 'Saved!' : (isSaved ? 'Saved' : 'Save Recipe');
  
  // Define base classes for the button, including transitions for a smooth effect
  const baseButtonClasses = "w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800";

  const getDynamicButtonClasses = () => {
    if (showConfirmation) {
      // Confirmation state: bright green, slightly larger to provide prominent feedback
      return `${baseButtonClasses} bg-green-500 scale-105 focus:ring-green-400`;
    }
    if (isSaved) {
      // Saved/disabled state: neutral and non-interactive
      return `${baseButtonClasses} bg-slate-400 cursor-not-allowed shadow-none`;
    }
    // Default active state
    return `${baseButtonClasses} bg-emerald-500 hover:bg-emerald-600 active:scale-95 focus:ring-emerald-400`;
  };
  
  const saveButtonClass = getDynamicButtonClasses();

  const cardClasses = `bg-white dark:bg-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out ${isGeneratedInSession ? 'ring-2 ring-cyan-500' : 'ring-1 ring-slate-900/5'}`;

  return (
    <div className={cardClasses}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 pr-2">{recipe.recipeName}</h3>
            {onToggleFavorite && (
                <button
                onClick={() => onToggleFavorite(recipe)}
                className={`p-1 rounded-full transition-colors duration-200 ${
                    isFavorite
                    ? 'text-yellow-400 hover:text-yellow-500'
                    : 'text-slate-400 hover:text-yellow-400'
                }`}
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                <StarIcon className={`w-6 h-6 ${isFavorite ? 'fill-current' : 'fill-none'}`} />
                </button>
            )}
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{recipe.description}</p>
        
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
      </div>
    </div>
  );
};
