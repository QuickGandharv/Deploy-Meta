import { FaRegUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import UseTab from "../../../../components/hooks/useTab";
import PersonalInformation from "./faculity-forms/PersonalInformation";
import AcademicDetails from "./faculity-forms/academicDetails";
import AccountDetails from "./faculity-forms/accountDetails";
import HostelInformation from "./faculity-forms/hostelInformation";
import TransportInformationForm from "./faculity-forms/transportInformationForm";
import { RiHotelLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";

const Faculity = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "Personal Info",
      },
      content: ({ activeTab, setActiveTab }) => (
        <PersonalInformation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ),
    },
    {
      label: {
        icon: <HiOutlineAcademicCap size={24} />,
        text: "Academic Info",
      },
      content: ({ activeTab, setActiveTab }) => (
        <AcademicDetails activeTab={activeTab} setActiveTab={setActiveTab} />
      ),
    },
    {
      label: {
        icon: <IoDocumentTextOutline size={22} />,
        text: "Account Details",
      },
      content: ({ activeTab, setActiveTab }) => (
        <AccountDetails activeTab={activeTab} setActiveTab={setActiveTab} />
      ),
    },
    {
      label: {
        icon: <RiHotelLine size={24} />,
        text: "Hostel",
      },
      content: ({ activeTab, setActiveTab }) => (
        <HostelInformation activeTab={activeTab} setActiveTab={setActiveTab} />
      ),
    },
    {
      label: {
        icon: <MdEmojiTransportation size={22} />,
        text: "Transport",
      },
      content: ({ activeTab, setActiveTab }) => (
        <TransportInformationForm
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="py-12">
          <h1 className="text-center text-black-default">Add New Member</h1>
        </div>
        <div className="shadow-flex rounded-lg max-w-lg w-full bg-white-default mx-auto mb-10">
          <UseTab
            tabs={tabsData}
            TabStyle={1}
            className="py-5"
            tabClass="[&&]:gap-x-20 justify-center py-6 before:content-[''] before:absolute before:top-12 before:w-[80%] before:h-px before:bg-black-100"
          />
        </div>
      </div>
    </>
  );
};

export default Faculity;
