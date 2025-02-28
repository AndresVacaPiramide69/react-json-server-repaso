import { useEffect, useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [errors, setNewError] = useState({
    id: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const error = {};
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (user.email.trim().length === 0 || !emailRegex.test(user.email)) {
      error.email = "El email es requerido";
    }
    if (user.password.trim() === 0) {
      error.password = "La contraseña es requerida";
    }
    if (!user.id.trim().length === 0) {
      error.id = "El id es requerido";
    }
    setNewError(error);
  };

  const handleOnBlur = (e) => {
    validateForm();
  };

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nombre de usuario</span>
        </label>
        <input
          type="text"
          placeholder="john_doe"
          className="input input-bordered"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="id"
          required
        />
        <span className="label-text text-red-600">
          {errors.id ? errors.id : ""}
        </span>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="input input-bordered"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="input input-bordered"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          required
        />
      </div>
    </>
  );
}
