// Mock API for consultation form submission
export const submitConsultationRequest = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock success response
  console.log('Form submitted with data:', formData);
  
  // Store in localStorage for demo purposes
  const existingData = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
  const newRequest = {
    id: Date.now(),
    ...formData,
    timestamp: new Date().toISOString(),
    status: 'pending'
  };
  
  existingData.push(newRequest);
  localStorage.setItem('consultationRequests', JSON.stringify(existingData));

  return {
    success: true,
    message: 'Consultation request submitted successfully',
    data: newRequest
  };
};

// Get all consultation requests (for admin view - optional)
export const getConsultationRequests = () => {
  return JSON.parse(localStorage.getItem('consultationRequests') || '[]');
};
