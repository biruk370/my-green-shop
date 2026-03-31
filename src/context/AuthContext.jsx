import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const [User, setUser] = useState()
    const login = (userData) => {
        const saveddata = localStorage.getItem("users");
        const Allusers = saveddata ? JSON.parse(saveddata) : [];
        const currentuser = Allusers.find(newuser => newuser.email == userData.email && newuser.password == userData.password)
        if (currentuser) {
            setUser(currentuser);
            localStorage.setItem("curent_user", JSON.stringify(currentuser));
            return true;
        }else {
            seterror("Email or Password error!");
            return false;
        }
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem("curent_user");
    }
    const RegisterUser = (user) => {
        const saveddata = localStorage.getItem("users");
        const Allusers = saveddata ? JSON.parse(saveddata) : [];
        const updatedUsers = [...Allusers, user];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("curent_user", JSON.stringify(user));
        setUser(user);
        navigate("/");
    }
    const changePassword = (user) => {
        const userdata = localStorage.getItem("users");
    }
    return (
        <AuthContext.Provider value={{ User, login, logout, RegisterUser, changePassword, error }}>
            {children}
        </AuthContext.Provider>
    )
} export const useAuth = () => useContext(AuthContext);