// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

export function getSupabase(env: any) {
  if (!env.SUPABASE_URL) throw new Error('supabaseUrl is required.');
  const key = env.SUPABASE_SERVICE_ROLE_KEY ?? env.SUPABASE_ANON_KEY;
  return createClient(env.SUPABASE_URL, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}