import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Store from "./pages/Product/Store";
import DetailEvent from "./pages/DetailEvent";
import MyProduct from "./pages/Product/MyProduct";
import DetailStore from "./pages/Product/DetailStore";
import AddNewClub from "./pages/Club/AddNewClub";
import ClubNonJoin from "./pages/Club/ClubNonJoin";
import ClubJoin from "./pages/Club/ClubJoin";
import MyClub from "./pages/Club/Myclub";
import EditClub from "./pages/Club/EditClub";
import DetailClub from "./pages/Club/DetailClub";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailevent" element={<DetailEvent />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detailstore" element={<DetailStore />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/myclub" element={<MyClub />} />
        <Route path="/editclub" element={<EditClub />} />
        <Route path="/detailclub" element={<DetailClub />} />
        <Route path="/addnewclub" element={<AddNewClub />} />
        <Route path="/clubnonjoin" element={<ClubNonJoin />} />
        <Route path="/clubjoin" element={<ClubJoin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
