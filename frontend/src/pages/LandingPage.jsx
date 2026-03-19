import React from 'react';
import { Phone, ShieldCheck, Award, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SymptomsSection from '../components/SymptomsSection';
import DosAndDonts from '../components/DosAndDonts';
import BeforeAfter from '../components/BeforeAfter';
import ProductBenefits from '../components/ProductBenefits';
import ConsultationForm from '../components/ConsultationForm';
import Footer from '../components/Footer';

const PHONE = '9911449683';
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent('नमस्ते! मुझे किडनी की पथरी के बारे में जानकारी चाहिए।')}`;
const CALL_LINK = `tel:+91${PHONE}`;

const trustBadges = [
  { icon: ShieldCheck, label: '100% आयुर्वेदिक' },
  { icon: Award,       label: 'प्रमाणित फॉर्मूला' },
  { icon: Clock,       label: 'तेज़ रिजल्ट' },
  { icon: CheckCircle, label: 'साइड इफेक्ट फ्री' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 overflow-x-hidden">

      {/* ══════════════════════════════════════
          TOP BAR — WhatsApp + Call strip
      ══════════════════════════════════════ */}
      <div className="bg-green-800 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-0">
          <p className="text-green-100 font-medium">🌿 100% आयुर्वेदिक • बिना ऑपरेशन • किडनी पथरी का समाधान</p>
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba5a] px-3 py-1 rounded-full font-semibold transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            {/* Call */}
            <a
              href={CALL_LINK}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          HEADER — Gradient green background
      ══════════════════════════════════════ */}
      <header className="sticky top-0 z-50 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 70%, #16a34a 100%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">

          {/* Brand — logo image kept */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-white/15 rounded-xl p-1 backdrop-blur-sm">
              <img
                src="/logo.jpg"
                alt="Ayurved Life Logo"
                className="h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 object-contain rounded-lg"
                style={{ minWidth: '44px' }}
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight tracking-wide drop-shadow">
                AYURVED LIFE
              </h1>
              <p className="text-[10px] sm:text-xs text-green-200 font-medium">The Soul of Ayurveda</p>
            </div>
          </div>

          {/* Right — Call + WhatsApp + Scroll CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call icon button */}
            <a
              href={CALL_LINK}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all border border-white/30"
              title="Call Us"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-white" />
            </a>

            {/* WhatsApp icon button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#25d366] hover:bg-[#20ba5a] rounded-full transition-all shadow-md"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Scroll-to-form CTA */}
            <button
              className="hidden sm:flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full transition-all shadow-md"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              FREE सलाह लें
            </button>
          </div>
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

      {/* ══════════════════════════════════════
          FLOATING ACTION BUTTONS (mobile)
      ══════════════════════════════════════ */}
      {/* WhatsApp FAB */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        style={{
          position: 'fixed',
          bottom: '88px',
          right: '18px',
          zIndex: 9999,
          background: '#25d366',
          borderRadius: '50%',
          width: '54px',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.55)',
          animation: 'pulse-green 2s infinite',
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: 'white' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Call FAB */}
      <a
        href={CALL_LINK}
        aria-label="Call us"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '18px',
          zIndex: 9999,
          background: 'linear-gradient(135deg, #166534, #16a34a)',
          borderRadius: '50%',
          width: '54px',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(22,101,52,0.55)',
          border: '3px solid white',
        }}
      >
        <Phone style={{ width: 24, height: 24, color: 'white' }} />
      </a>
    </div>
  );
};

export default LandingPage;
