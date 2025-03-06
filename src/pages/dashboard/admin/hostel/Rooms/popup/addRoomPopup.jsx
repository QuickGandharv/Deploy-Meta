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

const AddRoomPopup = ({ closeButton }) => {
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
              label="Room Id"
              {...register("room_id", { required: true })}
              error={
                errors.room_id?.type === "required"
                  ? "Room Id is required"
                  : undefined
              }
            />
            <InputField
              label="Room Number"
              type="number"
              {...register("room_no", { required: true })}
              error={
                errors.room_no?.type === "required"
                  ? "Room No is required"
                  : undefined
              }
            />
            <SelectField
              name="block"
              control={control}
              label="Block"
              options={Block}
              placeholder="Select Block"
            />
            <SelectField
              name="room-type"
              control={control}
              label="Room Type"
              options={roomType}
              placeholder="Select Room Type"
            />
            <InputField
              label="No of Bed"
              type="number"
              {...register("no_of_bed", { required: true })}
              error={
                errors.no_of_bed?.type === "required"
                  ? "No of Bed is required"
                  : undefined
              }
            />
            <InputField
              label="Cost"
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

export default AddRoomPopup;
