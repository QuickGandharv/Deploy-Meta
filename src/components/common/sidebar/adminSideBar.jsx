import SideNavLink from "../../ui/SideNavLink";
import { Link } from "react-router-dom";
import Badge from "../../ui/Badge";
import { FaChartBar, FaFileAlt, FaHome } from "react-icons/fa";
import SubSideNavLink from "../../ui/SubSideNavLink";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const AdminSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const applicationLinks = [
    { href: "/admin/applications", text: "All Applications" },
    { href: "/admin/add-new", text: "Add New" },
  ];

  const coursesLinks = [
    { href: "/admin/all-courses", text: "All Courses" },
    { href: "/admin/add-new-courses", text: "Add New Course" },
  ];

  const ClassesLinks = [
    { href: "/admin/all-classes", text: "All Classes" },
    { href: "/admin/add-new-Class", text: "Add New Class" },
  ];

  const faculityLinks = [{ href: "/admin/faculity", text: "Add New Member" }];

  const transportLinks = [
    { href: "/admin/transport", text: "Transport Information" },
  ];

  const hostelLinks = [{ href: "/admin/hostel", text: "Hostel Information" }];

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
      <div className="pb-10">
        <Badge text="Main" />
        <ul>
          <li>
            <SideNavLink href="/admin" text="Dashboards" icon={<FaHome />} />
          </li>
          <li>
            <SideNavLink
              text="Courses"
              icon={<FaChartBar />}
              subLinks={coursesLinks}
            />
          </li>
          <li>
            <SideNavLink
              text="Classes"
              icon={<FaChartBar />}
              subLinks={ClassesLinks}
            />
          </li>
          <li>
            <SideNavLink
              text="Faculity"
              icon={<FaChartBar />}
              subLinks={faculityLinks}
            />
          </li>
          <li>
            <SideNavLink
              text="Transport"
              icon={<FaChartBar />}
              subLinks={transportLinks}
            />
          </li>
          <li>
            <SideNavLink
              text="Hostel"
              icon={<FaChartBar />}
              subLinks={hostelLinks}
            />
          </li>
          <li>
            <SideNavLink
              text="Password"
              href="/admin/password"
              icon={<FaChartBar />}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
