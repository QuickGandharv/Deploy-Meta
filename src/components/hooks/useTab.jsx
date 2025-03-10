import { useState } from "react";

const UseTab = ({ tabs, tabClass, tabContentClass, TabStyle = 1 }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* Tab Headers */}
      <div
        className={`tabs relative flex items-center gap-x-5 border-b border-solid border-black-100 ${
          tabClass ? tabClass : ""
        }`}
      >
        {tabs &&
          tabs.map((tab, index) => {
            return TabStyle === 1 ? (
              <div
                key={index}
                className={`py-2.5 px-4 rounded-md flex items-center gap-x-2 cursor-pointer z-20 ${
                  activeTab === index
                    ? "bg-primary-default text-white-default"
                    : "bg-transparent text-black-300"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label.icon}
                {tab.label.text}
              </div>
            ) : TabStyle === 2 ? (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-y-2.5 relative z-10"
                onClick={() => handleTabClick(index)}
              >
                <div
                  className={`w-[42px] h-[42px] rounded-full flex items-center justify-center cursor-pointer ${
                    activeTab === index
                      ? "bg-primary-default text-white-default"
                      : "bg-black-100 text-black-300"
                  }`}
                >
                  {tab.label.icon}
                </div>
                <div
                  className={`font-medium text-lg ${
                    activeTab === index
                      ? "text-primary-default"
                      : "text-black-200"
                  }`}
                >
                  {tab.label.text}
                </div>
              </div>
            ) : null;
          })}
      </div>

      {/* Render Tab Content */}
      <div
        className={`tabs-content p-5 ${tabContentClass ? tabContentClass : ""}`}
      >
        {tabs &&
          tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                {tab.content({ activeTab, setActiveTab })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UseTab;
