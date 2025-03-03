import { useForm } from "react-hook-form";
import Button from "../../../../../components/ui/Button";
import InputField from "../../../../../components/forms/inputField";

const PersonalInformation = () => {
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
        <div className="grid grid-cols-3 gap-7">
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
            {...register("date_of_birth", { required: true })}
            error={
              errors.date_of_birth?.type === "required"
                ? "DOB No is required"
                : undefined
            }
          />
          <InputField
            type="number"
            label="Gender"
            {...register("roll_number", { required: true, maxLength: 25 })}
            error={
              errors.roll_number?.type === "required"
                ? "Roll No is required"
                : errors.roll_number?.type === "maxLength"
                ? "Roll No is not greather than 25 number"
                : undefined
            }
          />
          <InputField
            label="Email Address"
            {...register("nationality", { required: true })}
            error={
              errors.nationality?.type === "required"
                ? "Nationality is required"
                : undefined
            }
          />
          <InputField
            label="Phone Number"
            {...register("religion", { required: true })}
            error={
              errors.religion?.type === "required"
                ? "Religion is required"
                : undefined
            }
          />
          <InputField
            label="Alternate Phone Number (Optional)"
            {...register("correspondence_address", { required: true })}
            error={
              errors.correspondence_address?.type === "required"
                ? "Correspondence Address is required"
                : undefined
            }
          />
          <div className="w-full col-span-3">
            <h2 className="text-black-default mb-5">Address</h2>
            <div className="col-span-3 grid grid-cols-3 gap-7">
              <InputField
                label="Street"
                {...register("state", { required: true })}
                error={
                  errors.state?.type === "required"
                    ? "State is required"
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
                {...register("email", { required: true })}
                error={
                  errors.email?.type === "required"
                    ? "Email is required"
                    : undefined
                }
              />
              <InputField
                type="City"
                label="Zip Code"
                {...register("pin", { required: true })}
                error={
                  errors.pin?.type === "required"
                    ? "Pin is required"
                    : undefined
                }
              />
            </div>
          </div>
          <InputField
            type="number"
            label="Nationality"
            {...register("mobile_1", {
              required: true,
              minLength: 12,
              maxLength: 12,
            })}
            error={
              errors.mobile_1?.type === "required"
                ? "Mobile No is required"
                : errors.mobile_1?.type === "minLength" ||
                  errors.mobile_1?.type === "maxLength"
                ? "Mobile No must have at least 12 digit"
                : undefined
            }
          />
          <InputField
            type="number"
            label="Marital Status"
            {...register("mobile_2")}
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
          <InputField
            type="number"
            label="Emergency Contact Name"
            {...register("aadhar_no", {
              required: true,
              minLength: 12,
              maxLength: 12,
            })}
            error={
              errors.aadhar_no?.type === "required"
                ? "Aadhar Number is required"
                : errors.aadhar_no?.type === "minLength" ||
                  errors.aadhar_no?.type === "maxLength"
                ? "The aadhar no field must have at least 12 digits"
                : undefined
            }
          />
          <InputField
            label="Emergency Contact Number"
            {...register("father_name", { required: true })}
            error={
              errors.father_name?.type === "required"
                ? "Father’s Name is required"
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

          {/* <InputField
            label="Enter your Graduation Details"
            {...register("are_parents_graduates_text", { required: true })}
            error={
              errors.are_parents_graduates_text?.type === "required"
                ? "Parents Graduation Details is required"
                : undefined
            }
          /> */}
        </div>
        {/* {errors && (
          <p className="bg-red-100 py-2.5 px-5 text-red-800 mt-2 rounded-md font-normal"></p>
        )} */}
        {/* <div className="text-left mt-8">
          <Button
            type="submit"
            text="Submit"
            classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
          />
        </div> */}
      </form>
      <div className="text-right mt-8">
        <Button
          text="Next"
          onclick={() => setActiveTab(activeTab + 1)}
          classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
        />
      </div>
    </>
  );
};

export default PersonalInformation;
