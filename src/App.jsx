import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/Authentication.component";
import { Routes, Route } from "react-router";
import Navigation from "./routes/Navigation/navigation.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
