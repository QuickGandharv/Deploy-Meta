import InputField from "../../../../../components/forms/inputField";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/ui/Button";

const AccountDetails = ({ activeTab, setActiveTab }) => {
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

  const validateIFSCorSWIFT = (value) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC format
    const swiftRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/; // SWIFT format

    if (!value) return "IFSC or SWIFT code is required";
    if (!ifscRegex.test(value) && !swiftRegex.test(value)) {
      return "Invalid IFSC or SWIFT code";
    }
    return true; // Validation passed
  };

  return (
    <div>
      <h1 className="text-black-default text-center mb-7">
        Account Details For Salary
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-7">
          <InputField
            label="Bank Name"
            {...register("bank_name", { required: true })}
            error={
              errors.bank_name?.type === "required"
                ? "Bank Name is required"
                : undefined
            }
          />
          <InputField
            label="Bank Account Number"
            type="number"
            {...register("bank_account_number", { required: true })}
            error={
              errors.bank_account_number?.type === "required"
                ? "Bank Account Number is required"
                : undefined
            }
          />
          <InputField
            label="Account Holder's Name"
            {...register("account_holder_name", { required: true })}
            error={
              errors.account_holder_name?.type === "required"
                ? "Account Holder's Name is required"
                : undefined
            }
          />
          <InputField
            label="IFSC/SWIFT Code"
            {...register("ifsc_swift_code", {
              required: true,
              validate: validateIFSCorSWIFT,
            })}
            error={
              errors.ifsc_swift_code?.type === "required"
                ? "IFSC/SWIFT Code is required"
                : undefined
            }
          />
          <InputField
            label="Branch Name"
            {...register("branch_name", { required: true })}
            error={
              errors.branch_name?.type === "required"
                ? "Branch Name is required"
                : undefined
            }
          />
          <InputField
            label="PAN/TIN/SSN (as applicable per region)"
            {...register("pan_tin_ssn", { required: true })}
            error={
              errors.pan_tin_ssn?.type === "required"
                ? "PAN/TIN/SSN is required"
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
            onclick={() => setActiveTab(activeTab + 1)}
            classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
          />
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
