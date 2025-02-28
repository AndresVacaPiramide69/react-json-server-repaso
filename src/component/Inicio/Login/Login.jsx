export default function Login() {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="input input-bordered"
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
          required
        />
      </div>
    </>
  );
}
