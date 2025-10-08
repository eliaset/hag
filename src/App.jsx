import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router";
import { useState } from "react";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
