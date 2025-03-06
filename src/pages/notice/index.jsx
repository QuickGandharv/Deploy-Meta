import { RxCross2 } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { RiZzzFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import Button from "../../components/ui/Button";
import { CiCalendarDate, CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import SelectField from "../../components/forms/selectField";
import { FaSortAmountDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import NewMessage from "./popup/newMessage";
import { useState } from "react";

const Notice = () => {
  const Notice = [
    {
      id: 1,
      title: "Classes Preparation",
      date: "24 May 2024",
    },
    {
      id: 2,
      title: "Fee Reminder",
      date: "15 April 2024",
    },
    {
      id: 3,
      title: "New Course Offerings",
      date: "10 March 2024",
    },
    {
      id: 4,
      title: "Parents Teacher Meeting",
      date: "05 February 2024",
    },
    {
      id: 5,
      title: "New Academic Session For Addmission (2024-25)",
      date: "01 January 2024",
    },
    {
      id: 6,
      title: "Staff Meeting",
      date: "01 January 2024",
    },
    {
      id: 7,
      title: "World Environment Day Program.......!!!",
      date: "01 January 2024",
    },
    {
      id: 8,
      title: "New Syllabus Instructions",
      date: "01 January 2024",
    },
  ];

  const [addMessage, setAddMessage] = useState(false);

  return (
    <div className="bg-white-default shadow-lg rounded-md w-full px-2.5 py-5">
      <div className="flex justify-between items-center mb-9 px-5">
        <h2 id="usersList" className="text-black-default capitalize">
          Users List
        </h2>
        <div className="flex items-center gap-2.5">
          <Button
            classname="flex gap-1 items-center text-base [&]:px-2.5 [&]:py-2 [&]:rounded-full"
            text="Add Message"
            icon={<IoMdAdd size={16} />}
            onclick={() => setAddMessage(true)}
          />
        </div>
        {addMessage && (
          <div
            className="text-white-default fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-300 h-full w-full bg-black-default/50"
            id="popup"
          >
            <NewMessage closeButton={setAddMessage} />
          </div>
        )}
      </div>
      <ul className="transition-all text-black-default">
        <>
          {Notice.map((notice, index) => {
            return (
              <li className="mx-4" key={index}>
                <div className="flex items-center gap-4 py-3 px-4 my-3 bg-white-300 rounded-md justify-between">
                  <div className="flex gap-2.5">
                    <span className="bg-purple-100 p-2 rounded-full self-center">
                      <MdNotifications
                        size={20}
                        className="text-purple-default"
                      />
                    </span>
                    <div>
                      <p className="text-base font-medium text-black-default capitalize">
                        {notice.title}
                      </p>
                      <p className="flex items-center gap-2 text-sm break-all text-black-200 line-clamp-1">
                        <CiCalendarDate size={16} />
                        <span>{notice.date}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-black-default cursor-pointer">
                    <RxCross2 />
                  </span>
                </div>
              </li>
            );
          })}
        </>
      </ul>
    </div>
  );
};

export default Notice;
