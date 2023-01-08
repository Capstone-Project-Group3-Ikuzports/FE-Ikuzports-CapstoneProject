import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Baru/Loading";
import "./index.css";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import AddNewClub from "./pages/Club/AddNewClub";
// import ClubJoin from "./pages/Club/ClubJoin";
// import ClubList from "./pages/Club/ClubList";
// import DetailClub from "./pages/Club/DetailClub";
// import EditClub from "./pages/Club/EditClub";
// import Myclub from "./pages/Club/Myclub";
// import DetailEvent from "./pages/DetailEvent";
// import Home from "./pages/Home";
// import DetailStore from "./pages/Product/DetailStore";
// import MyProduct from "./pages/Product/MyProduct";
// import Store from "./pages/Product/Store";
// import Profile from "./pages/Profile";

const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const AddNewClub = lazy(() => import("./pages/Club/AddNewClub"));
const ClubJoin = lazy(() => import("./pages/Club/ClubJoin"));
const ClubList = lazy(() => import("./pages/Club/ClubList"));
const DetailClub = lazy(() => import("./pages/Club/DetailClub"));
const EditClub = lazy(() => import("./pages/Club/EditClub"));
const Myclub = lazy(() => import("./pages/Club/Myclub"));
const DetailEvent = lazy(() => import("./pages/DetailEvent"));
const Home = lazy(() => import("./pages/Home"));
const DetailStore = lazy(() => import("./pages/Product/DetailStore"));
const Store = lazy(() => import("./pages/Product/Store"));
const Profile = lazy(() => import("./pages/Profile"));
const MyProduct = lazy(() => import("./pages/Product/MyProduct"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/detailevent" element={<DetailEvent />} />
          <Route path="/detailstore" element={<DetailStore />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/clublist" element={<ClubList />} />
          <Route path="/myproduct" element={<MyProduct />} />
          <Route path="/myclub" element={<Myclub />} />
          <Route path="/editclub" element={<EditClub />} />
          <Route path="/detailclub" element={<DetailClub />} />
          <Route path="/addnewclub" element={<AddNewClub />} />
          <Route path="/clubjoin" element={<ClubJoin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
