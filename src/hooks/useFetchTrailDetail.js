// src/hooks/useFetchTrails.js
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient"; 

async function fetchTrailDetails(trailId) {
    const { data, error } = await supabase
        .from('trail')
        .select(`
    id,
    name,
    uploaded_by,
    length,
    state_or_province,
    city,
    description,
    comments_count,
    images: trail_image (
      url
    ),
    categories: trail_category (
      category_option (
        category_id,
        fullDescription,
        category (
          icon_path
        )
      )
    )
  `)
        .eq('id', Number(trailId))
        .single()


    //console.log(data)
    if (error) throw error;

    return {
        ...data,
        categories: data.categories
            .map(tc => ({
                'id': tc.category_option?.category_id,
                'description': tc.category_option?.fullDescription,
                'icon_path': tc.category_option?.category?.icon_path
            }))

    }


}

export function useFetchTrailDetail(trailId) {

    return useQuery({
        queryKey: ['trail', trailId],
        queryFn: () => fetchTrailDetails(trailId),
        staleTime: 1000 * 60 * 5, // cache por 5 minutos
        onError: (err) => { console.error("React Query error:", err); }
        //enabled: !!trailId, // só executa se trailId existir

    });


}