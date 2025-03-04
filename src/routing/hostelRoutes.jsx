import { Route, Routes } from "react-router-dom";
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

const HostelRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HostelDashboard />} />
      {/* <Route path="/hostel-list" element={<HostelList />} /> */}
      {/* <Route path="/hostel-rooms" element={<HostelRooms />} /> */}
      <Route path="rooms" element={<RoomManagementPage />} />
      <Route path="residents" element={<ResidentManagementPage />} />
      <Route path="staff" element={<StaffManagementPage />} />
      <Route path="fees" element={<FeesManagementPage />} />
      <Route path="maintenance" element={<MaintenanceManagementPage />} />
      <Route path="inventory" element={<InventoryManagementPage />} />
      <Route path="complaints" element={<ComplaintManagementPage />} />
      <Route path="reports" element={<ReportsManagementPage />} />
      <Route path="notifications" element={<NotificationsManagementPage />} />
      <Route path="settings" element={<SettingsManagementPage />} />
    </Routes>
  );
};

export default HostelRoutes;
