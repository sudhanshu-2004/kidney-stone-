# 🌿 Ayurved Life

Welcome to **Ayurved Life**. A premium React-based landing page for Kidney Stone Ayurvedic solutions, optimized for high conversion and mobile responsiveness.

## 🚀 Key Features
- **Direct Supabase Integration**: Form data is sent directly to your Supabase project via the Anon API Key. No backend server is required for production.
- **Ultra Responsive**: Optimized for Phones, Tablets, and Laptops with a first-class mobile experience.
- **One-Tap Contact**: Integrated WhatsApp and Direct Call Floating Action Buttons (FAB).
- **Modern UI**: Built with React, Tailwind CSS, Lucide icons, and sleek animations.
- **SEO Optimized**: Pre-configured meta tags in Hindi for better local search visibility.

## 📁 Project Structure
- `/frontend`: The main React application.
- `/vercel.json`: Configuration for seamless Vercel deployment.
- `/backend`: (Optional) Python FastAPI backend (not needed for the Vercel app, which uses direct Supabase).

## 🌍 Deployment to Vercel

1. **Push to GitHub**: (Already completed by Antigravity).
2. **Import to Vercel**: 
   - Go to [Vercel](https://vercel.com).
   - Click "Add New" → "Project".
   - Import the `kidney-stone-` repository.
3. **Build Settings**: 
   - Vercel should auto-detect the configuration from `vercel.json`.
   - **Framework Preset**: Create React App (or Other).
   - **Build Command**: `cd frontend && npm install --legacy-peer-deps && npm run build`
   - **Output Directory**: `frontend/build` (handled automatically by `vercel.json`).
4. **Deploy**: Click "Deploy" and your website will be live!

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, shadcn/ui.
- **Database/Auth**: Supabase (via `@supabase/supabase-js`).
- **Icons**: Lucide React.
- **Analytics**: PostHog (Pre-configured).

---
*Created by **Sudhanshu Kumar** © 2026*
