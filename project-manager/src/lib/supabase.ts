import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzY3BvdHFmYW1zeGt3enV3a3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNzkxNDcsImV4cCI6MjA1MTk1NTE0N30.QdFuG-d6z4NHJgPXLkVJzOKWv6g3yvwjNHID_jq_aMM"

const SUPABASE_URL = "https://kscpotqfamsxkwzuwkwl.supabase.co"

export const supabaseClient = createClient(
 SUPABASE_URL , SUPABASE_KEY
);

export async function signInWithFacebook() {
  await supabaseClient.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: "http://localhost:5173/dashboard"
    }
  })
}

export async function signInWithGoogle() {
  await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/dashboard"
    }
  })
}