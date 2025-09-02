
export interface Nutrition {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Recipe {
  id?: string;
  recipeName: string;
  description: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  nutrition?: Nutrition;
  savedAt?: number;
  source?: string;
}
