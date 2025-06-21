// src/hooks/useFetchTrails.js
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient"; // ajuste o caminho conforme seu projeto

export function useFetchTrails(filter = {}) {
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrails() {
      setLoading(true);
      let query = supabase
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
        .range(filter.range.min, filter.range.max)
      ;
      // Adicione filtros se necessário
      const { data, error } = await query;
      if (!error && data) {
        // Pega apenas a primeira imagem (ou null) para cada trilha
        const trailsWithImage = data.map(trail => ({
          ...trail,
          imageUrl: trail.trail_image?.[0]?.url || null
        }));
        setTrails(trailsWithImage);
      }
      setLoading(false);
    }
    fetchTrails();
  }, [JSON.stringify(filter)]);

  return { trails, loading };
}