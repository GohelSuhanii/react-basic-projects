import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = () => {
    setLoggedIn(true);
    navigate("/login");
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* {loggedIn ? <Login /> : "please login first"}
            <button onClick={handleSubmit}>Login</button> */}

            {loggedIn && <Login />}
            {!loggedIn && <button onClick={handleSubmit}>Login</button>}
          </>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
