import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const BeforeAfter = () => {
  const beforeSymptoms = [
    'तेज कमर दर्द',
    'पेशाब में जलन / खून',
    'बार-बार पेशाब',
    'बेचैनी और घबराहट'
  ];

  const afterBenefits = [
    'दर्द में कमी',
    'पेशाब सामान्य',
    'जलन खत्म',
    'किडनी स्वस्थ'
  ];

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            क्या किडनी की पथरी ठीक हो सकती है?
          </h2>
          <p className="text-lg text-green-700 font-semibold">
            हां! देखें आयुर्वेदिक उपचार के नतीजे
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
              <CardContent className="p-8">
                <Badge className="bg-red-600 text-white mb-4 text-lg px-4 py-2">
                  BEFORE - पहले
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">समस्याएं</h3>
                <ul className="space-y-4">
                  {beforeSymptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-red-500 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-800 font-medium text-lg">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
              <CardContent className="p-8">
                <Badge className="bg-green-600 text-white mb-4 text-lg px-4 py-2">
                  AFTER - बाद में
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">परिणाम</h3>
                <ul className="space-y-4">
                  {afterBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/lqa5mf3s_IMG-20260217-WA0009.jpg"
              alt="Before After Kidney Stone Treatment"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              FREE डॉक्टर से सलाह लें
            </h3>
            <p className="text-lg mb-6 opacity-90">
              नीचे क्लिक करें - नाम और मोबाइल नंबर डालें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6"
                onClick={scrollToForm}
              >
                हमारे डॉक्टर आपको खुद कॉन्टेक्ट करेंगे
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
