import SideNavLink from "../../../ui/SideNavLink";
import { Link } from "react-router-dom";
import Badge from "../../../ui/Badge";
import {
  FaBook,
  FaChartBar,
  FaFileAlt,
  FaHome,
  FaHotel,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import SubSideNavLink from "../../../ui/SubSideNavLink";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import HostelSidebar from "./hostelSidebar";
import { LiaHotelSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";

const AdminSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavItems = [
    {
      text: "Dashboards",
      href: "/admin",
      icon: <FaHome />,
    },
    {
      text: "Courses",
      icon: <FaBook />,
      subLinks: [
        { href: "/admin/all-courses", text: "All Courses" },
        { href: "/admin/add-new-courses", text: "Add New Course" },
      ],
    },
    {
      text: "Classes",
      icon: <IoSchoolSharp />,
      subLinks: [
        { href: "/admin/all-classes", text: "All Classes" },
        { href: "/admin/add-new-Class", text: "Add New Class" },
      ],
    },
    {
      text: "Faculty",
      icon: <FaUserGraduate />,
      subLinks: [{ href: "/admin/faculity", text: "Add New Member" }],
    },
    {
      text: "Password",
      href: "/admin/password",
      icon: <RiLockPasswordFill />,
    },
    {
      text: "Hostel",
      icon: <FaHotel />,
      href: "/admin/hostel",
    },
    {
      text: "Users",
      icon: <FaUsers />,
      subLinks: [
        { href: "/admin/all-users", text: "All Users" },
        { href: "/admin/add-new-user", text: "Add New User" },
        { href: "/admin/user-roles", text: "Roles" },
        { href: "/admin/user-permissions", text: "Permissions" },
        { href: "/admin/user-leaves", text: "Leaves" },
      ],
    },
  ];

  return (
    <>
      <div className="pb-10">
        <Badge text="Main" />
        <ul>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <SideNavLink
                  text={item.text}
                  href={item.href}
                  icon={item.icon}
                  subLinks={item.subLinks}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;

// AdminSidebar == default sidebar

{
  /* <li>
            <SideNavLink href="/admin" text="Dashboards" icon={<FaHome />} />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Courses"
              icon={<FaChartBar />}
              subLinks={coursesLinks}
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Classes"
              icon={<FaChartBar />}
              subLinks={ClassesLinks}
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Faculity"
              icon={<FaChartBar />}
              subLinks={faculityLinks}
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Password"
              href="/admin/password"
              icon={<FaChartBar />}
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Hostel"
              icon={<FaChartBar />}
              href="/admin/hostel"
            />
          </li> */
}

// const applicationLinks = [
//   { href: "/admin/applications", text: "All Applications" },
//   { href: "/admin/add-new", text: "Add New" },
// ];

// const coursesLinks = [
//   { href: "/admin/all-courses", text: "All Courses" },
//   { href: "/admin/add-new-courses", text: "Add New Course" },
// ];

// const ClassesLinks = [
//   { href: "/admin/all-classes", text: "All Classes" },
//   { href: "/admin/add-new-Class", text: "Add New Class" },
// ];

// const faculityLinks = [{ href: "/admin/faculity", text: "Add New Member" }];
