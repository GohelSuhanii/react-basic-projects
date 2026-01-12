import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
