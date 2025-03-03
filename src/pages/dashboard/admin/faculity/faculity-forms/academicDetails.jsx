import InputField from "../../../../../components/forms/inputField";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/ui/Button";
import FileField from "../../../../../components/forms/fileField";

const AcademicDetails = ({ activeTab, setActiveTab }) => {
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

  const validateFile = (fileList, maxFileSize = 2048 * 1024) => {
    if (!fileList?.[0]) return true;
    const validMimeTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (!validMimeTypes.includes(fileList[0].type)) {
      return "Invalid file type. Only JPEG, PNG, or PDF are allowed.";
    }
    if (fileList[0].size > maxFileSize) {
      return `File size exceeds ${maxFileSize / 1024}KB.`;
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("university_college_name", { required: true })}
                error={
                  errors.university_college_name?.type === "required"
                    ? "University/College Name is required"
                    : undefined
                }
              />
              <InputField
                label="Year of Graduation"
                {...register("year_of_graduation", { required: true })}
                error={
                  errors.year_of_graduation?.type === "required"
                    ? "Year of Graduation is required"
                    : undefined
                }
              />
              <InputField
                label="Field of Study"
                {...register("field_of_study", { required: true })}
                error={
                  errors.field_of_study?.type === "required"
                    ? "Field of Study is required"
                    : undefined
                }
              />
              <InputField
                label="Additional Certificate (if any)"
                {...register("additional_certificate", { required: false })}
                error={
                  errors.additional_certificate?.type === "required"
                    ? "Additional Certificate is required"
                    : undefined
                }
              />
            </div>
          </div>
          <div className="col-span-3 mb-7">
            <h2 className="text-black-default mb-5">
              Related Documents (file upload)
            </h2>
            <div className="grid grid-cols-3 gap-7">
              <FileField
                label="Resume/CV"
                id="resume"
                {...register("resume", {
                  required: "This field is required",
                  validate: (fileList) => validateFile(fileList, 2048 * 1024),
                })}
                error={errors.resume?.message}
              />
              <FileField
                label="Degree Certificate"
                id="degree-Certificate"
                {...register("degreeCertificate", {
                  required: "This field is required",
                  validate: (fileList) => validateFile(fileList, 2048 * 1024),
                })}
                error={errors.degreeCertificate?.message}
              />
              <FileField
                label="Transcripts"
                id="Transcripts"
                {...register("transcripts", {
                  required: "This field is required",
                  validate: (fileList) => validateFile(fileList, 2048 * 1024),
                })}
                error={errors.transcripts?.message}
              />
              <FileField
                label="Other Supporting Documents (if applicable)"
                id="other-Supporting-Documents"
                {...register("otherSupportingDocuments", {
                  required: "This field is required",
                  validate: (fileList) => validateFile(fileList, 2048 * 1024),
                })}
              />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-black-default mb-5">Prior Experience</h2>
            <div className="grid grid-cols-3 gap-7">
              <InputField
                type="number"
                label="Total Years of Experience"
                {...register("total_year_of_experience", { required: true })}
                error={
                  errors.total_year_of_experience?.type === "required"
                    ? "Total Years of Experience is required"
                    : undefined
                }
              />
              <InputField
                label="Previous Institution Name"
                {...register("previous_institution_name", { required: true })}
                error={
                  errors.previous_institution_name?.type === "required"
                    ? "Previous Institution Name is required"
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
                {...register("reason_for_leaving", { required: true })}
                error={
                  errors.reason_for_leaving?.type === "required"
                    ? "Reason is required"
                    : undefined
                }
              />
              <InputField
                label="Reference Contact (if any)"
                {...register("reference_contact", { required: true })}
              />
            </div>
          </div>
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
    </>
  );
};

export default AcademicDetails;
