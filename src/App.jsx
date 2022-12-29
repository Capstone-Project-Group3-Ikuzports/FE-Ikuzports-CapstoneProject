import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AddNewClub from "./pages/Club/AddNewClub";
import ClubJoin from "./pages/Club/ClubJoin";
import ClubList from "./pages/Club/ClubList";
import DetailClub from "./pages/Club/DetailClub";
import EditClub from "./pages/Club/EditClub";
import Myclub from "./pages/Club/Myclub";
import DetailEvent from "./pages/DetailEvent";
import Home from "./pages/Home";
import DetailStore from "./pages/Product/DetailStore";
import MyProduct from "./pages/Product/MyProduct";
import Store from "./pages/Product/Store";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailevent" element={<DetailEvent />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detailstore" element={<DetailStore />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/myclub" element={<Myclub />} />
        <Route path="/editclub" element={<EditClub />} />
        <Route path="/detailclub" element={<DetailClub />} />
        <Route path="/addnewclub" element={<AddNewClub />} />
        <Route path="/clublist" element={<ClubList />} />
        <Route path="/clubjoin" element={<ClubJoin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
