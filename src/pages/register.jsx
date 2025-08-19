import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí conectas con tu backend
      const res = await axios.post("http://localhost:3000/api/register", formData);
      console.log("Registro exitoso:", res.data);
      alert("Cuenta creada en MultyCompany ✅");
    } catch (error) {
      console.error(error);
      alert("Error en el registro ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-600">
          Crear cuenta en MultyCompany
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
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
            Registrarse
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          ¿Ya tienes cuenta?
        </p>
        <Link to="/">
          <button
            className="w-full mt-2 border border-gray-400 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Inicia sesión en MultyCompany
          </button>
        </Link>
      </div>
    </div>
  );
}
