import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const formRef = useRef(null); // Reference for the form element

  useEffect(() => {
    const form = formRef.current;

    if (!form) return; // Ensure the form exists before adding an event listener

    const handleSubmit = async (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("adminToken", data.token);
        window.location.href = "/dashboard.html"; // Redirect to dashboard
      } else {
        document.getElementById("errorMessage").classList.remove("hidden");
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md md:w-1/3 w-100">
        <h2 className="text-2xl font-bold text-center text-blue-800">Yappari Admin Login</h2>
        <p className="text-gray-600 text-center mt-2">Please fill in your unique admin login details below</p>

        <form ref={formRef} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your admin email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your admin password"
              required
            />
          </div>

          <div className="text-right mb-4">
            <a href="#" className="text-gray-500 hover:underline">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <p id="errorMessage" className="text-red-500 text-center mt-4 hidden">
          Invalid email or password.
        </p>
      </div>
    </div>
  );
}

export default App;
