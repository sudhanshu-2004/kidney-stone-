import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #166534 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300">
              <Sparkles className="h-3 w-3 mr-1" />
              100% प्राकृतिक समाधान
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              किडनी में पथरी?
              <span className="block text-green-700 mt-2">
                दर्द बदाश्त से बाहर?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              बिना ऑपरेशन, आयुर्वेदिक तरीके से पाएं सहत
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToForm}
              >
                FREE डॉक्टर से बात करें
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-6"
                onClick={scrollToForm}
              >
                विकल्प मुफ्त सलाह
              </Button>
            </div>

            {/* Free Consultation Badge */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 inline-block">
              <p className="text-amber-900 font-semibold flex items-center gap-2">
                <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-bold">
                  FREE
                </span>
                डॉक्टर से बात करें - 100% आयुर्वेदिक
              </p>
            </div>
          </div>

          {/* Right Image - Man facing kidney pain */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-orange-200 rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/cplyujne_IMG-20260217-WA0004.jpg"
              alt="Kidney Pain - Get Relief with Ayurvedic Treatment"
              className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
              दर्द से राहत पाएं!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
