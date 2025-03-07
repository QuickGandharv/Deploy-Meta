// import { IoIosArrowForward } from "react-icons/io";
// import { NavLink } from "react-router-dom";

// const SideNavLink = ({
//   href,
//   text,
//   icon,
//   arrowicon,
//   className,
//   spanclass,
//   id,
// }) => {
//   return (
//     <NavLink
//       to={href}
//       id={id}
//       className={`text-base font-medium leading-5 capitalize flex flex-wrap items-center justify-between px-5 pt-3 pb-4 hover:bg-primary-300 group ${className}`}
//     >
//       <div className="flex items-center">
//         <span className={`text-xl font-medium mr-3.5 ${spanclass}`}>
//           {icon}
//         </span>
//         {text}
//       </div>
//       <span className="group-hover:rotate-90">{arrowicon}</span>
//     </NavLink>
//   );
// };

// export default SideNavLink;

// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import SubSideNavLink from "./SubSideNavLink";
// // import { UserContext } from "../../../context/UserContext";
// // import { useContext } from "react";

// const SideNavLink = ({ id, href, text, icon, subLinks = [] }) => {
//   const { userData } = useContext(UserContext);
//   const isStudent = userData.role;

//   const location = useLocation();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     if (subLinks.length) {
//       setDropdownOpen((prevState) => !prevState);
//     }
//   };

//   useEffect(() => {
//     if (subLinks.some((link) => link.href === location.pathname)) {
//       setDropdownOpen(true);
//     } else {
//       setDropdownOpen(false);
//     }
//   }, [location]);

//   const parentClass = `text-base font-medium leading-5 capitalize flex items-center justify-between px-5 py-3 transition-all ${
//     isStudent === "student"
//       ? "hover:bg-primary-100 hover:text-primary-default text-black-300"
//       : "hover:bg-primary-300"
//   }`;

//   return (
//     <>
//       {subLinks.length ? (
//         <div
//           className={`cursor-pointer ${parentClass} ${
//             isDropdownOpen ? "bg-primary-300 mb-2.5" : "bg-transparent mb-0"
//           }`}
//           onClick={handleDropdownToggle}
//         >
//           <div className="flex items-center">
//             <span className="text-xl font-medium mr-3.5">{icon}</span>
//             {text}
//           </div>
//           {subLinks.length > 0 && (
//             <span className={`${isDropdownOpen ? "rotate-90" : "rotate-0"}`}>
//               <IoIosArrowForward />
//             </span>
//           )}
//         </div>
//       ) : (
//         <NavLink
//           to={href}
//           id={id}
//           end
//           className={({ isActive }) =>
//             `${parentClass} ${
//               isActive
//                 ? isStudent === "student"
//                   ? "bg-primary-100 text-primary-default"
//                   : "bg-primary-300"
//                 : "bg-transparent"
//             }`
//           }
//         >
//           <div className="flex items-center">
//             <span className="text-xl font-medium mr-3.5">{icon}</span>
//             {text}
//           </div>
//           {subLinks.length > 0 && (
//             <span className={`${isDropdownOpen ? "rotate-90" : "rotate-0"}`}>
//               <IoIosArrowForward />
//             </span>
//           )}
//         </NavLink>
//       )}

//       {subLinks.length > 0 && isDropdownOpen && (
//         <SubSideNavLink subLink={subLinks} />
//       )}
//     </>
//   );
// };

// export default SideNavLink;

import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import SubSideNavLink from "./SubSideNavLink";

const SideNavLink = ({ id, href, text, icon, subLinks = [], isStudent }) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    if (subLinks.length) {
      setDropdownOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (subLinks.some((link) => link.href === location.pathname)) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }, [location, subLinks]);

  const parentClass = `text-base font-medium leading-5 capitalize flex items-center justify-between px-5 py-3 transition-all ${
    isStudent === "student"
      ? "hover:bg-primary-100 hover:text-primary-default text-black-300"
      : "hover:bg-primary-300"
  }`;

  return (
    <>
      {subLinks.length ? (
        <div
          className={`cursor-pointer ${parentClass} ${
            isDropdownOpen ? "bg-primary-300 mb-2.5" : "bg-transparent mb-0"
          }`}
          onClick={handleDropdownToggle}
        >
          <div className="flex items-center">
            <span className="text-xl font-medium mr-3.5">{icon}</span>
            {text}
          </div>
          {subLinks.length > 0 && (
            <span className={`${isDropdownOpen ? "rotate-90" : "rotate-0"}`}>
              <IoIosArrowForward />
            </span>
          )}
        </div>
      ) : (
        <NavLink
          to={href}
          id={id}
          end
          className={({ isActive }) =>
            `${parentClass} ${
              isActive
                ? isStudent === "student"
                  ? "bg-primary-100 text-primary-default"
                  : "bg-primary-300"
                : "bg-transparent"
            }`
          }
        >
          <div className="flex items-center">
            <span className="text-xl font-medium mr-3.5">{icon}</span>
            {text}
          </div>
          {subLinks.length > 0 && (
            <span className={`${isDropdownOpen ? "rotate-90" : "rotate-0"}`}>
              <IoIosArrowForward />
            </span>
          )}
        </NavLink>
      )}

      {subLinks.length > 0 && isDropdownOpen && (
        <SubSideNavLink subLink={subLinks} />
      )}
    </>
  );
};

export default SideNavLink;
