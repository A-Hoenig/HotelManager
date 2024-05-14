import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tgnnvzhhtqonauknvhoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbm52emhodHFvbmF1a252aG9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDQ2MTAsImV4cCI6MjAzMTI4MDYxMH0.oM89-6xDnXHCgSTQlKdtV-GGcaS3S85uz5L4SyiFrsM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
