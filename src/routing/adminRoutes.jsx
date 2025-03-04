import { Route, Routes } from "react-router-dom";
import Home from "../pages/dashboard/admin/home/index";
import AddCourseForm from "../pages/dashboard/admin/course_Management/forms/addCourseForm";
import AllClasses from "../pages/dashboard/admin/classes";
import AllClassesForm from "../pages/dashboard/admin/classes/forms/allClassesForm";
import AllCoursesForm from "../pages/dashboard/admin/course_Management/forms/allCoursesForm";
import Faculity from "../pages/dashboard/admin/faculity";
import Password from "../pages/dashboard/admin/password";
import HostelList from "../pages/dashboard/admin/hostel/hostel-Forms/hostelList";
import HostelRooms from "../pages/dashboard/admin/hostel/hostel-Forms/hostel-rooms";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-courses" element={<AddCourseForm />} />
      <Route path="/all-courses" element={<AllCoursesForm />} />
      <Route path="/add-new-class" element={<AllClasses />} />
      <Route path="/All-classes" element={<AllClassesForm />} />
      <Route path="/faculity" element={<Faculity />} />
      <Route path="/password" element={<Password />} />
      <Route path="/hostel-list" element={<HostelList />} />
      <Route path="/hostel-rooms" element={<HostelRooms />} />
    </Routes>
  );
};

export default AdminRoutes;
