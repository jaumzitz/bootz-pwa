import { useAuth } from '../context/AuthContext.js';
import { supabase } from './supabaseClient.js';

export async function signUpWithEmail(email, password, username, city, stateOrProvince, fullName, phone, profilePicture) {

    const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        throw new Error(signUpError.message);
    }

    if (data.session) {
        try {
            console.log('Criando perfil. User_id', data.session.user.id)
            const { data: createProfileData } = await createProfile(
                data.session.user.id,
                username,
                city,
                stateOrProvince,
                fullName,
                phone,
                profilePicture)




        } catch (e) {
            throw new Error(e)
        }
    }


}


async function createProfile(user_id, username, city, stateOrProvince, fullName, phone, profilePicture) {


    const { data, error } = await supabase
        .from("user_profile")
        .insert(
            [{
                user_id: user_id,
                username: username,
                full_name: fullName,
                city: city,
                state_or_province: stateOrProvince,
                phone_number: phone

            }]
        )
    .select()


    if (error) {
        throw new Error(error.message);
    }



    if (profilePicture) {

        try {
            await uploadProfilePicture(profilePicture, username)
        } catch (e) {
            throw new Error(e)
        }

    }

    console.log('Perfil criado com sucesso', data)

    return data
}

async function uploadProfilePicture(file, username) {
    console.log('fazendo upload da foto de perfil')

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