import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Phone, User, MapPin, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { submitConsultationRequest } from '../utils/mockApi';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('कृपया नाम और फोन नंबर भरें');
      return;
    }

    if (formData.phone.length < 10) {
      toast.error('कृपया सही फोन नंबर डालें');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitConsultationRequest(formData);
      
      if (result.success) {
        toast.success('धन्यवाद! हमारे डॉक्टर जल्द ही आपसे संपर्क करेंगे', {
          duration: 5000,
        });
        
        setFormData({ name: '', phone: '', city: '' });
      }
    } catch (error) {
      toast.error('कुछ गलत हो गया। कृपया फिर से कोशिश करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="consultation-form" 
      className="py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-white shadow-2xl bg-white">
            <CardHeader className="text-center bg-gradient-to-r from-amber-400 to-amber-500 -mt-8 mx-8 rounded-xl shadow-lg">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 py-4">
                🆓 FREE डॉक्टर से बात करें
              </CardTitle>
              <p className="text-gray-800 font-medium">
                100% आयुर्वेदिक समाधान के लिए आज ही संपर्क करें
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="font-semibold text-green-800">✅ नीचे क्लिक करें</p>
                    <p>✅ नाम और मोबाइल नंबर डालें</p>
                    <p>✅ हमारे डॉक्टर आपको खुद कॉन्टेक्ट करेंगे</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    आपका नाम *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="अपना पूरा नाम लिखें"
                    className="h-12 text-lg border-2 border-gray-300 focus:border-green-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    मोबाइल नंबर *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    maxLength="10"
                    className="h-12 text-lg border-2 border-gray-300 focus:border-green-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    शहर (वैकल्पिक)
                  </label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="आपका शहर"
                    className="h-12 text-lg border-2 border-gray-300 focus:border-green-500"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'भेजा जा रहा है...'
                  ) : (
                    <>
                      <Phone className="mr-2 h-6 w-6" />
                      अभी FREE डॉक्टर से बात करें
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  🔒 आपकी जानकारी 100% सुरक्षित रहेगी
                </p>
              </form>

              {/* Doctor Consultation Image */}
              <div className="mt-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/r126rf9s_IMG-20260217-WA0006.jpg"
                  alt="Doctor Consultation"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
