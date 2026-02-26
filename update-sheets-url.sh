#!/bin/bash
# Script to update Google Sheets Web App URL

echo "🔗 Google Sheets Integration Setup"
echo "=================================="
echo ""
echo "Please provide your Google Apps Script Web App URL:"
echo "(Looks like: https://script.google.com/macros/s/AKfycby.../exec)"
echo ""
read -p "Enter URL: " WEB_APP_URL

if [ -z "$WEB_APP_URL" ]; then
    echo "❌ No URL provided. Exiting..."
    exit 1
fi

# Update the googleSheetsApi.js file
sed -i "s|const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE';|const GOOGLE_SHEETS_WEB_APP_URL = '$WEB_APP_URL';|g" /app/frontend/src/utils/googleSheetsApi.js

echo ""
echo "✅ Google Sheets URL updated successfully!"
echo "✅ Web App URL: $WEB_APP_URL"
echo ""
echo "Next steps:"
echo "1. Frontend will automatically reload"
echo "2. Test the form by submitting data"
echo "3. Check your Google Sheet for new entries"
echo ""
echo "🎉 Setup complete!"
