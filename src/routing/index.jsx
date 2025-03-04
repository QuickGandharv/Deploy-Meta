import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";
import AdminRoutes from "./adminRoutes";
import MainHome from "../pages/home";
import HostelRoutes from "./hostelRoutes";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/admin/hostel/*" element={<HostelRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
