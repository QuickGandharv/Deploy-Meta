import InputField from "../../../../../components/forms/inputField";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/ui/Button";

const AcademicDetails = () => {
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
      <form action="">
        <div>
          <h1 className="text-black-default text-center text-2xl mb-7">
            Academic Details, Related Documents & Prior Experience
          </h1>
          <div className="w-full mb-7">
            <h2 className="text-black-default mb-5">Academic Details</h2>
            <div className="grid grid-cols-3 gap-7">
              <InputField
                label="Highest Qualification"
                {...register("highest_qualification", { required: true })}
                error={
                  errors.highest_qualification?.type === "required"
                    ? "Highest Qualification is required"
                    : undefined
                }
              />
              <InputField
                label="University/College Name"
                {...register("specialization", { required: true })}
                error={
                  errors.specialization?.type === "required"
                    ? "Specialization is required"
                    : undefined
                }
              />
              <InputField
                label="Year of Graduation"
                {...register("institution", { required: true })}
                error={
                  errors.institution?.type === "required"
                    ? "Institution is required"
                    : undefined
                }
              />
              <InputField
                label="Field of Study"
                {...register("year_of_passing", { required: true })}
                error={
                  errors.year_of_passing?.type === "required"
                    ? "Year of Passing is required"
                    : undefined
                }
              />
              <InputField
                label="Additional Certificate (if any)"
                {...register("percentage", { required: true })}
                error={
                  errors.percentage?.type === "required"
                    ? "Percentage is required"
                    : undefined
                }
              />
            </div>
          </div>
          <div className="col-span-3 mb-7">
            <h2 className="text-black-default mb-5">Academic Details</h2>
            <div className="grid grid-cols-3 gap-7">
              <InputField
                label="Resume/CV"
                type="file"
                {...register("highest_qualification", { required: true })}
                error={
                  errors.highest_qualification?.type === "required"
                    ? "Highest Qualification is required"
                    : undefined
                }
              />
              <InputField
                label="Degree Certificate"
                type="file"
                {...register("specialization", { required: true })}
                error={
                  errors.specialization?.type === "required"
                    ? "Specialization is required"
                    : undefined
                }
              />
              <InputField
                label="Transcripts"
                type="file"
                {...register("institution", { required: true })}
                error={
                  errors.institution?.type === "required"
                    ? "Institution is required"
                    : undefined
                }
              />
              <InputField
                label="Other Supporting Documents (if applicable)"
                type="file"
                {...register("year_of_passing", { required: true })}
                error={
                  errors.year_of_passing?.type === "required"
                    ? "Year of Passing is required"
                    : undefined
                }
              />
              <InputField
                label="Additional Certificate (if any)"
                type="file"
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
          <div className="col-span-3">
            <h2 className="text-black-default mb-5">Prior Experience</h2>
            <div className="grid grid-cols-3 gap-7">
              <InputField
                label="Total Years of Experience"
                {...register("highest_qualification", { required: true })}
                error={
                  errors.highest_qualification?.type === "required"
                    ? "Highest Qualification is required"
                    : undefined
                }
              />
              <InputField
                label="Previous Institution Name"
                {...register("specialization", { required: true })}
                error={
                  errors.specialization?.type === "required"
                    ? "Specialization is required"
                    : undefined
                }
              />
              <InputField
                label="Designation"
                {...register("institution", { required: true })}
                error={
                  errors.institution?.type === "required"
                    ? "Institution is required"
                    : undefined
                }
              />
              <InputField
                label="Start Date & End Date"
                {...register("year_of_passing", { required: true })}
                error={
                  errors.year_of_passing?.type === "required"
                    ? "Year of Passing is required"
                    : undefined
                }
              />
              <InputField
                label="Reason for Leaving"
                className="justify-end"
                {...register("percentage", { required: true })}
                error={
                  errors.percentage?.type === "required"
                    ? "Percentage is required"
                    : undefined
                }
              />
              <InputField
                label="Reference Contact (if any)"
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
        </div>
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

export default AcademicDetails;
