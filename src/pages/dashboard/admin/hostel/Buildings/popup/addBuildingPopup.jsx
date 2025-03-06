// const AddRoomPopup = () => {
//   return (
//     <div className="max-w-md w-full mx-auto bg-white-default shadow-flex rounded-lg mb-10 p-5">
//       <h2 className="text-black-default">Room Name</h2>
//     </div>
//   );
// };

// export default AddRoomPopup;

import { useForm } from "react-hook-form";
import Button from "../../../../../../components/ui/Button";
import InputField from "../../../../../../components/forms/inputField";
import SelectField from "../../../../../../components/forms/selectField";
import { RxCross2 } from "react-icons/rx";

const AddBuildingPopup = ({ closeButton }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const roomType = [
    { value: "select", label: "Select" },
    { value: "single", label: "Single" },
    { value: "double", label: "Double" },
    { value: "dormitory", label: "Dormitory" },
  ];

  const Block = [
    { value: "select - block", label: "Select - Block" },
    { value: "block-a", label: "Block - A" },
    { value: "block-b", label: "Block - B" },
    { value: "block-c", label: "Block - C" },
  ];

  return (
    <>
      <div className="max-w-4xl w-full mx-auto bg-white-default shadow-flex rounded-lg p-5 overflow-y-scroll h-[500px]">
        <div className="flex justify-end">
          <Button
            classname="text-black-default [&]:py-1 [&]:px-1"
            onclick={() => closeButton(false)}
            icon={<RxCross2 className="h-6 w-6" />}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
          <div className="grid grid-cols-2 gap-7">
            <InputField
              label="Building Id"
              type="number"
              {...register("building_id", { required: true })}
              error={
                errors.building_id?.type === "required"
                  ? "Building Id is required"
                  : undefined
              }
            />
            <InputField
              label="Building Name"
              type="text"
              {...register("building_name", { required: true })}
              error={
                errors.building_name?.type === "required"
                  ? "Building Name is required"
                  : undefined
              }
            />
            <InputField
              label="No of Floors"
              type="number"
              {...register("no_of_floor", { required: true })}
              error={
                errors.no_of_floor?.type === "required"
                  ? "No of Floor is required"
                  : undefined
              }
            />
            <InputField
              label="No of Rooms"
              type="number"
              {...register("no_of_rooms", { required: true })}
              error={
                errors.no_of_rooms?.type === "required"
                  ? "No of Rooms is required"
                  : undefined
              }
            />
            <InputField
              label="Electricity Reading"
              type="number"
              {...register("electricity_reading", { required: true })}
              error={
                errors.electricity_reading?.type === "required"
                  ? "Enter Electricity Readings"
                  : undefined
              }
            />
            <InputField
              label="Cost"
              type="number"
              {...register("cost", { required: true })}
              error={
                errors.cost?.type === "required"
                  ? "Cost is required"
                  : undefined
              }
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              text="Submit"
              classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBuildingPopup;
