import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #166534 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-5 text-center md:text-left animate-fade-in-up">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300 text-xs sm:text-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              100% प्राकृतिक समाधान
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              किडनी में पथरी?
              <span className="block text-green-700 mt-1 md:mt-2">
                दर्द बदाश्त से बाहर?
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              बिना ऑपरेशन, आयुर्वेदिक तरीके से पाएं सहत — 100% प्राकृतिक जड़ी-बूटियों से।
            </p>

            {/* Free badge */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 sm:p-4 inline-block">
              <p className="text-amber-900 font-semibold flex items-center gap-2 text-sm sm:text-base">
                <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-bold">
                  FREE
                </span>
                डॉक्टर से बात करें — 100% आयुर्वेदिक
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 shadow-lg hover:shadow-xl transition-all animate-pulse-green"
                onClick={scrollToForm}
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                FREE डॉक्टर से बात करें
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-50 text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6"
                onClick={scrollToForm}
              >
                मुफ्त सलाह लें
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {['✅ 100% आयुर्वेदिक', '✅ कोई साइड इफेक्ट नहीं', '✅ तेज़ रिजल्ट'].map((t, i) => (
                <span key={i} className="text-xs sm:text-sm text-green-700 font-semibold bg-green-50 border border-green-200 rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-4 md:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-orange-200 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none"></div>

            <img
              src="https://customer-assets.emergentagent.com/job_photo-flow-capture/artifacts/ax6zx0aq_WhatsApp%20Image%202026-02-26%20at%203.38.14%20PM.jpeg"
              alt="किडनी दर्द से राहत - पथरी का इलाज"
              className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
            />

            {/* FREE badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl transform rotate-12 border-4 border-white animate-bounce">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-black tracking-wider drop-shadow-lg">FREE</p>
                    <p className="text-xs font-bold -mt-1">100% मुफ्त</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain badge */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-xl animate-pulse border-2 border-white">
              दर्द से तुरंत राहत! 💊
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="tel:+919911449683"
        className="whatsapp-btn"
        aria-label="Call us"
        title="Call Now"
      >
        📞
      </a>
    </section>
  );
};

export default HeroSection;
