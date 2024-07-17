import { Routes, Route } from "react-router-dom";

import { Home } from "../page/home";
import { Details } from "../page/details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
  );
}
