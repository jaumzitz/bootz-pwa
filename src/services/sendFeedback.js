import { supabase } from "./supabaseClient";


export async function sendFeedback(description, userId) {
  const { data, error } = await supabase
    .from("user_feedback")
    .insert([
      {
        created_by: userId,
        description: description,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return data
}