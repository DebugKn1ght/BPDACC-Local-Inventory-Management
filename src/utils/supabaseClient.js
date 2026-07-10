import { createClient } from '@supabase/supabase-js';

// Supabase project credentials
const SUPABASE_URL = 'https://pswugdwocltprbjfqoki.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__cOpdxG0am_gwNYZl_y9tw_CI493Fvm';

// Create and export the client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
