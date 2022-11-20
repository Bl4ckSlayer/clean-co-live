import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/PublicRoute";

import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import PrivateRoute from "./authentication/PrivateRoute";

import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./authentication/AdminRoute";

import { AdminRoutes } from "./routes/AdminRoutes";
import AddServices from "./dashboard/AddServices";
import AddAdmin from "./dashboard/AddAdmin";
import OverView from "./dashboard/OverView";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        <Route element={<PrivateRoute />}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}>
              <Route path="overview" element={<OverView></OverView>}></Route>
              <Route
                path="add-service"
                element={<AddServices></AddServices>}
              ></Route>
              <Route path="add-admin" element={<AddAdmin></AddAdmin>}></Route>
            </Route>
          ))}
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
