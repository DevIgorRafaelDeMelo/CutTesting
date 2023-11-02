import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // A autenticação foi bem-sucedida e o usuário já será atualizado pelo useEffect.
      return true;
    } catch (error) {
      console.error('Erro de autenticação:', error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      //  o satanás será atualizado para nulo pelo useEffect após o logou
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
