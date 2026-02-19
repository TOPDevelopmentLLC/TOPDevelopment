import React, { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { router } from 'expo-router';

type Role = 'ADMIN' | 'USER';

interface AuthState {
  token: string | null;
  userId: string | null;
  email: string | null;
  role: Role | null;
  wwApiToken: string | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (token: string, userId: string, email: string, role: Role, wwApiToken: string | null) => void;
  setWwApiToken: (wwApiToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEYS = {
  token: 'auth_token',
  userId: 'auth_user_id',
  email: 'auth_email',
  role: 'auth_role',
  wwApiToken: 'auth_ww_api_token',
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
    userId: null,
    email: null,
    role: null,
    wwApiToken: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = getStoredValue(STORAGE_KEYS.token);
    const userId = getStoredValue(STORAGE_KEYS.userId);
    const email = getStoredValue(STORAGE_KEYS.email);
    const role = getStoredValue(STORAGE_KEYS.role) as Role | null;
    const wwApiToken = getStoredValue(STORAGE_KEYS.wwApiToken);

    if (token && userId && email && role) {
      setAuthState({
        token,
        userId,
        email,
        role,
        wwApiToken,
        isAuthenticated: true,
      });
    }
  }, []);

  const login = (token: string, userId: string, email: string, role: Role, wwApiToken: string | null) => {
    setStoredValue(STORAGE_KEYS.token, token);
    setStoredValue(STORAGE_KEYS.userId, userId);
    setStoredValue(STORAGE_KEYS.email, email);
    setStoredValue(STORAGE_KEYS.role, role);
    if (wwApiToken) {
      setStoredValue(STORAGE_KEYS.wwApiToken, wwApiToken);
    } else {
      removeStoredValue(STORAGE_KEYS.wwApiToken);
    }

    setAuthState({
      token,
      userId,
      email,
      role,
      wwApiToken,
      isAuthenticated: true,
    });
  };

  const setWwApiToken = (wwApiToken: string) => {
    setStoredValue(STORAGE_KEYS.wwApiToken, wwApiToken);
    setAuthState((prev) => ({ ...prev, wwApiToken }));
  };

  const logout = () => {
    removeStoredValue(STORAGE_KEYS.token);
    removeStoredValue(STORAGE_KEYS.userId);
    removeStoredValue(STORAGE_KEYS.email);
    removeStoredValue(STORAGE_KEYS.role);
    removeStoredValue(STORAGE_KEYS.wwApiToken);

    setAuthState({
      token: null,
      userId: null,
      email: null,
      role: null,
      wwApiToken: null,
      isAuthenticated: false,
    });

    router.push('/login' as any);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, setWwApiToken, logout }}>
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
