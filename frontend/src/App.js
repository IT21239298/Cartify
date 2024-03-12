import Login from "./pages/Login";
import Register from "./pages/Register";
import Item from "./pages/seller/Item";
import Selleritem from "./pages/seller/Selleritem";
import UpdateItem from "./pages/seller/UpdateItem";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/item" element={<Item />} />
        <Route path="/selleritem" element={<Selleritem />} />
        <Route path="/UpdateItem/:id/edit" element={<UpdateItem />} />

        {/* <Feedback /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
