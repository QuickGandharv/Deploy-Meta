// import { NavLink } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// const SubSideNavLink = ({ id, href, text, icon, subLinks = [] }) => {
//   // const parentClass = `text-base font-medium leading-5 capitalize flex items-center justify-between px-5 py-3 transition-all ${
//   //   isStudent === "student"
//   //     ? "hover:bg-primary-100 hover:text-primary-default text-black-300"
//   //     : "hover:bg-primary-300"
//   // }`;

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
//           // className={({ isActive }) =>
//           //   `${parentClass} ${
//           //     isActive
//           //       ? isStudent === "student"
//           //         ? "bg-primary-100 text-primary-default"
//           //         : "bg-primary-300"
//           //       : "bg-transparent"
//           //   }`
//           // }
//         >
//           <div className="text-base font-medium leading-5 capitalize flex items-center pl-12 pr-5 py-3 transition-all">
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

// export default SubSideNavLink;

import { NavLink } from "react-router-dom";

const SubSideNavLink = ({ subLink = [] }) => {
  return (
    <ul className="relative before:content-[''] before:w-[1px] before:h-[calc(100%-12px)] before:bg-[#cbccceb3] before:absolute before:top-1.5 before:left-7">
      {subLink.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `transition duration-300 ease-in text-base font-medium leading-5 capitalize flex flex-wrap items-center px-5 pl-16 py-2 text-center 
                ${
                  isActive ? "text-white-default" : "text-[#CBCCCEB2]"
                } hover:text-white-default relative
                before:content-[''] before:absolute before:top-2/4 before:left-11 before:w-[5px] before:h-[5px] before:rounded-full before:-translate-y-1/2 ${
                  isActive ? "before:bg-[#fff]" : "before:bg-[#cbccceb3]"
                } 
                after:content-[''] after:absolute after:top-[48%] after:left-7 after:w-4 after:border-t after:border-solid ${
                  isActive ? "after:border-[#fff]" : "after:border-[#cbccceb3]"
                }`
              }
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubSideNavLink;
