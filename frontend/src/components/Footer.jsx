import React from 'react';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">AYURVED LIFE</h3>
              <p className="text-sm text-gray-400">The Soul of Ayurveda</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              प्राकृतिक और आयुर्वेदिक तरीके से किडनी की पथरी का समाधान। 
              100% प्राकृतिक उत्पाद।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#symptoms" className="hover:text-green-400 transition-colors">लक्षण</a></li>
              <li><a href="#benefits" className="hover:text-green-400 transition-colors">फायदे</a></li>
              <li><a href="#consultation-form" className="hover:text-green-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">संपर्क करें</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+91-9911449683</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span>ayurvedlife1993@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Ayurved Life. All rights reserved. | 
            <span className="text-green-400"> 100% आयुर्वेदिक उत्पाद</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Disclaimer: परिणाम व्यक्ति-दर-व्यक्ति भिन्न हो सकते हैं। किसी भी उपचार से पहले चिकित्सक से परामर्श अवश्य लें।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
