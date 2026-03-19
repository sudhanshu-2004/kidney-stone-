import React from 'react';
import { Card, CardContent } from './ui/card';
import { Sparkles } from 'lucide-react';

const benefits = [
  { text: 'पथरी को घोलकर बाहर निकालने में सहायक',            color: 'from-amber-400 to-amber-600' },
  { text: 'बार-बार बनने वाली पथरी से बचाव करे',             color: 'from-amber-400 to-amber-600' },
  { text: 'किडनी की प्राकृतिक रूप से सफाई करें',            color: 'from-green-500 to-emerald-600' },
  { text: 'पेशाब में जलन और दर्द को दूर करे',               color: 'from-green-500 to-emerald-600' },
  { text: '100% आयुर्वेदिक फॉर्मूला',                       color: 'from-amber-400 to-amber-600' },
  { text: 'दर्द और जलन से राहत दिलाए',                      color: 'from-green-500 to-emerald-600' },
  { text: 'किडनी के संक्रमण व सूजन को कम करने में मदद करे', color: 'from-amber-400 to-amber-600' },
  { text: 'बिना किसी केमिकल के — पूरी तरह सुरक्षित',        color: 'from-green-500 to-emerald-600' },
];

const ProductBenefits = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full mb-3">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold text-sm sm:text-base">पथरी मुक्ति के फायदे</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            आयुर्वेद पुस्तक के लाभ
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: 2-col grid | Desktop: 3-col with image center */}
          <div className="block md:hidden">
            {/* Product image on top for mobile */}
            <div className="relative mb-6 max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/6p4o1txu_IMG-20260217-WA0007.jpg"
                alt="Pathri Mukti Product"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all active:scale-95">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start gap-2">
                      <div className={`bg-gradient-to-br ${b.color} text-white rounded-full p-1.5 flex-shrink-0 mt-0.5`}>
                        <Sparkles className="h-3 w-3" />
                      </div>
                      <p className="text-gray-800 font-medium leading-snug text-xs sm:text-sm">{b.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop: 3-col layout with image in center */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
            {/* Left */}
            <div className="space-y-5">
              {benefits.slice(0, 4).map((b, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${b.color} text-white rounded-full p-2 flex-shrink-0`}>
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="text-gray-800 font-medium leading-snug">{b.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Center image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/6p4o1txu_IMG-20260217-WA0007.jpg"
                alt="Pathri Mukti Product Benefits"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right */}
            <div className="space-y-5">
              {benefits.slice(4).map((b, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${b.color} text-white rounded-full p-2 flex-shrink-0`}>
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="text-gray-800 font-medium leading-snug">{b.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
