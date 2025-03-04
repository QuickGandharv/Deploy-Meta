import AdminSidebar from "./Default";
import HostelSidebar from "./hostelSidebar";
import { Link, useLocation } from "react-router-dom";

const MainSidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar max-w-[252px] w-full bg-primary-default shadow-side-Shadow overflow-y-scroll h-screen">
      <div className="p-5">
        <Link to="/admin">
          <img
            className="object-contain object-center"
            src="/assets/images/logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      {location.pathname.includes("/hostel") ? (
        <HostelSidebar />
      ) : (
        <AdminSidebar />
      )}
    </aside>
  );
};

export default MainSidebar;
