import { supabase } from './supabaseClient.js';

export async function signUpWithEmail(email, password, username, city, state_or_province, fullName, profilePicture) {
    const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        throw new Error(signUpError.message);
    }

    try {
        const createdProfile = await createProfile(
            data.session.user.id,
            username,
            city,
            state_or_province,
            fullName,
            profilePicture)



    } catch (e) {
        throw new Error(e)
    }





    return { data };
}


async function createProfile(user_id, username, city, state_or_province, fullName, profilePicture) {


    const { data, error } = await supabase
        .from("user_profile")
        .insert([
            {
                user_id: user_id,
                username: username,
                full_name: fullName
            }
        ]);

    if (error) {
        throw new Error(error.message);
    }

    try {
        await uploadProfilePicture(profilePicture, username)
    } catch (e) {
        throw new Error(e)
    }

    return data;
}

async function uploadProfilePicture(file, username) {

    const newFileName = `${username}.jpg`
    const renamedFile = new File([file], newFileName, { type: file.type })

    const { data, error } = await supabase
        .storage
        .from('avatar')
        .upload(newFileName, renamedFile)

    if (error) {
        throw new Error(error.message);
    }

    return data


}