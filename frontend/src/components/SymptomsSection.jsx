import React from 'react';
import { Card, CardContent } from './ui/card';
import { AlertCircle } from 'lucide-react';

const SymptomsSection = () => {
  const symptoms = [
    { text: 'कमर के नीचे तेज दर्द', icon: '🔥' },
    { text: 'पेट या पैर में दर्द पहनाना', icon: '⚡' },
    { text: 'बार-बार पेशाब आना', icon: '🚽' },
    { text: 'पेशाब में जलन', icon: '💧' },
    { text: 'पेशाब में खून', icon: '🩸' },
    { text: 'उल्टी या घबराहट', icon: '🤢' },
    { text: 'सीने समय दर्द बढ़ना', icon: '😣' },
    { text: 'चलनो में दिक्कल होना', icon: '🚶' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">पथरी के लक्षण</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            क्या आपको ये समस्याएं हैं?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {symptoms.map((symptom, index) => (
            <Card 
              key={index} 
              className="border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all cursor-pointer bg-white"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="text-4xl">{symptom.icon}</div>
                <p className="text-gray-800 font-medium leading-snug">
                  {symptom.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border-2 border-green-300 rounded-xl p-6 inline-block shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              पथरी का आयुर्वेदिक उपचार
            </h3>
            <p className="text-gray-700 text-lg">
              यह की दवाइयों पथरी को धीरे-धीरे तोड़कर शरीर से बाहर निकालने में मदद करती है
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
