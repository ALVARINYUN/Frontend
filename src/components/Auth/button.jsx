// src/components/Auth/Button.jsx
export default function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition duration-200"
    >
      {children}
    </button>
  );
}
