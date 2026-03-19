import React from 'react';
import { Button } from '../components/ui/button';
import {
  Phone,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SymptomsSection from '../components/SymptomsSection';
import DosAndDonts from '../components/DosAndDonts';
import BeforeAfter from '../components/BeforeAfter';
import ProductBenefits from '../components/ProductBenefits';
import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';

const trustBadges = [
  { icon: ShieldCheck, label: '100% आयुर्वेदिक' },
  { icon: Award,       label: 'प्रमाणित फॉर्मूला' },
  { icon: Clock,       label: 'तेज़ रिजल्ट' },
  { icon: CheckCircle, label: 'साइड इफेक्ट फ्री' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 overflow-x-hidden">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.jpg"
              alt="Ayurved Life Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain mix-blend-multiply"
            />
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-green-800 leading-tight">
                AYURVED LIFE
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500">The Soul of Ayurveda</p>
            </div>
          </div>

          {/* CTA button */}
          <Button
            className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-3 sm:px-5 py-2 h-auto"
            onClick={() =>
              document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">FREE</span> डॉक्टर से बात करें
          </Button>
        </div>
      </header>

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Trust Badges ── */}
      <section className="py-6 sm:py-8 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl hover:bg-green-50 transition-colors">
                <Icon className="h-7 w-7 sm:h-10 sm:w-10 text-green-600" />
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      <BeforeAfter />
      <SymptomsSection />
      <DosAndDonts />
      <ProductBenefits />
      <ConsultationForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
