import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);
      console.log("Login exitoso:", res.data);
      alert("Bienvenido a MultyCompany 🚀");
    } catch (error) {
      console.error(error);
      alert("Error en el inicio de sesión ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-600">
          MultyCompany
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500"
              placeholder="ejemplo@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          ¿Eres nuevo en MultyCompany?
        </p>
        <Link to="/register">
          <button className="w-full mt-2 border border-gray-400 py-2 rounded-lg hover:bg-gray-100 transition">
            Crear tu cuenta en MultyCompany
          </button>
        </Link>
      </div>
    </div>
  );
}
