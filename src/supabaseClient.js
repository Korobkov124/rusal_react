import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pfvfdvlinjogspjjbylj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdmZkdmxpbmpvZ3NwampieWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY0ODMsImV4cCI6MjA1NzQzMjQ4M30.GCGLODzSYOYtIZrwzyyk0PF6yAaDwPHRhvRZEtcBxUs";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;