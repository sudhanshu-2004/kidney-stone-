import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const DosAndDonts = () => {
  const dos = [
    { text: 'भरपूर पानी पिएं', icon: '💧' },
    { text: 'संतुलित आहार रखाएं', icon: '🥗' },
    { text: 'नियमित व्यायाम करें', icon: '🏃' },
    { text: 'डॉक्टर की सलाह मानें', icon: '👨‍⚕️' }
  ];

  const donts = [
    { text: 'जंक फूड से बचें', icon: '🍔' },
    { text: 'नमक और लाल मांस सीमित करें', icon: '🧂' },
    { text: 'धूम्पान व शराब से दूरी बनाएं', icon: '🚬' },
    { text: 'लक्षणों की नजरअंदाज न करें', icon: '⚠️' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            किडनी स्वेन
          </h2>
          <p className="text-lg text-gray-600">
            पथरी से बचाव और राहत के लिए ज़रूरी सुझाव
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Do's Card */}
          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-green-600 text-white w-24 rounded-t-2xl rounded-b-sm py-3 -mt-8 shadow-md">
                <CardTitle className="text-xl font-bold">करें</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {dos.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Don'ts Card */}
          <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-red-600 text-white w-24 rounded-t-2xl rounded-b-sm py-3 -mt-8 shadow-md">
                <CardTitle className="text-xl font-bold">ना करें</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {donts.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-red-200 hover:shadow-md transition-shadow"
                >
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-gray-800 font-medium">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Center Image */}
        <div className="mt-12 max-w-2xl mx-auto">
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
