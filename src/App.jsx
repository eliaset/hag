import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/SignIn.component";
import { Routes, Route } from "react-router";
import Navigation from "./routes/Navigation/navigation.component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
