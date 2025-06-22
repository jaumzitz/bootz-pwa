// src/hooks/useFetchTrails.js
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient"; // ajuste o caminho conforme seu projeto

// Função para buscar trilhas do Supabase
async function fetchTrails(filters) {
  const { data, error } = await supabase
    .from("trail")
    .select(`
      id,
      name,
      uploaded_by,
      length,
      state_or_province,
      city,
      description,
      images: trail_images (
        url
      )
    `)
    .range(filters?.range.min, filters?.range.max);


    if (error) throw error;
    
  return data

  // Adapta para trazer apenas a primeira imagem (ou null)
  // return data.map(trail => ({
  //   ...trail,
  //   imageUrl: trail.trail_images?.[0]?.url || null
  // }));
}

// Hook customizado usando React Query
export function useFetchTrails( filters ) {

  return useQuery({
    queryKey: ['trails', filters],
    queryFn: () => fetchTrails(filters),
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });

  
}