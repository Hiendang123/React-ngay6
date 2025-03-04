import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/EX1/Home";
import Contact from "./pages/EX1/Contact";
import About from "./pages/EX1/About";
import UseDetails from "./pages/EX2/UseDetails";
import Login from "./pages/EX3/Login";
import Dashboard from "./pages/EX3/Dashboard";

function App() {
  return (
    <>
      <div className="app">
        <nav>
          <ul className="flex gap-8 text-5xl p-4 bg-gray-200">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<UseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
