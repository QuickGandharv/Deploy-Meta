import { Outlet } from "react-router-dom";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import AdminSidebar from "../components/common/sidebar/adminSideBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Admin Sidebar  */}
      <AdminSidebar />

      {/* Content Area - Start */}
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="w-full py-4 px-5 min-h-[calc(100vh-150px)]">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
      {/* Content Area - End */}
    </div>
  );
};

export default AdminLayout;
