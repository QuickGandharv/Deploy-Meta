import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";
import AdminRoutes from "./adminRoutes";
import MainHome from "../pages/home";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
