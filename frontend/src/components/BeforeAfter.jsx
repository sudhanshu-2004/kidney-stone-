import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, XCircle } from 'lucide-react';
import { Button } from './ui/button';

const beforeSymptoms = ['तेज कमर दर्द', 'पेशाब में जलन / खून', 'बार-बार पेशाब', 'बेचैनी और घबराहट'];
const afterBenefits  = ['दर्द में कमी', 'पेशाब सामान्य', 'जलन खत्म', 'किडनी स्वस्थ'];

const BeforeAfter = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            क्या किडनी की पथरी ठीक हो सकती है?
          </h2>
          <p className="text-base sm:text-lg text-green-700 font-semibold">
            हां! देखें आयुर्वेदिक उपचार के नतीजे
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before / After cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Before */}
            <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-red-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              <CardContent className="p-5 sm:p-8">
                <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
                  BEFORE — पहले
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">समस्याएं</h3>
                <ul className="space-y-3">
                  {beforeSymptoms.map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-800 font-medium text-sm sm:text-base">{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-emerald-600"></div>
              <CardContent className="p-5 sm:p-8">
                <Badge className="bg-green-600 text-white mb-4 text-sm px-3 py-1">
                  AFTER — बाद में
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">परिणाम</h3>
                <ul className="space-y-3">
                  {afterBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium text-sm sm:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/lqa5mf3s_IMG-20260217-WA0009.jpg"
              alt="Before After Kidney Stone Treatment"
              className="w-full object-cover"
            />
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              FREE डॉक्टर से बात करें
            </h3>
            <p className="text-sm sm:text-base mb-5 opacity-90">
              नीचे क्लिक करें — नाम और मोबाइल नंबर डालें
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={scrollToForm}
            >
              हमारे डॉक्टर आपको खुद कॉन्टेक्ट करेंगे
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
