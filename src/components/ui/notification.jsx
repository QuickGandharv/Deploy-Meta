import { RxCross2 } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { RiZzzFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import Button from "../../components/ui/Button";

const Notification = () => {
  return (
    <div className="invisible opacity-0 translate-y-[30px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-white-default absolute shadow-md w-80 top-12 -right-5 rounded-md z-50 ease-linear duration-300">
      <ul className="transition-all text-black-default">
        <div className="border-dotted border-b-2 px-5 py-3.5">
          <h1 className="text-black-default text-center text-xl font-medium">
            Notifications
          </h1>
        </div>
        <>
          <li className="mx-4">
            <div className="flex items-center gap-4 py-3 px-4 my-3 bg-white-300 rounded-md justify-between">
              <div className="flex gap-2.5">
                <span className="bg-purple-100 p-2 rounded-full self-center">
                  <MdNotifications size={20} className="text-purple-default" />
                </span>
                <div>
                  <p className="text-base font-medium text-black-default uppercase">
                    Notification -1
                  </p>
                  <span className="text-sm break-all text-black-200 line-clamp-1">
                    Hello Students .....
                  </span>
                </div>
              </div>
              <span className="text-black-default cursor-pointer">
                <RxCross2 />
              </span>
            </div>
          </li>

          <div className="m-4">
            <Button
              text="View All"
              classname="w-full [&]:bg-primary-300 [&]:py-2"
            />
          </div>
        </>
      </ul>
    </div>
  );
};

export default Notification;
