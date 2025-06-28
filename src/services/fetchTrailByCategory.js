import { supabase } from "./supabaseClient";

export async function fetchTrailByCategory(filters) {
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
        fullDescription,
        category_option_id: id,
        category_id,
        category (
          icon_path
        )
      )
    )
  `)
      .not('categories', 'is', null) // Só retorna trilhas que possuem pelo menos uma categoria

  .eq('categories.category_option.category_id', filters?.category_id)
  .eq('categories.category_option_id', filters?.category_option_id)
  //.range(filters?.range?.min, filters?.range?.max);

 // return data


  if (error) throw error;

  return data
  .filter(trail => trail.categories && trail.categories.length > 0)
  .map(trail => ({
    ...trail,
    categories: (trail.categories ?? [])
      .map(tc => ({
        'id': tc.category_option?.category_id,
        'description': tc.category_option?.fullDescription,
        'icon_path': tc.category_option?.category?.icon_path
      }))
  }))


}