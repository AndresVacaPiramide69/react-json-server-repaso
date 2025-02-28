import { useUserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router";

export default function Navbar() {

    const { user, setUser } = useUserContext();
  
    const handleLogout = () => {
      setUser(null);
      sessionStorage.removeItem("user");
    };
  
    return (
      <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            MiApp
          </Link>
        </div>
        
        <div className="flex-none gap-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                    <span>{user.email[0]?.toUpperCase()}</span>
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/profile" className="justify-between">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-primary">
                Iniciar sesión
              </Link>
              <Link to="/register" className="btn btn-outline">
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
  