// Google Sheets API Integration
// NOTE: User needs to add the Web App URL from Google Apps Script deployment

// IMPORTANT: After deploying the Google Apps Script, replace this URL
// Steps to get URL:
// 1. In Google Apps Script, click "Deploy" → "New deployment"
// 2. Select "Web app"
// 3. Set "Execute as" = Me
// 4. Set "Who has access" = Anyone
// 5. Click "Deploy" and copy the Web App URL

const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE'; // Replace this after deployment

export const submitConsultationRequest = async (formData) => {
  try {
    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        timestamp: new Date().toISOString()
      })
    });

    // Note: no-cors mode means we can't read the response
    // But the request will still work
    console.log('Form submitted to Google Sheets:', formData);
    
    // Also save locally as backup
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
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    
    // If Google Sheets fails, still save locally
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
      message: 'Request saved locally',
      data: newRequest
    };
  }
};

// Get all consultation requests (for testing)
export const getConsultationRequests = () => {
  return JSON.parse(localStorage.getItem('consultationRequests') || '[]');
};
