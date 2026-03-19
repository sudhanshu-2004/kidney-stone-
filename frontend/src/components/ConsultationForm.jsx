import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Phone, User, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { submitConsultationRequest } from '../utils/api';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        toast.success('धन्यवाद! हमारे डॉक्टर जल्द ही आपसे संपर्क करेंगे ✅', { duration: 5000 });
        setFormData({ name: '', phone: '' });
      } else {
        toast.error(result.message || 'कुछ गलत हो गया');
      }
    } catch {
      toast.error('कुछ गलत हो गया। कृपया फिर से कोशिश करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="consultation-form"
      className="py-12 sm:py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden"
    >
      {/* Background dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-lg mx-auto">
          <Card className="border-4 border-white shadow-2xl bg-white overflow-hidden">

            {/* Card Header */}
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-5 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                🆓 FREE डॉक्टर से बात करें
              </h2>
              <p className="text-gray-800 font-medium mt-1 text-sm sm:text-base">
                100% आयुर्वेदिक समाधान के लिए आज ही संपर्क करें
              </p>
            </div>

            <CardContent className="p-5 sm:p-8">

              {/* Success state */}
              {submitted && (
                <div className="text-center py-6 animate-fade-in-up">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">धन्यवाद!</h3>
                  <p className="text-gray-600">हमारे डॉक्टर जल्द ही आपसे संपर्क करेंगे।</p>
                  <button
                    className="mt-4 text-sm text-green-600 underline"
                    onClick={() => setSubmitted(false)}
                  >
                    दोबारा भरें
                  </button>
                </div>
              )}

              {!submitted && (
                <>
                  {/* Info box */}
                  <div className="mb-5 bg-green-50 border-2 border-green-300 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                        <p className="font-semibold text-green-800">✅ नीचे फॉर्म भरें</p>
                        <p>✅ सिर्फ 2 चीजें: नाम और मोबाइल नंबर</p>
                        <p>✅ हमारे डॉक्टर आपको खुद कॉन्टेक्ट करेंगे</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        आपका नाम *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        id="lead-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="उदाहरण: राहुल कुमार"
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-300 focus:border-green-500"
                        autoComplete="name"
                        minLength="3"
                        required
                      />
                      <p className="text-xs text-gray-400">कृपया अपना असली नाम डालें</p>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        मोबाइल नंबर *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        id="lead-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="उदाहरण: 9876543210"
                        maxLength="10"
                        pattern="[6-9][0-9]{9}"
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-300 focus:border-green-500"
                        autoComplete="tel"
                        inputMode="numeric"
                        required
                      />
                      <p className="text-xs text-gray-400">
                        10 अंकों का Indian mobile number (6-9 से शुरू)
                      </p>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      id="submit-consultation"
                      className="w-full h-12 sm:h-14 text-base sm:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          भेजा जा रहा है...
                        </>
                      ) : (
                        <>
                          <Phone className="mr-2 h-5 w-5" />
                          अभी FREE डॉक्टर से बात करें
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs sm:text-sm text-gray-500">
                      🔒 आपकी जानकारी 100% सुरक्षित रहेगी
                    </p>
                  </form>

                  {/* Doctor image */}
                  <div className="mt-6">
                    <img
                      src="https://customer-assets.emergentagent.com/job_8c28540a-1ce9-442f-93a2-00971cbc9631/artifacts/r126rf9s_IMG-20260217-WA0006.jpg"
                      alt="Doctor Consultation"
                      className="rounded-xl shadow-lg w-full object-cover"
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Below card trust */}
          <p className="text-center text-white/80 text-xs sm:text-sm mt-4">
            📞 +91-9911449683 &nbsp;|&nbsp; ayurvedlife1993@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
