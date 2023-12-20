import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zdusdxfplkjsewunucwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdXNkeGZwbGtqc2V3dW51Y3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0Njk5NDUsImV4cCI6MjAxODA0NTk0NX0.t0vvo3BmkZIVDHqdHXzKVsJ7IkNvFzMC1OHFSK_W_HA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
