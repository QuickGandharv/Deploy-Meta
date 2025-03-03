import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { SlLogout } from "react-icons/sl";
import DropdownLinkBox from "./DropdownLinkBox";

const Profile = () => {
  const LinkLists = [
    {
      title: "Account",
      path: "/admin/my-account",
      icon: AiOutlineUser,
    },
    {
      title: "Notifications",
      path: "/admin/notifications",
      icon: GoBell,
    },
  ];

  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center flex-wrap gap-2.5">
        <img
          className="w-8 h-8 rounded-full object-contain"
          src={"/assets/avatars/user.png"}
          alt="User"
        />
        <div>
          <h5 className="text-black-default font-medium leading-5">
            Gourav Sharma
          </h5>
          <p className="text-sm font-normal text-black-200 flex items-center">
            UI Designer
            <span className="text-xl">
              <RiArrowDownSLine />
            </span>
          </p>
        </div>
      </div>
      <DropdownLinkBox
        lists={LinkLists}
        buttonItem={
          <li>
            <button className="flex flex-wrap items-center gap-[10px] p-2.5 group/item">
              <SlLogout className="group-hover/item:text-primary-default rotate-180 ml-[3px]" />
              <span className="text-base font-medium text-black-300 group-hover/item:text-primary-default">
                Logout
              </span>
            </button>
          </li>
        }
      />
    </div>
  );
};

export default Profile;
