import SideNavLink from "../../../ui/SideNavLink";
import { Link } from "react-router-dom";
import Badge from "../../../ui/Badge";
import {
  FaBell,
  FaChartBar,
  FaFileAlt,
  FaHome,
  FaHotel,
  FaTools,
} from "react-icons/fa";
import SubSideNavLink from "../../../ui/SubSideNavLink";
import { useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosWarning,
} from "react-icons/io";
import { IoBedSharp, IoDocuments } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineCurrencyRupee, MdOutlineSettings } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaGears } from "react-icons/fa6";
import { LiaHotelSolid } from "react-icons/lia";

const HostelSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavItems = [
    {
      text: "Back to Dashboard",
      icon: <IoIosArrowBack />,
      href: "/admin",
    },
    {
      text: "Hostel",
      href: "/admin/hostel",
      icon: <FaHotel />,
    },
    {
      text: "Rooms",
      icon: <IoBedSharp />,
      href: "/admin/hostel/rooms",
    },
    {
      text: "Residents",
      icon: <HiMiniUserGroup />,
      href: "/admin/hostel/residents",
    },
    {
      text: "Staff",
      icon: <GrUserWorker />,
      href: "/admin/hostel/staff",
    },
    {
      text: "Fees",
      icon: <MdOutlineCurrencyRupee />,
      href: "/admin/hostel/fees",
    },
    {
      text: "Maintenance",
      icon: <FaTools />,
      href: "/admin/hostel/maintenance",
    },
    {
      text: "Inventory",
      icon: <CiBoxList />,
      href: "/admin/hostel/inventory",
    },
    {
      text: "Complaints",
      icon: <IoIosWarning />,
      href: "/admin/hostel/complaints",
    },
    {
      text: "Reports",
      icon: <CiBoxList />,
      href: "/admin/hostel/reports",
    },
    {
      text: "Notifications",
      icon: <FaBell />,
      href: "/admin/hostel/notifications",
    },
    {
      text: "Settings",
      icon: <MdOutlineSettings />,
      href: "/admin/hostel/settings",
    },
  ];

  return (
    <>
      <div className="pb-10">
        <Badge text="Hostel" />
        <ul>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <SideNavLink
                  text={item.text}
                  icon={item.icon}
                  href={item.href}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HostelSidebar;

// const hostelLinks = [
//   { href: "/admin/hostel-list", text: "Hostel List" },
//   { href: "/admin/hostel-rooms", text: "Hostel Rooms" },
// ];

{
  /* <li>
            <SideNavLink text="Dashboard" icon={<FaHome />} href="/admin" />
          </li> */
}
{
  /* <li>
            <SideNavLink text="Hostel" icon={<FaChartBar />} />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Rooms"
              icon={<IoBedSharp />}
              href="/admin/hostel-room-management"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Residents"
              icon={<HiMiniUserGroup />}
              href="/admin/hostel-residents"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Staff"
              icon={<GrUserWorker />}
              href="/admin/hostel-staff"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Fees"
              icon={<MdOutlineCurrencyRupee />}
              href="/admin/hostel-fees"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Maintenance"
              icon={<FaTools />}
              href="/admin/hostel-maintenance"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Inventory"
              icon={<CiBoxList />}
              href="/admin/hostel-inventory"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Complaints"
              icon={<IoIosWarning />}
              href="/admin/hostel-complaints"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Reports"
              icon={<FaChartBar />}
              href="/admin/hostel-reports"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Notifications"
              icon={<FaBell />}
              href="/admin/hostel-notifications"
            />
          </li> */
}
{
  /* <li>
            <SideNavLink
              text="Settings"
              icon={<FaGears />}
              href="/admin/hostel-settings"
            />
          </li> */
}
