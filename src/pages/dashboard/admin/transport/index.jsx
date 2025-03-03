import { FaRegUser } from "react-icons/fa";
import UseTab from "../../../../components/hooks/useTab";
import TransportInformationForm from "./transport-Forms/transportInformationForm";

const Transport = () => {
  const tabsData = [
    {
      label: {
        icon: <FaRegUser />,
        text: "Transport Information",
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
    <div className="w-full">
      <div className="py-12">
        <h1 className="text-center text-black-default">
          Transport Information
        </h1>
      </div>
      <div className="shadow-flex rounded-lg max-w-lg w-full bg-white-default mx-auto mb-10">
        <UseTab
          tabs={tabsData}
          TabStyle={1}
          className="p-5"
          tabClass="[&&]:gap-x-20 justify-center py-6 before:content-[''] before:absolute before:top-12 before:w-[45%] before:h-px before:bg-black-100"
        />
      </div>
    </div>
  );
};

export default Transport;
