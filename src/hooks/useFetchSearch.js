import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";
import { normalizeText } from "../utils/normalizaText";


export async function fetchSearch(query) {
  const normalized = normalizeText(query);

  const { data, error } = await supabase
    .from('trail')
    .select(`
      id,
      name,
      normalized_name,
      created_by,
      created_at,
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
    .or(
      `normalized_name.ilike.%${normalized}%,normalized_city.ilike.%${query}%`
    )
    .order('created_at', {ascending: false} )

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