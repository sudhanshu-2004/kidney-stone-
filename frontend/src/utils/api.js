// Supabase Direct API Integration
import { supabase } from '../lib/supabase';

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

    // Simple UUID generator (fallback for older browsers without crypto.randomUUID)
    const generateUUID = () => {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    // Insert directly into Supabase via API key
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          id: generateUUID(),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          timestamp: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('✅ Form submitted to Supabase:', data);

    // Also save locally as backup
    const existingData = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
    const newRequest = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'saved_to_supabase'
    };
    existingData.push(newRequest);
    localStorage.setItem('consultationRequests', JSON.stringify(existingData));

    return {
      success: true,
      message: 'Consultation request submitted successfully',
      data: data?.[0] || newRequest
    };
  } catch (error) {
    console.error('Error submitting to Supabase:', error);

    // If Supabase fails, still save locally
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
      success: false,
      message: `Error: ${error.message || 'Connection failed'}`,
      error: error.message
    };
  }
};

// Get all consultation requests (for testing)
export const getConsultationRequests = () => {
  return JSON.parse(localStorage.getItem('consultationRequests') || '[]');
};
