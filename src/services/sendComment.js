import { supabase } from "./supabaseClient";

export async function sendComment({ trail_id, content, created_by }) {
  const { data, error } = await supabase
    .from("trail_comment")
    .insert([
      {
        trail_id,
        content,
        created_by
      }
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}