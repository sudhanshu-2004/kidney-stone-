import React from 'react';
import { Card, CardContent } from './ui/card';
import { AlertCircle } from 'lucide-react';

const symptoms = [
  { text: 'कमर के नीचे तेज दर्द',    icon: '🔥' },
  { text: 'पेट या पैर में दर्द',      icon: '⚡' },
  { text: 'बार-बार पेशाब आना',       icon: '🚽' },
  { text: 'पेशाब में जलन',           icon: '💧' },
  { text: 'पेशाब में खून',           icon: '🩸' },
  { text: 'उल्टी या घबराहट',         icon: '🤢' },
  { text: 'रात में दर्द बढ़ना',       icon: '😣' },
  { text: 'चलने में दिक्कत',         icon: '🚶' },
];

const SymptomsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-3">
            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold text-sm sm:text-base">पथरी के लक्षण</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            क्या आपको ये समस्याएं हैं?
          </h2>
        </div>

        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {symptoms.map((s, i) => (
            <Card
              key={i}
              className="border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all cursor-pointer bg-white active:scale-95"
            >
              <CardContent className="p-3 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl">{s.icon}</div>
                <p className="text-gray-800 font-medium text-xs sm:text-sm leading-snug">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-white border-2 border-green-300 rounded-xl p-5 sm:p-6 inline-block shadow-lg max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
              पथरी का आयुर्वेदिक उपचार
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              हमारी दवाइयां पथरी को धीरे-धीरे तोड़कर शरीर से बाहर निकालने में मदद करती हैं
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
