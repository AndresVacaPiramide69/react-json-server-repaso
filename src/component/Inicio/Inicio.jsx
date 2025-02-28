import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
export default function Inicio() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="h-[90vh] flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center mb-4">
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </h2>

            {!isLogin ? (
                <Register/>
            ):(
                <Login/>
            )}

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                {isLogin ? "Iniciar sesión" : "Registrarse"}
              </button>
            </div>

          <div className="text-center mt-4">
            <button onClick={toggleForm} className="link link-primary text-sm">
              {isLogin
                ? "¿No tienes cuenta? Regístrate aquí"
                : "¿Ya tienes cuenta? Inicia sesión aquí"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
