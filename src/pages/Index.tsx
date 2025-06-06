
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import IntegrationCarousel from "@/components/IntegrationCarousel";
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactForm from '@/components/ContactForm';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter', sans-serif]">
      <Navbar />
      <main>
        <HeroSection />
        <IntegrationCarousel />
        <ProblemSection />
        <FeaturesSection />
        <WhyChooseSection />
        <ContactForm />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
