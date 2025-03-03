import { GoHome } from "react-icons/go";
import Title from "./Title";
const Breadcrumb = () => {
  return (
    <>
      <Title title="admin dashboard" />
      <div className="flex flex-wrap items-center mt-1">
        <h5 className="text-black-300 font-medium flex items-center">
          <span className="text-xl font-medium">
            <GoHome />
          </span>
          <span className="flex items-center">
            <span className="mx-2">/</span>
            <span className={"text-black-300 font-medium capitalize"}>
              Dashboard
            </span>
            <span className="mx-2">/</span>
            <span className={"text-primary-default font-medium capitalize"}>
              Admin
            </span>
          </span>
        </h5>
      </div>
    </>
  );
};

export default Breadcrumb;
