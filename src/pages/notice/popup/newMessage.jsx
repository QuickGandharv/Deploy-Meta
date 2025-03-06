// const NewMessage = () => {
//   return (
//     <div>
//       <h1 className="text-black-default">New Message</h1>
//     </div>
//   );
// };

// export default NewMessage;

import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import InputField from "../../../components/forms/inputField";
import { RxCross2 } from "react-icons/rx";
import Checkbox from "../../../components/forms/Checkbox";
import { useState } from "react";

const NewMessage = ({ closeButton }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
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

  const [selectAll, setSelectAll] = useState(false);

  // Watch all permissions to track changes
  const selectedRoles = watch();

  // Handle "Select All" toggle
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    // Set all checkboxes to the same state as "Select All"
    allRoles.forEach((role) => {
      const fieldName = role.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_|_$/g, "");

      setValue(fieldName, newSelectAll);
    });
  };

  return (
    <>
      <div className="max-w-2xl w-full mx-auto bg-white-default shadow-flex rounded-lg p-5 overflow-y-scroll h-[500px]">
        <div className="flex justify-end">
          <Button
            classname="text-black-default [&]:py-1 [&]:px-1"
            onclick={() => closeButton(false)}
            icon={<RxCross2 className="h-6 w-6" />}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
          <div className="grid grid-cols-1 gap-7">
            <InputField
              label="Title"
              {...register("title", { required: true })}
              error={
                errors.title?.type === "required"
                  ? "Title Id is required"
                  : undefined
              }
            />
            <InputField
              label="Notice Date"
              type="date"
              {...register("notice_date", { required: true })}
              error={
                errors.notice_date?.type === "required"
                  ? "Notice date is required"
                  : undefined
              }
            />
            <InputField
              label="Publish On"
              type="date"
              {...register("publish_on", { required: true })}
              error={
                errors.publish_on?.type === "required"
                  ? " Publish date is required"
                  : undefined
              }
            />
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1.5">
                Message
              </label>
              <textarea
                className="h-[100px] border rounded-md outline-none text-black-default p-2"
                placeholder="message"
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.description && (
                <p style={{ color: "red" }}>{errors.description.message}</p>
              )}
            </div>
            <div className="">
              <h2 className="text-black-default mb-4">Message To</h2>
              <div className="flex text-black-default">
                <div className="basis-1/2">
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Student"
                    id="student"
                  />
                  <Checkbox wrapperClass="mb-1.5" label="Parent" id="parent" />
                  <Checkbox wrapperClass="mb-1.5" label="Admin" id="admin" />
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Teacher"
                    id="teacher"
                  />
                </div>
                <div className="basis-1/2">
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Accountant"
                    id="accountant"
                  />
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Librarian"
                    id="librarian"
                  />
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Receptionist"
                    id="receptionist"
                  />
                  <Checkbox
                    wrapperClass="mb-1.5"
                    label="Super Admin"
                    id="superAdmin"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2.5 mt-8">
            <Button
              type="button"
              text="Cancel"
              classname="[&]:rounded-full self-end [&]:px-5 [&]:py-2"
            />
            <Button
              type="submit"
              text="Add New Message"
              classname="[&]:rounded-full self-end [&]:px-3 [&]:py-2"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewMessage;
