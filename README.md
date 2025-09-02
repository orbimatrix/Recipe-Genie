# Recipe Genie

Welcome to Recipe Genie! This application uses the power of Google's Gemini AI to generate creative and delicious recipes based on the ingredients you have on hand. Say goodbye to food waste and hello to new culinary adventures!

## 📝 Description

Recipe Genie is a modern web application designed to help you figure out what to cook with the ingredients you already own. Simply list your ingredients, add any you'd like to prioritize or exclude, and let the AI assistant conjure up three unique recipes for you.

You can save your favorite recipes for later, search through them, and even sort them by when you saved them. The interactive recipe cards allow you to check off ingredients as you go, making the cooking process a breeze.

## ✨ Features

- **AI-Powered Recipe Generation**: Leverages the Gemini API to create high-quality recipes from a list of ingredients.
- **Advanced Filtering**: Specify ingredients to **prioritize** or **exclude** for more tailored results.
- **Save Your Favorites**: Store recipes you love directly in your browser using `localStorage`.
- **Saved Recipe Management**:
    - View all your saved recipes in a dedicated section.
    - **Search** through your collection to quickly find what you're looking for.
    - **Sort** recipes by newest or oldest saved.
    - Clear all saved recipes with a single click.
- **Interactive UI**:
    - **Ingredient Checklists**: Track your ingredients with interactive checkboxes on each recipe card.
    - **Visual Feedback**: Subtle animations and confirmation messages provide a smooth user experience.
    - **Responsive Design**: A clean, mobile-first interface that works beautifully on any device.
- **Loading & Error States**: Clear indicators for when the app is processing your request or if something goes wrong.

## 🚀 Tech Stack

- **Frontend**: [React](https://reactjs.org/) with TypeScript
- **AI Model**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a utility-first CSS framework.
- **Build/Environment**: The app is set up to run in a web-based development environment that supports ES modules and `importmap`.

## ⚙️ Getting Started

### Prerequisites

To run this application, you need a valid Google Gemini API key.

### API Key Configuration

The application is configured to read the API key from an environment variable named `API_KEY`.

```javascript
// From services/geminiService.ts
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```

Ensure this environment variable is set in the execution environment where the application is hosted. The app **does not** provide a UI to enter the key.

### Running the Application

1.  Make sure the `API_KEY` environment variable is available.
2.  Serve the `index.html` file using a local web server. The project is designed to work with its current file structure and the provided `importmap` for dependencies.

## 📂 Project Structure

```
.
├── components/
│   ├── icons/
│   │   ├── ChefHatIcon.tsx
│   │   └── LoadingSpinner.tsx
│   └── RecipeCard.tsx
├── services/
│   └── geminiService.ts
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
├── types.ts
└── README.md
```

-   **`index.html`**: The main HTML file, which includes the `importmap` for dependencies and the root element for the React app.
-   **`index.tsx`**: The entry point for the React application, rendering the `App` component.
-   **`App.tsx`**: The main application component that holds the state, logic for generating and managing recipes.
-   **`components/`**: Contains all reusable React components.
    -   `RecipeCard.tsx`: The card component to display a single recipe's details.
    -   `icons/`: SVG icons used throughout the application.
-   **`services/geminiService.ts`**: Handles all communication with the Google Gemini API, including constructing the prompt and parsing the response.
-   **`types.ts`**: Defines the TypeScript interfaces used across the application (e.g., `Recipe`).
-   **`metadata.json`**: Contains metadata about the application.
