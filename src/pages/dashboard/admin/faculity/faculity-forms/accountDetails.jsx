import InputField from "../../../../../components/forms/inputField";
import { useForm } from "react-hook-form";

const AccountDetails = () => {
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
    <div>
      <h1 className="text-black-default text-center mb-7">
        Account Details For Salary
      </h1>
      <div className="grid grid-cols-3 gap-7">
        <InputField
          label="Bank Name"
          {...register("highest_qualification", { required: true })}
          error={
            errors.highest_qualification?.type === "required"
              ? "Highest Qualification is required"
              : undefined
          }
        />
        <InputField
          label="Bank Account Number"
          {...register("specialization", { required: true })}
          error={
            errors.specialization?.type === "required"
              ? "Specialization is required"
              : undefined
          }
        />
        <InputField
          label="Account Holder's Name"
          {...register("institution", { required: true })}
          error={
            errors.institution?.type === "required"
              ? "Institution is required"
              : undefined
          }
        />
        <InputField
          label="IFSC/SWIFT Code"
          {...register("year_of_passing", { required: true })}
          error={
            errors.year_of_passing?.type === "required"
              ? "Year of Passing is required"
              : undefined
          }
        />
        <InputField
          label="Branch Name"
          className="justify-end"
          {...register("percentage", { required: true })}
          error={
            errors.percentage?.type === "required"
              ? "Percentage is required"
              : undefined
          }
        />
        <InputField
          label="PAN/TIN/SSN (as applicable per region)"
          className="justify-end"
          {...register("percentage", { required: true })}
          error={
            errors.percentage?.type === "required"
              ? "Percentage is required"
              : undefined
          }
        />
      </div>
    </div>
  );
};

export default AccountDetails;
