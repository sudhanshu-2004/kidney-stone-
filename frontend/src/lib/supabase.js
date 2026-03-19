import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dxmcdnkbcswwoxzyfnaq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bWNkbmtiY3N3d294enlmbmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5MDk3NjQsImV4cCI6MjA4ODQ4NTc2NH0.TvvrG3x3E0_JK8ItQfruQSEPS8KZDmKrMkWAbV8zcHg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
