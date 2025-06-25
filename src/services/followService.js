import { supabase } from "../services/supabaseClient";

// Seguir usuário
export async function followUser(followerUsername, followingUsername) {
    const { error } = await supabase
        .from("user_followers")
        .insert([{ follower_user: followerUsername, followed_user: followingUsername }]);
    if (error) return false;
    return true;
}

// Deixar de seguir usuário
export async function unfollowUser(followerUsername, followingUsername) {
    const { error } = await supabase
        .from("user_followers")
        .delete()
        .eq("follower_user", followerUsername)
        .eq("followed_user", followingUsername);
    if (error) throw error;
    return true;
}

// Verificar se está seguindo
export async function isFollowing(followerUsername, followingUsername) {
    try {

        const { data = [], error } = await supabase
            .from("user_followers")
            .select("follower_user")
            .eq("follower_user", followerUsername) //essa pessoa
            .eq("followed_user", followingUsername) //segue essa pessoa
            .maybeSingle();

        if (error) throw error; // PGRST116 = no rows found
        

        
        return !!data

    } catch (e) {
        console.error(e)
        return false
    }


}