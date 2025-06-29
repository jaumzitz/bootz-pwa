import { supabase } from "./supabaseClient";

export async function sendTrail(trailData) {

    const { data, error } = await supabase
        .from("trail")
        .insert([trailData])
        .select();

    if (error) {
        throw error
    }

    if (data) {
        return data
    }

}


export async function sendTrailCategory(categoryData) {

    const { data, error } = await supabase
        .from('trail_category')
        .insert(categoryData)
        .select();

    if (error) throw Error
    if (data) return data
    


}