import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);

  // Função para buscar o username na tabela user_profile
  async function fetchUsername(userId) {
    const { data, error } = await supabase
      .from("user_profile")
      .select("username")
      .eq("user_id", userId)
      .single();
    return data?.username || null;
  }

  useEffect(() => {
    async function updateSessionAndUsername(session) {
      console.log('Atualizando sessão e username', session);
      setLoading(true); // <- Adicione esta linha
      setSession(session);
      if (session?.user?.id) {
        const username = await fetchUsername(session.user.id);
        console.log('Username obtido onAuthStateChange:', username);
        setUsername(username);
      } else {
        setUsername(null);
      }
      setLoading(false);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      updateSessionAndUsername(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Estado de autenticação alterado', _event, session);
      updateSessionAndUsername(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading, username }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook de conveniência
export function useAuth() {
  return useContext(AuthContext);
}