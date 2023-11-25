import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aczyuelbodcpeixryfnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjenl1ZWxib2RjcGVpeHJ5Zm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NDE5NzgsImV4cCI6MjAxNjMxNzk3OH0.dp8x43ouZCP8vw1IBY3YIPUxwOPu7cGGEy4ODuLBxaQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
