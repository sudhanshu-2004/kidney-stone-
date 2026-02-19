# 🎯 Google Sheets Integration - Complete Setup Guide

## ✅ Step 1: Open Your Google Sheet
Link: https://docs.google.com/spreadsheets/d/1Nm-PRCiU24xAMSMlYHU5vufTe3XntumhR_ByDAtHe-M/edit

## ✅ Step 2: Add Google Apps Script

1. **Menu mein jao**: Extensions → Apps Script
2. **Purana code delete karo** (agar koi hai)
3. **Naya code paste karo** (from file: `/app/google-apps-script.js`)
4. **Save karo** (Ctrl+S ya File → Save)
5. **Project ka naam do**: "Ayurved Life Form Handler"

## ✅ Step 3: Deploy as Web App

1. **Click "Deploy"** (upar right corner mein) → **"New deployment"**
2. **Settings:**
   - Click ⚙️ icon → Select **"Web app"**
   - **Description**: "Form Data Collector"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (Important!)
3. **Click "Deploy"**
4. **Authorize access:**
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Ayurved Life Form Handler (unsafe)"
   - Click "Allow"
5. **Copy the Web App URL** 
   - Looks like: `https://script.google.com/macros/s/AKfycby.../exec`
   - **SAVE THIS URL!** You need it for Step 4

## ✅ Step 4: Update Frontend Code

Mujhe Web App URL dena (jo Step 3 mein copy kiya):
- Main automatically code update kar dunga
- Ya aap manually update karo: `/app/frontend/src/utils/googleSheetsApi.js`
  Line 12 par: `const GOOGLE_SHEETS_WEB_APP_URL = 'PASTE_YOUR_URL_HERE';`

## ✅ Step 5: Test Karo!

1. Website par jao
2. Form fill karo (Name + Mobile)
3. Submit karo
4. Google Sheet refresh karo
5. **Data dikhai dega!** ✨

## 📊 Google Sheet Format

Automatically 4 columns banenge:
| Timestamp | Name | Mobile Number | Status |
|-----------|------|---------------|--------|
| 19/12/2024 13:30:25 | Rahul Kumar | 9876543210 | New |

## 🔧 Troubleshooting

**Problem**: Data nahi aa raha?
- Check: Web App URL sahi paste kiya?
- Check: "Who has access" = Anyone hai?
- Check: Browser console mein error hai? (F12 press karo)

**Problem**: Authorization error?
- Script editor mein dobara deploy karo
- "Manage deployments" → Edit → "New version" → Deploy

## 📱 What Happens When Form Submits?

1. ✅ Data Google Sheet mein save hoga
2. ✅ Data browser localStorage mein bhi backup hoga
3. ✅ Success toast dikhai dega
4. ✅ Form clear ho jayega

## 🎉 Done!

Bas Web App URL mujhe bhejo, main code update kar dunga!
