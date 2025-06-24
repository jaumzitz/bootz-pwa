import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";
import { isFollowing } from "../services/followService";

async function checkIfUserFollows(follower, followed) {
    const { data, error } = await supabase
        .from('user_followers')
        .select('id') // basta selecionar algum campo
        .eq('follower_user', follower)
        .eq('followed_user', followed)
        .limit(1)

    if (error) {
        console.error("Erro na consulta", error.message)
        return false
    }

    return data.length > 0
}

export function useCheckIfUserFollows(follower, followed) {
    return useQuery({
        queryKey: ["isFollowing", follower, followed],
        queryFn: () => isFollowing(follower, followed),

        staleTime: 1000 * 60 * 2, // cache por 2 minutos
    })
}
