import { supabase } from "../services/supabaseClient"; 
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../utils/formatDate";


async function fetchComments(trailId) {
    const { data, error } = await supabase
        .from('trail_comment')
        .select(`
            'id',
            'created_by',
            'created_date',
            'content',
            'trail_id'    
        `)
        .range(0, 4)
        .eq('trail_id', trailId)
        .order('created_date', { ascending: false })

    if (error) throw error;

    return data.map(comment => ({...comment, formatted_date: formatDate(comment.created_date)}))
}

export function useFetchComments(trailId) {
    return useQuery({ 
        queryKey: ['comments', trailId], 
        queryFn: () => fetchComments(trailId),
        staleTime: 1000 * 60 * 5, // cache por 5 minutos
        onError: (err) => { console.error("React Query error:", err); }
    })
}
