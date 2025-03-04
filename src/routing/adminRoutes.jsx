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
import HostelDashboard from "../pages/dashboard/admin/hostel/dashboard";
import RoomManagementPage from "../pages/dashboard/admin/hostel/Rooms/roomManagementPage";
import ResidentManagementPage from "../pages/dashboard/admin/hostel/Residents/residentManagementPage";
import StaffManagementPage from "../pages/dashboard/admin/hostel/Staff/staffManagementPage";
import FeesManagementPage from "../pages/dashboard/admin/hostel/Fees/feesManagementPage";
import MaintenanceManagementPage from "../pages/dashboard/admin/hostel/Maintenance/maintenanceManagementpage";
import InventoryManagementPage from "../pages/dashboard/admin/hostel/Inventory/inventoryManagementpage";
import ComplaintManagementPage from "../pages/dashboard/admin/hostel/Complaints/complaintsManagementPage";
import ReportsManagementPage from "../pages/dashboard/admin/hostel/Reports/ReportsManagementPage";
import NotificationsManagementPage from "../pages/dashboard/admin/hostel/Notifications/notificationsManagementPage";
import SettingsManagementPage from "../pages/dashboard/admin/hostel/Settings/settingsManagementPage";

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
      <Route path="/hostel" element={<HostelDashboard />} />
      <Route path="/hostel-list" element={<HostelList />} />
      <Route path="/hostel-rooms" element={<HostelRooms />} />
      <Route path="/hostel-room-management" element={<RoomManagementPage />} />
      <Route path="/hostel-residents" element={<ResidentManagementPage />} />
      <Route path="/hostel-staff" element={<StaffManagementPage />} />
      <Route path="/hostel-fees" element={<FeesManagementPage />} />
      <Route
        path="/hostel-maintenance"
        element={<MaintenanceManagementPage />}
      />
      <Route path="/hostel-inventory" element={<InventoryManagementPage />} />
      <Route path="/hostel-complaints" element={<ComplaintManagementPage />} />
      <Route path="/hostel-reports" element={<ReportsManagementPage />} />
      <Route
        path="/hostel-notifications"
        element={<NotificationsManagementPage />}
      />
      <Route path="/hostel-settings" element={<SettingsManagementPage />} />
    </Routes>
  );
};

export default AdminRoutes;
