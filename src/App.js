import React from "react";
import './App.css';
import Categories from "./Categories/Categories";
import Units from "./Units/Units";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import ResourceRoutes from "./Resources/ResourceRoutes";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/resources/*" element={<ResourceRoutes/>}/>
              <Route path="/categories" element={<Categories/>}/>
              <Route path="/units" element={<Units/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
      </div>
  );
}

export default App;