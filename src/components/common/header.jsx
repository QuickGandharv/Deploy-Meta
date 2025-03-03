import Searchbar from "../ui/Searchbar";
import Breadcrumb from "../ui/Breadcrumb";
import Iconsbutton from "../ui/Iconsbutton";
import Profile from "../ui/Profile";
import Notification from "../ui/notification";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiMoon } from "react-icons/pi";
import { AiOutlineExpand } from "react-icons/ai";
import { BsFullscreenExit } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-white-defaultw-full h-fit bg-white-default">
      <div className="flex flex-wrap justify-between items-center py-4 px-5">
        <div className="left-header">
          <Breadcrumb />
        </div>
        <div className="right-header">
          <div className="flex flex-wrap items-center gap-[10px]">
            <Searchbar placeholder="Search.." />
            <div className="relative group">
              <Iconsbutton icon={<IoNotificationsOutline />} />
              <Notification />
            </div>
            <Iconsbutton icon={<PiMoon />} />
            <Iconsbutton icon={<AiOutlineExpand />} />
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
