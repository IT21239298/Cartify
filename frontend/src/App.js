import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home/Home";
import PrimaryHeader from "./components/PrimaryHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Seller from "./pages/Seller";
import Customer from "./pages/Customer";

function App() {
  return (
    <BrowserRouter>
     <PrimaryHeader />
      <SecondaryHeader />
      <div className="margin-top:20px">
        {" "}
        {/* Apply margin top to the content after the Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
