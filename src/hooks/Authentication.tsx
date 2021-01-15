import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthenticationState {
  token: string;
  user: Record<string, unknown>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface Authentication {
  user: Record<string, unknown>;

  signIn(credentials: SignInCredentials): Promise<void>;

  signOut(): void;
}

const AuthenticationContext = createContext<Authentication>(
  {} as Authentication,
);

export const useAuth = (): Authentication => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthenticationState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthenticationState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthenticationState);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
