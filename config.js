// Supabase Project Credentials
const SUPABASE_URL = "https://vxquqxiblysgzrpgfvgc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_6ItmZHYYCjj0dn7nz7-uLQ_wzXwUJrO";

// Initialize Supabase Client
let supabaseClient = null;

if (typeof window.supabase !== 'undefined') {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Global Config
window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  client: supabaseClient
};
