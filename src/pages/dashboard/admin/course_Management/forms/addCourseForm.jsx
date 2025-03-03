import { MdKeyboardArrowDown } from "react-icons/md";
import InputField from "../../../../../components/forms/inputField";
import SelectField from "../../../../../components/forms/selectField";
import Button from "../../../../../components/ui/Button";
import OutlineButton from "../../../../../components/ui/OutlineButton";
import Searchbar from "../../../../../components/ui/Searchbar";
import Select from "react-select";
import { useForm } from "react-hook-form";

const AddCourseForm = () => {
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

  const optionsClass = [
    { value: "class1", label: "Class 1" },
    { value: "class2", label: "Class 2" },
    { value: "class3", label: "Class 3" },
    { value: "class4", label: "Class 4" },
    { value: "class5", label: "Class 5" },
    { value: "class6", label: "Class 6" },
  ];

  const optionsCourseCode = [
    { value: "courseCode1", label: "Course Code 1" },
    { value: "courseCode2", label: "Course Code 2" },
    { value: "courseCode3", label: "Course Code 3" },
    { value: "courseCode4", label: "Course Code 4" },
    { value: "courseCode5", label: "Course Code 5" },
    { value: "courseCode6", label: "Course Code 6" },
  ];

  return (
    <div className="bg-white-default p-5 rounded-md">
      <h2 className="text-black-default mb-4">Add New Course</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-5 mb-2">
          <div className="mb-2 basis-1/2">
            <InputField
              id="courseName"
              label="Course Name"
              type="text"
              placeholder="Course Name"
              {...register("courseName", {
                required: {
                  value: true,
                  message: "Course Name is required",
                },
                minLength: {
                  value: 3,
                  message: "Course Name must be at least 3 characters",
                },
              })}
            />
            {errors.courseName && (
              <span className="text-red-500 text-sm">
                {errors.courseName.message}
              </span>
            )}
          </div>
          <div className="mb-2 basis-1/2">
            <div>
              <label className="block text-black-default font-medium mb-1.5">
                Course Code
              </label>
              <Select
                options={optionsCourseCode}
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
                Select Class
              </label>
              <Select
                options={optionsClass}
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
              label="Upload Image"
              type="file"
              placeholder="Upload image"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-5"></div>
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

export default AddCourseForm;
