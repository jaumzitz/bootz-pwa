import { supabase } from "@supabase/auth-ui-shared";
import { useQuery } from "@tanstack/react-query";


async function fetchProfileHistory(username) {
    
    const { data, error } = await supabase
    .from('trail')
    .select(`
        id,
        name,
        city,
        length,
        created_at,
        
        
        `)
        .eq('created_by', username)
        .range(0,9)
        .order('created_at', {ascending: false})
        
        
        
        if (error) throw error;
        
        return data
        
    }
    
    // Hook customizado usando React Query
    export function useFetchProfileHistory(username) {
        
        // return useQuery({
            //     queryKey: ['profileHistory', username],
            //     queryFn: () => fetchProfileHistory(username),
            //     staleTime: 1000 * 60 * 5, // cache por 5 minutos
            // });
            console.log('fetchingProfileHistory...', username)
            return fetchProfileHistory(username)
            
        }