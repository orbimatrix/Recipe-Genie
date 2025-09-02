
import { GoogleGenAI, Type } from "@google/genai";
import type { Recipe } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const recipeSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      recipeName: {
        type: Type.STRING,
        description: 'The name of the recipe.',
      },
      description: {
        type: Type.STRING,
        description: 'A short, enticing description of the dish.',
      },
      ingredients: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: 'A list of all ingredients required for the recipe.',
      },
      instructions: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: 'Step-by-step instructions to prepare the dish.',
      },
    },
    required: ["recipeName", "description", "ingredients", "instructions"],
  },
};

export const generateRecipes = async (
  ingredients: string,
  prioritizeIngredients?: string,
  excludeIngredients?: string
): Promise<Recipe[] | null> => {
  try {
    let prompt = `
      Based on the following available ingredients: "${ingredients}", generate 3 creative and delicious recipes.
      Prioritize using the provided ingredients, but you can include common pantry staples like salt, pepper, oil, water, etc.
    `;

    if (prioritizeIngredients && prioritizeIngredients.trim()) {
      prompt += `\nIt is very important that the generated recipes include these ingredients: "${prioritizeIngredients}".`;
    }

    if (excludeIngredients && excludeIngredients.trim()) {
      prompt += `\nDo not include any of the following ingredients in the recipes: "${excludeIngredients}". This is a strict requirement.`;
    }
    
    prompt += `
      For each recipe, provide a unique name, a short description, a full list of ingredients, and step-by-step instructions.
      Ensure the response strictly follows the provided JSON schema.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
      },
    });
    
    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);
    return parsedJson as Recipe[];

  } catch (error) {
    console.error("Error generating recipes from Gemini API:", error);
    // Propagate the error to be handled by the UI component
    throw new Error("Failed to communicate with the AI model.");
  }
};
