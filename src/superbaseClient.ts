import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://xkgvpmjinpdnjdzkcncf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ3ZwbWppbnBkbmpkemtjbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTIwNDYsImV4cCI6MjAwNDc2ODA0Nn0.6A3nJNGM6zUn0Aoys8kiyJOCQxk0sfrpKRwaY7AQKVc"
);

export default supabaseClient;
