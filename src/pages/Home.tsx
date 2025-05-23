import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';
import BenefitsBanner from '../components/BenefitsBanner';
import BenefitCards from '../components/BenefitCards';
import Features from '../components/Features';
import HowItWorksNew from '../components/HowItWorksNew';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ScienceSection from '../components/ScienceSection';
import FinalCTA from '../components/FinalCTA';
import NasalStripSection from '../components/NasalStripSection';

function Home() {
  return (
    <Layout>
      <Hero />
      <Products />
      <BenefitsBanner />
      <ScienceSection />
      <NasalStripSection />
      <Features />
      <HowItWorksNew />
      <BenefitCards />
      <Testimonials />
      <FAQ />
      <CTA />
      <FinalCTA />
    </Layout>
  );
}

export default Home;