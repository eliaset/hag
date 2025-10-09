import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router";
import Navigation from "./routes/Navigation/navigation.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<p>testing</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
