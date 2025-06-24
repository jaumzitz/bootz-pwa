import { useQuery } from "@tanstack/react-query";
import { supabase } from "../services/supabaseClient";

// Função para buscar os dados do perfil
export async function fetchProfileData(username) {
  const { data, error } = await supabase
    .from("user_profile")
    .select(`
      username,
      full_name,
      city,
      state_or_province,
      total_followers,
      total_following,
      total_trails_sent
    `)
    .eq("username", username)
    .single();

  if (error) throw error;
  return data;
}

// Hook customizado usando React Query
export function useFetchProfileData(username) {
  return useQuery({
    queryKey: ["profile", username],
    queryFn: () => fetchProfileData(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });
}