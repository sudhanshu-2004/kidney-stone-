// Google Sheets API Integration
// NOTE: User needs to add the Web App URL from Google Apps Script deployment

// IMPORTANT: After deploying the Google Apps Script, replace this URL
// Steps to get URL:
// 1. In Google Apps Script, click "Deploy" → "New deployment"
// 2. Select "Web app"
// 3. Set "Execute as" = Me
// 4. Set "Who has access" = Anyone
// 5. Click "Deploy" and copy the Web App URL

const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwbXbpwa_sI7OtEUICAiF_c2wyzhkfMkkDgnGaOFpun7d798vW7WiN7F4O2ognHhbA/exec';

// Fake Leads Filter - Phone Number Validation
const isValidIndianMobile = (phone) => {
  // Check if 10 digits
  if (phone.length !== 10) return false;
  
  // Check if starts with valid Indian mobile prefix (6-9)
  if (!/^[6-9]/.test(phone)) return false;
  
  // Check for all same digits (e.g., 9999999999)
  if (/^(\d)\1{9}$/.test(phone)) return false;
  
  // Check for sequential numbers (e.g., 1234567890)
  const sequential = '0123456789';
  if (sequential.includes(phone) || sequential.split('').reverse().join('').includes(phone)) {
    return false;
  }
  
  // Check for repeated patterns (e.g., 1212121212)
  if (/^(\d{2})\1{4}$/.test(phone) || /^(\d{3})\1{3}$/.test(phone)) {
    return false;
  }
  
  return true;
};

// Check for suspicious names
const isValidName = (name) => {
  // Must be at least 3 characters
  if (name.length < 3) return false;
  
  // Check for test/fake names
  const suspiciousNames = ['test', 'testing', 'asdf', 'qwer', 'aaaa', 'bbbb', 'xxx', 'fake'];
  const lowerName = name.toLowerCase().trim();
  
  for (let suspicious of suspiciousNames) {
    if (lowerName.includes(suspicious)) return false;
  }
  
  // Must contain at least one letter
  if (!/[a-zA-Z\u0900-\u097F]/.test(name)) return false;
  
  return true;
};

export const submitConsultationRequest = async (formData) => {
  try {
    // Fake Leads Filter
    if (!isValidName(formData.name)) {
      return {
        success: false,
        message: 'कृपया सही नाम डालें। Test names allowed नहीं हैं।',
        error: 'INVALID_NAME'
      };
    }

    if (!isValidIndianMobile(formData.phone)) {
      return {
        success: false,
        message: 'कृपया valid Indian mobile number डालें (6-9 से शुरू होना चाहिए)। Fake numbers allowed नहीं हैं।',
        error: 'INVALID_PHONE'
      };
    }

    // Check if URL is configured
    if (GOOGLE_SHEETS_WEB_APP_URL === 'YOUR_WEB_APP_URL_HERE') {
      console.warn('Google Sheets Web App URL not configured. Saving locally only.');
      
      // Save locally
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
        message: 'Consultation request saved locally',
        data: newRequest,
        warning: 'Google Sheets not configured'
      };
    }

    // Send data to Google Sheets
    // Use form-encoded data to ensure Apps Script receives parameters reliably
    const payload = new URLSearchParams({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      mobile: formData.phone.trim(),
      timestamp: new Date().toISOString()
    });

    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: payload.toString()
    });

    // Note: no-cors mode means we can't read the response
    // But the request will still work
    console.log('✅ Form submitted to Google Sheets:', formData);
    
    // Also save locally as backup
    const existingData = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
    const newRequest = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'sent_to_sheets'
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
