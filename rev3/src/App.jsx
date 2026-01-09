import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // form validation
  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    const validationError = validateForm();
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      setSubmittedData({ name, email, password });
      // clear the input fields after submit
      setName("");
      setEmail("");
      setPassword("");
      navigate("/form");
    } else {
      setSubmittedData;
    }
  };

  return (
    <Routes>
      {/* Page 1: Form input page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
              <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Attractive Form
              </h1>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <label className="block font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full border p-2 rounded mb-1 focus:outline-none focus:ring-2 transition text-black ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                )}

                {/* Email */}
                <label className="block font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border p-2 rounded mb-1 focus:outline-none focus:ring-2 transition text-black ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                )}

                {/* Password */}
                <label className="block font-medium mb-1 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border p-2 rounded mb-1 focus:outline-none focus:ring-2 transition text-black ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mb-2">{errors.password}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 mt-4 rounded-lg hover:scale-105 transition-transform"
                >
                  Submit
                </button>
              </form>

              {/* Display submitted data */}
              {submittedData && (
                <div className="mt-6 bg-gray-100 text-black p-4 rounded-lg border-l-4 border-blue-500">
                  <h2 className="font-semibold text-lg mb-2 text-black">
                    Submitted Data:
                  </h2>
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {submittedData.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {submittedData.email}
                  </p>
                  <p>
                    <span className="font-medium">Password:</span>{" "}
                    {submittedData.password}
                  </p>
                </div>
              )}
            </div>
          </div>
        }
      />

      {/* Page 2: Success page */}
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
