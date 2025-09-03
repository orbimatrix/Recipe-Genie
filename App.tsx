
import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import PressKitPage from './pages/PressKitPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SpicesArticle from './pages/articles/SpicesArticle';
import CulturalCookingArticle from './pages/articles/CulturalCookingArticle';
import MealPlanningArticle from './pages/articles/MealPlanningArticle';
import PastaScienceArticle from './pages/articles/PastaScienceArticle';
import SustainableCookingArticle from './pages/articles/SustainableCookingArticle';
import RecipeDatabaseArticle from './pages/articles/RecipeDatabaseArticle';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/press" element={<PressKitPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/articles/spices" element={<SpicesArticle />} />
          <Route path="/articles/cultural-cooking" element={<CulturalCookingArticle />} />
          <Route path="/articles/meal-planning" element={<MealPlanningArticle />} />
          <Route path="/articles/pasta-science" element={<PastaScienceArticle />} />
          <Route path="/articles/sustainable-cooking" element={<SustainableCookingArticle />} />
          <Route path="/articles/recipe-database" element={<RecipeDatabaseArticle />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
