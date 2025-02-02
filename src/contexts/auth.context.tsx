'use client';

import { login, User, users } from "@/utils/simulate-backend";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  handleLogin: (email: string, password: string) => void;
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return auth;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
      router.push('/');
      setUser(users.find(user => user.token === token) || null);
    } else {
      setIsLoggedIn(false);
      router.push('/login');
    }
  }, [router]);

  const handleLogin = useCallback((email: string, password: string) => {
    const user = login(email, password);
    if (user) {
      // User is logged in
      console.log('Login successful', user);
      setIsLoggedIn(true);
      router.push('/');
      setUser(user);
      if (user.token) localStorage.setItem('token', user.token);
    } else {
      // User is not logged in
      console.log('Login failed');
    }
  }, [router]);

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogin, user }}>{children}</AuthContext.Provider>

};