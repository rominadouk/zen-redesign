import { useState, createContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



// Define the shape of the context's value
type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    // login: () => void;
    logout: () => void;
  };

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => {},
  // login: () => {},
  setIsAuthenticated: () => {}
});

// AuthProvider props type
type AuthProviderProps = {
    children: ReactNode;
  };
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // !! is a common way to convert a value to a boolean
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        // if user is already on / endpoint, just refresh page
        if (location.pathname === '/') {
          window.location.reload();
        } else {
          navigate('/');
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
          {children}
        </AuthContext.Provider>
      );
}