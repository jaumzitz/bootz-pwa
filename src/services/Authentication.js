import { supabase } from './supabaseClient.js';

export async function signInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    } 

    return { data };
}


export async function logout() {
    const { data, error } = await supabase.auth.signOut()
}

export async function fetchUsername(userId) {
  const { data, error } = await supabase
    .from("user_profile")
    .select("username")
    .eq("user_id", userId)
    .single();
  return data?.username || null;
}