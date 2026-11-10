import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import WhatYouGet from './components/WhatYouGet';
import Pricing from './components/Pricing';
import Work from './components/Work';
import HowItWorks from './components/HowItWorks';
import GooglePart from './components/GooglePart';
import WhoFor from './components/WhoFor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

function Landing() {
  return (
    <main>
      <Hero />
      <About />
      <Problem />
      <WhatYouGet />
      <Pricing />
      <Work />
      <HowItWorks />
      <GooglePart />
      <WhoFor />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}
