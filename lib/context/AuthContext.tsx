import React, { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { router } from 'expo-router';

type Role = 'ADMIN' | 'USER';

interface AuthState {
  token: string | null;
  email: string | null;
  role: Role | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (token: string, email: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEYS = {
  token: 'auth_token',
  email: 'auth_email',
  role: 'auth_role',
};

function getStoredValue(key: string): string | null {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
}

function setStoredValue(key: string, value: string): void {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
}

function removeStoredValue(key: string): void {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    email: null,
    role: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = getStoredValue(STORAGE_KEYS.token);
    const email = getStoredValue(STORAGE_KEYS.email);
    const role = getStoredValue(STORAGE_KEYS.role) as Role | null;

    if (token && email && role) {
      setAuthState({
        token,
        email,
        role,
        isAuthenticated: true,
      });
    }
  }, []);

  const login = (token: string, email: string, role: Role) => {
    setStoredValue(STORAGE_KEYS.token, token);
    setStoredValue(STORAGE_KEYS.email, email);
    setStoredValue(STORAGE_KEYS.role, role);

    setAuthState({
      token,
      email,
      role,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    removeStoredValue(STORAGE_KEYS.token);
    removeStoredValue(STORAGE_KEYS.email);
    removeStoredValue(STORAGE_KEYS.role);

    setAuthState({
      token: null,
      email: null,
      role: null,
      isAuthenticated: false,
    });

    router.push('/login' as any);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
