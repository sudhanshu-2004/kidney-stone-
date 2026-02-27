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
            
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                किडनी में पथरी?
                <span className="block text-green-700 mt-2">
                  दर्द बदाश्त से बाहर?
                </span>
              </h1>
              
              {/* Kidney with Stone Image */}
              <div className="block relative flex-shrink-0 mt-6">
                <div className="absolute inset-0 bg-red-300 rounded-full blur-xl opacity-40 animate-pulse"></div>
                <img 
                  src="/stone.png"
                  className="relative w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl animate-bounce"
                  style={{animationDuration: '3s'}}
                />
                {/* Warning Indicator */}
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white rounded-full p-2 shadow-lg animate-ping">
                  <span className="text-xs font-bold">⚠️</span>
                </div>
              </div>
            </div>

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

          {/* Right Image - Man experiencing severe pain */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-orange-200 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
            
            {/* Main Pain Image */}
            <img 
              src="https://customer-assets.emergentagent.com/job_photo-flow-capture/artifacts/ax6zx0aq_WhatsApp%20Image%202026-02-26%20at%203.38.14%20PM.jpeg"
              alt="किडनी दर्द से राहत - पथरी का इलाज"
              className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            
            {/* FREE Red Sticker - Top Right with Effects */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                
                {/* Main Sticker */}
                <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white px-8 py-4 rounded-full shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-300 border-4 border-white animate-bounce">
                  <div className="text-center">
                    <p className="text-3xl font-black tracking-wider drop-shadow-lg">FREE</p>
                    <p className="text-xs font-bold -mt-1">100% मुफ्त</p>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
                </div>
                
                {/* Sparkle Elements */}
                <div className="absolute -top-2 -left-2 text-yellow-300 text-2xl animate-spin-slow">✨</div>
                <div className="absolute -bottom-2 -right-2 text-yellow-300 text-2xl animate-spin-slow" style={{animationDelay: '1s'}}>✨</div>
              </div>
            </div>
            
            {/* Pain Relief Badge - Bottom */}
            <div className="absolute bottom-4 left-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-base shadow-xl animate-pulse border-2 border-white">
              दर्द से तुरंत राहत! 💊
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
