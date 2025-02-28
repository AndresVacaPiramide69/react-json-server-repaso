import { createContext, useState, useContext } from "react";

//Creamos el contexto del usuario
const UserContext = createContext();

//Hook personalizado para acceder fácilmente al contexto
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext debe usarse dentro de un UserProvider");
    }
    return context; // Devuelve [user, setUser]
};

//Proveedor que envuelve la aplicación y proporciona el estado global del usuario
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado global del usuario

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children} {/* Renderiza todos los componentes hijos dentro del proveedor */}
        </UserContext.Provider>
    );
};