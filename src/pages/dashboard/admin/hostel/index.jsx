import { FaRegUser } from "react-icons/fa";
import UseTab from "../../../../components/hooks/useTab";
import HostelInformation from "./hostel-Forms/hostelInformation";

const Hostel = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "Hostel Details",
      },
      content: ({ activeTab, setActiveTab }) => (
        <HostelInformation activeTab={activeTab} setActiveTab={setActiveTab} />
      ),
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="py-12">
          <h1 className="text-center text-black-default">Hostel Information</h1>
        </div>
        <div className="shadow-flex rounded-lg max-w-lg w-full bg-white-default mx-auto mb-10">
          <UseTab
            tabs={tabsData}
            TabStyle={1}
            className="py-5"
            tabClass="[&&]:gap-x-20 justify-center py-6 before:content-[''] before:absolute before:top-12 before:w-[45%] before:h-px before:bg-black-100"
          />
        </div>
      </div>
    </>
  );
};

export default Hostel;
