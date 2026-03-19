import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const dos = [
  { text: 'भरपूर पानी पिएं',         icon: '💧' },
  { text: 'संतुलित आहार रखाएं',      icon: '🥗' },
  { text: 'नियमित व्यायाम करें',     icon: '🏃' },
  { text: 'डॉक्टर की सलाह मानें',   icon: '👨‍⚕️' },
];

const donts = [
  { text: 'जंक फूड से बचें',              icon: '🍔' },
  { text: 'नमक और लाल मांस सीमित करें',   icon: '🧂' },
  { text: 'धूम्रपान व शराब से दूरी बनाएं', icon: '🚬' },
  { text: 'लक्षणों को नजरअंदाज न करें',   icon: '⚠️' },
];

const DosAndDonts = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            किडनी स्वास्थ्य
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            पथरी से बचाव और राहत के लिए ज़रूरी सुझाव
          </p>
        </div>

        {/* Cards — stacked on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">

          {/* Do's */}
          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white text-center py-3">
              <h3 className="text-xl font-bold">✅ करें</h3>
            </div>
            <CardContent className="p-4 sm:p-6 space-y-3">
              {dos.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Don'ts */}
          <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white text-center py-3">
              <h3 className="text-xl font-bold">❌ ना करें</h3>
            </div>
            <CardContent className="p-4 sm:p-6 space-y-3">
              {donts.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-200 hover:shadow-md transition-shadow">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Image */}
        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <img
            src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/ggfpgvl2_IMG-20260217-WA0008.jpg"
            alt="Kidney Stone Do's and Don'ts"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DosAndDonts;
