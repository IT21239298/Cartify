import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* <Feedback /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
