// src/hooks/useFetchTrails.js
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient"; // ajuste o caminho conforme seu projeto

// Função para buscar trilhas do Supabase
async function fetchTrails(filters) {
  const { data, error } = await supabase
    .from('trail')
    .select(`
    id,
    name,
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
    .range(filters?.range.min, filters?.range.max);

  if (error) throw error;

  return data.map(trail => ({
    ...trail,
    categories: (trail.categories ?? [])
      .map(tc => ({
        'id': tc.category_option?.category_id,
        'description': tc.category_option?.fullDescription,
        'icon_path': tc.category_option?.category?.icon_path
      }))
  }))


}

// Hook customizado usando React Query
export function useFetchTrails(queryKey, filters) {

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchTrails(filters),
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });


}