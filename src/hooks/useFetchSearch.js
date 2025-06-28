import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";
import { normalizeText } from "../utils/normalizaText";


export async function fetchSearch(query) {
  const {data, error } = await supabase
  .from('trail')
  .select(`
    id,
    name,
    normalized_name,
    created_by,
    length,
    state_or_province,
    city,
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
  .ilike('normalized_name', `%${normalizeText(query)}%`, { useUnaccent: true })


  if (error) {
    throw new Error(`Error fetching search results: ${error.message}`);
  }

  return data.map(trail => ({
    ...trail,
    categories: (trail.categories ?? [])
      .map(tc => ({
        'id': tc.category_option?.category_id,
        'description': tc.category_option?.fullDescription,
        'icon_path': tc.category_option?.category?.icon_path
      }))
  }));
}

// Hook customizado usando React Query
export function useFetchSearch(queryKey, filters) {

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchSearch(filters),
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });


}