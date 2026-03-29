import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Phone, User, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { submitConsultationRequest } from '../utils/api';

const CompulsoryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if they already filled it
    const hasFilled = localStorage.getItem('popup_filled');
    if (!hasFilled) {
      // Open after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error('कृपया नाम और फोन नंबर भरें');
      return;
    }
    if (formData.phone.length !== 10) {
      toast.error('कृपया 10 अंकों का मोबाइल नंबर डालें');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitConsultationRequest(formData);
      if (result.success) {
        setSubmitted(true);
        localStorage.setItem('popup_filled', 'true');
        toast.success('धन्यवाद! हमारे डॉक्टर जल्द ही आपसे संपर्क करेंगे ✅');
        
        // Close popup after a short delay
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        toast.error(result.message || 'कुछ गलत हो गया');
      }
    } catch {
      toast.error('कुछ गलत हो गया। कृपया फिर से कोशिश करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="border-4 border-green-500 shadow-2xl bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-5 text-center text-white relative">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight flex items-center justify-center gap-2">
              <AlertCircle className="h-6 w-6 text-amber-300" />
              महत्वपूर्ण जानकारी
            </h2>
            <p className="font-medium mt-2 text-sm text-green-50">
              आगे बढ़ने के लिए कृपया अपना विवरण भरें। हमारे विशेषज्ञ आपको मुफ्त सलाह देंगे।
            </p>
          </div>

          <CardContent className="p-5 sm:p-8">
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-green-700 mb-2">धन्यवाद!</h3>
                <p className="text-gray-600">आपको अब वेबसाइट पर ले जाया जा रहा है...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-green-600" />
                    आपका नाम *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="उदाहरण: राहुल कुमार"
                    className="h-12 border-2 border-gray-300 focus:border-green-500"
                    autoComplete="name"
                    minLength="3"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    मोबाइल नंबर *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="उदाहरण: 9876543210"
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    className="h-12 border-2 border-gray-300 focus:border-green-500"
                    autoComplete="tel"
                    inputMode="numeric"
                    required
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg transition-all mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      भेजा जा रहा है...
                    </>
                  ) : (
                    'आगे बढ़ें'
                  )}
                </Button>
                
                <p className="text-center text-xs text-gray-500 mt-3">
                  🔒 आपकी जानकारी 100% सुरक्षित है
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompulsoryPopup;
