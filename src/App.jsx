import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>npm run dev
        {/* Página principal = Login */}
        <Route path="/" element={<login />} />

        {/* Aquí podemos agregar más rutas después */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
