
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

// Define the shape of our user object
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'hr' | 'it' | 'readonly';
}

// Define the shape of our auth context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, twoFactorCode?: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  isAuthenticated: boolean;
  hasRole: (roles: string[]) => boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  logout: () => {},
  register: async () => false,
  isAuthenticated: false,
  hasRole: () => false,
});

// Mock users for demo - in a real app, this would be stored in a database
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@gestel.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: '2',
    name: 'HR Manager',
    email: 'hr@gestel.com',
    password: 'hr123',
    role: 'hr',
  },
  {
    id: '3',
    name: 'IT Support',
    email: 'it@gestel.com',
    password: 'it123',
    role: 'it',
  },
  {
    id: '4',
    name: 'View Only',
    email: 'view@gestel.com',
    password: 'view123',
    role: 'readonly',
  },
];

// Export the auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if there's a user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('gestelUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('gestelUser');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string, twoFactorCode?: string): Promise<boolean> => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user by email
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      // In a real app, we would validate the 2FA code here
      if (twoFactorCode && twoFactorCode !== '123456') {
        toast({
          title: "Échec de l'authentification",
          description: "Code d'authentification à deux facteurs incorrect",
          variant: "destructive",
        });
        return false;
      }
      
      // Create user object (excluding password)
      const userObj: User = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role as User['role'],
      };
      
      // Store in state and localStorage
      setUser(userObj);
      localStorage.setItem('gestelUser', JSON.stringify(userObj));
      
      toast({
        title: "Connexion réussie",
        description: `Bienvenue, ${userObj.name}!`,
      });
      
      return true;
    } else {
      toast({
        title: "Échec de la connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive",
      });
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('gestelUser');
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès.",
    });
  };

  // Register function (mock)
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if email already exists
    if (MOCK_USERS.some(u => u.email === email)) {
      toast({
        title: "Échec de l'inscription",
        description: "L'email est déjà utilisé.",
        variant: "destructive",
      });
      return false;
    }
    
    // In a real app, we would add the user to the database
    toast({
      title: "Inscription réussie",
      description: "Votre compte a été créé. Vous pouvez maintenant vous connecter.",
    });
    
    return true;
  };

  // Check if user has a specific role
  const hasRole = (roles: string[]): boolean => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
