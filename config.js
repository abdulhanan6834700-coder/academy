// Supabase Project Credentials
const SUPABASE_URL = "https://vxquqxiblysgzrpgfvgc.supabase.co";

// ⚠️ Yahan apni Supabase Dashboard ki real ANON key daalein (Jo eyJhbGci... se shuru hoti hai)
const SUPABASE_ANON_KEY = "YOUR_ACTUAL_SUPABASE_ANON_KEY_HERE"; 

// Initialize Supabase Client globally
let supabaseClient = null;

if (typeof window.supabase !== 'undefined') {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Global Configuration object for backward compatibility
window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  client: supabaseClient
};
