import { Route, Routes } from "react-router-dom";
import HostelDashboard from "../pages/dashboard/admin/hostel/dashboard";
import RoomManagementPage from "../pages/dashboard/admin/hostel/Rooms/roomManagementPage";
import ResidentManagementPage from "../pages/dashboard/admin/hostel/Residents/residentManagementPage";
import StaffManagementPage from "../pages/dashboard/admin/hostel/Staff/staffManagementPage";
import FeesManagementPage from "../pages/dashboard/admin/hostel/Fees/feesManagementPage";
import MaintenanceManagementPage from "../pages/dashboard/admin/hostel/Maintenance/maintenanceManagementpage";
import InventoryManagementPage from "../pages/dashboard/admin/hostel/Inventory/inventoryManagementPage";
import ComplaintManagementPage from "../pages/dashboard/admin/hostel/Complaints/complaintsManagementPage";
import ReportsManagementPage from "../pages/dashboard/admin/hostel/Reports/ReportsManagementPage";
import NotificationsManagementPage from "../pages/dashboard/admin/hostel/Notifications/notificationsManagementPage";
import SettingsManagementPage from "../pages/dashboard/admin/hostel/Settings/settingsManagementPage";
import BuildingsManagementPage from "../pages/dashboard/admin/hostel/Buildings/buildingsManagementPage";

const HostelRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HostelDashboard />} />
      <Route path="/rooms" element={<RoomManagementPage />} />
      <Route path="/buildings" element={<BuildingsManagementPage />} />
      <Route path="/residents" element={<ResidentManagementPage />} />
      <Route path="/staff" element={<StaffManagementPage />} />
      <Route path="/fees" element={<FeesManagementPage />} />
      <Route path="/maintenance" element={<MaintenanceManagementPage />} />
      <Route path="/inventory" element={<InventoryManagementPage />} />
      <Route path="/complaints" element={<ComplaintManagementPage />} />
      <Route path="/reports" element={<ReportsManagementPage />} />
      <Route path="/notifications" element={<NotificationsManagementPage />} />
      <Route path="/settings" element={<SettingsManagementPage />} />
    </Routes>
  );
};

export default HostelRoutes;
