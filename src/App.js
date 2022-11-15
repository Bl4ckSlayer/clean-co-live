import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/PublicRoute";
import "./App.css";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component, index }) => (
          <Route path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
