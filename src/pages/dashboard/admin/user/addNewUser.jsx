import InputField from "../../../../components/forms/inputField";
import Button from "../../../../components/ui/Button";
import OutlineButton from "../../../../components/ui/OutlineButton";
import Select from "react-select";
import { useForm } from "react-hook-form";
import SelectField from "../../../../components/forms/selectField";
import FileField from "../../../../components/forms/fileField";

const AddNewUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
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

  const userType = [
    { value: "user type", label: "User type" },
    { value: "user", label: "User" },
  ];

  const Gender = [
    { value: "select gender", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="bg-white-default p-5 rounded-md">
      <h2 className="text-black-default mb-4">Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
        <div className="grid grid-cols-3 gap-7">
          <SelectField
            name="user type"
            control={control}
            label="User Type"
            options={userType}
            placeholder="User Type"
          />
          <InputField
            label="Full Name"
            {...register("name", { required: true })}
            error={
              errors.name?.type === "required" ? "Name is required" : undefined
            }
          />
          <InputField
            label="Date of Birth"
            type="date"
            {...register("date_of_birth", {
              required: "Date of Birth is required",
              validate: {
                minAge: (value) => {
                  const dob = new Date(value);
                  const today = new Date();
                  const age = today.getFullYear() - dob.getFullYear();
                  return age >= 18 || "You must be at least 18 years old";
                },
                maxAge: (value) => {
                  const dob = new Date(value);
                  const today = new Date();
                  const age = today.getFullYear() - dob.getFullYear();
                  return age <= 100 || "You must be less than 100 years old";
                },
                validDate: (value) => {
                  const dob = new Date(value);
                  const today = new Date();
                  return (
                    dob <= today || "Date of Birth cannot be in the future"
                  );
                },
              },
            })}
            error={
              errors.date_of_birth?.type === "required"
                ? errors.date_of_birth.message
                : errors.date_of_birth?.type === "minAge"
                ? errors.date_of_birth.message
                : errors.date_of_birth?.type === "maxAge"
                ? errors.date_of_birth.message
                : errors.date_of_birth?.type === "validDate"
                ? errors.date_of_birth.message
                : undefined
            }
          />
          <SelectField
            name="gender"
            control={control}
            label="Gender"
            options={Gender}
            placeholder="Select a Gender"
          />
          <InputField
            label="Date of Joining"
            type="date"
            {...register("date_of_joining", {
              required: {
                value: true,
                message: "Date of Joining is required",
              },
              validate: {
                notInFuture: (value) => {
                  return (
                    new Date(value) <= new Date() ||
                    "Date of Joining cannot be in the future"
                  );
                },
                notTooOld: (value) => {
                  const minDate = new Date();
                  minDate.setFullYear(minDate.getFullYear() - 100); // Reasonable limit
                  return (
                    new Date(value) >= minDate ||
                    "Please enter a valid Date of Joining"
                  );
                },
              },
            })}
            error={
              errors.date_of_birth?.type === "required"
                ? "Date of Joining is required"
                : undefined
            }
          />
          <InputField
            label="Mother's Name"
            {...register("mother_name", { required: true })}
            error={
              errors.mother_name?.type === "required"
                ? "Mother’s Name is required"
                : undefined
            }
          />
          <InputField
            label="Father's Name"
            {...register("father_name", { required: true })}
            error={
              errors.father_name?.type === "required"
                ? "Father’s Name is required"
                : undefined
            }
          />
          <InputField
            label="Email Address"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^.+@.+\..+$/,
                message: "Please enter a valid email address",
              },
            })}
            error={
              errors.email?.type === "required"
                ? "Email is required"
                : undefined
            }
          />
          <InputField
            label="Phone Number"
            {...register("phone_number", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            error={
              errors.phone_number?.type === "required"
                ? "Phone Number is required"
                : undefined
            }
          />
          <InputField
            label="Alternate Phone Number (Optional)"
            {...register("alternate_phone", {
              required: false,
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            error={
              errors.alternate_phone?.type === "required"
                ? "Please enter a valid 10-digit phone number"
                : undefined
            }
          />
          <FileField
            type="file"
            label="Profile Picture"
            {...register("profile_picture", { required: true })}
            error={
              errors.profile_picture?.type === "required"
                ? "Upload Profile Picture"
                : undefined
            }
          />
          <div className="w-full col-span-3">
            <h2 className="text-black-default mb-5">Address</h2>
            <div className="col-span-3 grid grid-cols-3 gap-7">
              <InputField
                label="Street"
                {...register("street", {
                  required: "Street address is required",
                  minLength: {
                    value: 3,
                    message: "Street address is too short",
                  },
                  maxLength: {
                    value: 100,
                    message: "Street address is too long",
                  },
                })}
                error={
                  errors.street?.type === "required"
                    ? "Street is required"
                    : undefined
                }
              />
              <InputField
                label="City"
                {...register("city", { required: true })}
                error={
                  errors.city?.type === "required"
                    ? "City is required"
                    : undefined
                }
              />
              <InputField
                label="State"
                {...register("state", { required: true })}
                error={
                  errors.state?.type === "required"
                    ? "state is required"
                    : undefined
                }
              />
              <InputField
                type="Zip Code"
                label="Zip Code"
                {...register("Zipcode", { required: true })}
                error={
                  errors.Zipcode?.type === "required"
                    ? "Zip Code is required"
                    : undefined
                }
              />
              <InputField
                type="text"
                label="Nationality"
                {...register("nationality", {
                  required: {
                    value: true,
                    message: "Nationality is required",
                  },
                })}
                error={
                  errors.nationality?.type === "required"
                    ? "Nationality is required"
                    : undefined
                }
              />
              <InputField
                label="State of Domicile"
                {...register("state_of_domicile", { required: true })}
                error={
                  errors.state_of_domicile?.type === "required"
                    ? "State is required"
                    : undefined
                }
              />
            </div>
          </div>
          <InputField
            type="text"
            label="Marital Status"
            {...register("marital_status", {
              required: {
                value: true,
                message: "Marital Status is required",
              },
            })}
            error={
              errors.marital_status?.type === "required"
                ? "Marital Status is required"
                : undefined
            }
          />
          <InputField
            type="text"
            label="Emergency Contact Name"
            {...register("emergency_contact_name", {
              required: true,
            })}
            error={
              errors.emergency_contact_name?.type === "required"
                ? "Emergency Contact Name is required"
                : undefined
            }
          />
          <InputField
            label="Emergency Contact Number"
            {...register("emergency_contact_number", {
              required: "Emergency Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Example: Validates a 10-digit phone number
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            error={
              errors.emergency_contact_number?.type === "required"
                ? "Emergency Number is required"
                : undefined
            }
          />
        </div>
        <div className="flex justify-between mt-8">
          <Button
            type="submit"
            text="Submit"
            classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
          />
          <Button
            text="Next"
            type="button"
            onclick={() => setActiveTab(activeTab + 1)}
            classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
