import { createContext, ReactNode, useEffect, useState } from 'react';

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { firebaseApp } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const errorMessage = 'Missing information from Google Account';

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (googleUser) => {
      if (!googleUser) return;
      const { displayName, photoURL, uid } = googleUser;

      if (!displayName || !photoURL) throw new Error(errorMessage);

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const response = await signInWithPopup(auth, provider);
    const { user: googleUser } = response;

    if (!googleUser) throw new Error(errorMessage);

    const { displayName, photoURL, uid } = googleUser;

    if (!displayName || !photoURL) throw new Error(errorMessage);

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
