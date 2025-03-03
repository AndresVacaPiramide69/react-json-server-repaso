import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { loginUser } from "../../../services/user.service";

export default function Login() {
  const [ user, setUser ] = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  });

  const handleOnChange = (e) => {
    setFormData(({
        ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (formData.id.trim() === 0 || formData.password.trim() === 0) {
      return false;
    } else return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateForm) {
      alert("Error");
    }
    const data = await loginUser(formData);
    console.log(data)
    if(data.status === 200){
        setUser(data.id)
        alert('Bienvenido: ' + data.id)
        sessionStorage.setItem('user', JSON.stringify(data))
        setTimeout(() => {
            navigate('/tasks')
        }, 1000)
    }

  };

  return (
    <div className="flex justify-center">
      <div className="form-control w-[50%] flex justify-center gap-5">
        <input
          type="text"
          name="id"
          placeholder="nombre usuario"
          className="p-5 input input-primary"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          className="p-5 input input-primary"
          onChange={handleOnChange}
        />
        <button onClick={handleSubmit}  className="btn btn-primary">Iniciar sesion</button>
      </div>
    </div>
  );
}
