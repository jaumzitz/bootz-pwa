import { supabase } from "./supabaseClient";

export async function fetchUsers(username, fullName) {
    const { data, error } = await supabase
        .from('user_profile')
        .select(`
            username,
            full_name`
        )
        .ilike('username', `%${username}%`)

        return data

}