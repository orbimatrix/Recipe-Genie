import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const handleStartCooking = () => {
    navigate('/generate');
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <HeroSection onStartCooking={handleStartCooking} />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection onStartCooking={handleStartCooking} />
      <Footer />
    </Box>
  );
};

export default HomePage;
