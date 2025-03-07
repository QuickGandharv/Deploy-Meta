import InputField from "../../../../../components/forms/inputField";
import Button from "../../../../../components/ui/Button";
import OutlineButton from "../../../../../components/ui/OutlineButton";
import Select from "react-select";
import { useForm } from "react-hook-form";

const AddNewClassForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Submitting the form: ", data);
    reset();
  };

  const optionsTeacher = [
    { value: "teacher1", label: "Teacher 1" },
    { value: "teacher2", label: "Teacher 2" },
    { value: "teacher3", label: "Teacher 3" },
    { value: "teacher4", label: "Teacher 4" },
    { value: "teacher5", label: "Teacher 5" },
    { value: "teacher6", label: "Teacher 6" },
  ];

  const optionsCourse = [
    { value: "Course1", label: "Course 1" },
    { value: "Course2", label: "Course 2" },
    { value: "Course3", label: "Course 3" },
    { value: "Course4", label: "Course 4" },
    { value: "Course5", label: "Course 5" },
    { value: "Course6", label: "Course 6" },
  ];

  const optionsClassCode = [
    { value: "classCode1", label: "Class Code 1" },
    { value: "classCode2", label: "Class Code 2" },
    { value: "classCode3", label: "Class Code 3" },
    { value: "classCode4", label: "Class Code 4" },
    { value: "classCode5", label: "Class Code 5" },
    { value: "classCode6", label: "Class Code 6" },
  ];

  const optionsClassIncharge = [
    { value: "classincharge1", label: "Class Incharge 1" },
    { value: "classincharge2", label: "Class Incharge 2" },
    { value: "classincharge3", label: "Class Incharge 3" },
  ];

  return (
    <div className="bg-white-default p-5 rounded-md">
      <h2 className="text-black-default mb-4">Add New Class</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-5 mb-2">
          <div className="mb-2 basis-1/2">
            <InputField
              id="class_Name"
              label="Class Name"
              type="text"
              placeholder="Class Name"
              {...register("class_Name", {
                required: {
                  value: true,
                  message: "Class Name is required",
                },
                minLength: {
                  value: 3,
                  message: "Class Name must be at least 3 characters",
                },
              })}
            />
            {errors.class_Name && (
              <span className="text-red-500 text-sm">
                {errors.class_Name.message}
              </span>
            )}
          </div>
          <div className="mb-2 basis-1/2">
            <div>
              <label className="block text-black-default font-medium mb-1.5">
                Class Code
              </label>
              <Select
                options={optionsClassCode}
                isMulti
                isSearchable
                className="border rounded-md text-base font-normal text-black-300 w-full"
                placeholder="AutoGenerated Class Code"
                noOptionsMessage={() => "No Class found"}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "theme('colors.primary.DEFAULT')",
                    borderRadius: "theme('borderRadius.md')",
                  }),
                }}
              />
            </div>
          </div>
          <div className="mb-2 basis-1/2">
            <div>
              <label className="block text-black-default font-medium mb-1.5">
                Select Teacher
              </label>
              <Select
                options={optionsTeacher}
                isMulti
                isSearchable
                className="border rounded-md text-base font-normal text-black-300 w-full"
                noOptionsMessage={() => "No Teacher found"}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "theme('colors.primary.DEFAULT')",
                    borderRadius: "theme('borderRadius.md')",
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-2">
          <div className="mb-2 basis-1/2">
            <div>
              <label className="block text-black-default font-medium mb-1.5">
                Select Course
              </label>
              <Select
                options={optionsCourse}
                isMulti
                isSearchable
                className="border rounded-md text-base font-normal text-black-300 w-full"
                noOptionsMessage={() => "No Teacher found"}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "theme('colors.primary.DEFAULT')",
                    borderRadius: "theme('borderRadius.md')",
                  }),
                }}
              />
            </div>
          </div>
          <div className="mb-2 basis-1/2">
            <InputField
              id="sections"
              label="No. of Sections for this class"
              type="text"
              placeholder="This will be a repeater field"
            />
          </div>
          <div className="mb-2 basis-1/2">
            <div>
              <label className="block text-black-default font-medium mb-1.5">
                Class Incharge
              </label>
              <Select
                options={optionsClassIncharge}
                isMulti
                isSearchable
                className="border rounded-md text-base font-normal text-black-300 w-full"
                noOptionsMessage={() => "No Teacher found"}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "theme('colors.primary.DEFAULT')",
                    borderRadius: "theme('borderRadius.md')",
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-2">
          <div className="mb-2 basis-1/2">
            <InputField
              label="Upload Image"
              type="file"
              placeholder="Upload image"
            />
          </div>
        </div>
        <div className="flex gap-2.5">
          <Button
            text="Submit"
            type="submit"
            classname="[&]:rounded-full [&]:py-2.5 [&]:px-7"
          />
          <OutlineButton
            text="Reset"
            className="[&]:text-primary-default [&]:border-primary-default [&]:py-2.5 [&]:px-7"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewClassForm;

AddNewClassForm;
