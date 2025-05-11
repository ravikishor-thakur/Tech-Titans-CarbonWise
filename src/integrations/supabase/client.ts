
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://usjulmjncybgnmnbbaww.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanVsbWpuY3liZ25tbmJiYXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzcyOTEsImV4cCI6MjA2MjQ1MzI5MX0.gLrRBZfRu1IgAckaGoKo8r8hLoDXpYDNtzarjjH9GT4";



export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);