// Configuration file for the application
export const config = {
  // Google OAuth Configuration (optional for demo mode)
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID_HERE",
  
  // API Configuration - Updated to use Node.js backend
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8002',
  
  // Demo mode settings
  DEMO_MODE: false, // Set to false when backend is running
};
