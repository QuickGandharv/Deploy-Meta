import { useForm } from "react-hook-form";
import InputField from "../../../../components/forms/inputField";
import Button from "../../../../components/ui/Button";

const Password = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <div>
      <div className="py-12">
        <h1 className="text-center text-black-default">Password</h1>
      </div>
      <div className="shadow-flex rounded-lg max-w-lg w-full bg-white-default mx-auto mb-10 p-5">
        <h1 className="text-black-default">Password</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
            <div className="grid grid-cols-2 gap-7">
              <InputField label="New Password" type="password" />
              <InputField label="Confirm Password" type="password" />
            </div>
          </form>
          <div>
            <div className="text-right mt-8">
              <Button
                type="submit"
                text="Submit"
                classname="[&]:rounded-full self-end [&]:px-10 [&]:py-2.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
