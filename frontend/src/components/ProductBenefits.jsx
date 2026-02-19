import React from 'react';
import { Card, CardContent } from './ui/card';
import { Sparkles } from 'lucide-react';

const ProductBenefits = () => {
  const benefits = [
    { text: 'पथरी को घोलकर बाहर निकालने में सहायक', position: 'top-left' },
    { text: 'बार-बार बनने वाली पथरी से बचाव करे', position: 'top-right' },
    { text: 'किडनी की प्राकृतिक रूप से सफाई करें', position: 'left' },
    { text: 'पेशाब में जलन और दर्द को दूर करे', position: 'bottom-left' },
    { text: '100% आयुर्वेदिक फॉर्मूला', position: 'top-center' },
    { text: 'दर्द और जलन से राहत दिलाए', position: 'right' },
    { text: 'किडनी के संक्रमण व सूजन को कम करे में मदद करे', position: 'bottom-right' },
    { text: 'बिना किसी केमिकल के', position: 'bottom-center' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">पथरी मुक्ति के फायदे</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            आयुर्वेद पुस्तक के लाभ
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Benefits */}
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <Card 
                  key={index}
                  className="bg-white/80 backdrop-blur border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-full p-2 flex-shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="text-gray-800 font-medium leading-snug">
                        {benefit.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Center Product Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/6p4o1txu_IMG-20260217-WA0007.jpg"
                alt="Pathri Mukti Product Benefits"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Benefits */}
            <div className="space-y-6">
              {benefits.slice(3, 6).map((benefit, index) => (
                <Card 
                  key={index}
                  className="bg-white/80 backdrop-blur border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full p-2 flex-shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="text-gray-800 font-medium leading-snug">
                        {benefit.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
            {benefits.slice(6).map((benefit, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full p-2 flex-shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-gray-800 font-medium leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
