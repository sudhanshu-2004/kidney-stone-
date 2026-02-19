import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  CheckCircle, 
  XCircle, 
  Leaf, 
  ShieldCheck, 
  Award,
  Clock,
  User,
  MapPin
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SymptomsSection from '../components/SymptomsSection';
import DosAndDonts from '../components/DosAndDonts';
import BeforeAfter from '../components/BeforeAfter';
import ProductBenefits from '../components/ProductBenefits';
import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_photo-flow-capture/artifacts/jgfs7yhm_IMG-20260106-WA0021.jpg"
              alt="Ayurved Life Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-green-800">AYURVED LIFE</h1>
              <p className="text-xs text-gray-600">The Soul of Ayurveda</p>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            अभी Call करें
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-green-600 mb-2" />
              <p className="text-sm font-semibold">100% आयुर्वेदिक</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-10 w-10 text-green-600 mb-2" />
              <p className="text-sm font-semibold">प्रमाणित फॉर्मूला</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-10 w-10 text-green-600 mb-2" />
              <p className="text-sm font-semibold">तेज़ रिजल्ट</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
              <p className="text-sm font-semibold">साइड इफेक्ट फ्री</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <SymptomsSection />

      {/* Do's and Don'ts */}
      <DosAndDonts />

      {/* Before After */}
      <BeforeAfter />

      {/* Product Benefits */}
      <ProductBenefits />

      {/* Consultation Form - Main CTA */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
