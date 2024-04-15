import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext({
  isAuthenticated: false,
  idUser: "",
  saveUser: () => {},
  user: {},
  loginUser: () => {},
  getUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("idUser"));
    if (idUser) {
      setIdUser(idUser);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (idUser) {
      getUser();
    }
  }, [idUser]);

  const saveUser = (id) => {
    setIdUser(id);
    setIsAuthenticated(true);
    localStorage.setItem("idUser", JSON.stringify(id));
  };

  const loginUser = (id) => {
    setIdUser(id);
    setIsAuthenticated(true);
    localStorage.setItem("idUser", JSON.stringify(id));
  };

  const getUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/users/${idUser}`);
    localStorage.setItem("user", JSON.stringify(res.data));
    setUser(res.data);
  };

  const logout = () => {
    setIdUser("");
    setIsAuthenticated(false);
    localStorage.removeItem("idUser");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        idUser,
        saveUser,
        user,
        loginUser,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => useContext(AuthContext);
