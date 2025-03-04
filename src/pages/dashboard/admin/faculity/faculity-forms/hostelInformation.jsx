import { useForm } from "react-hook-form";
import SelectField from "../../../../../components/forms/selectField";
import Button from "../../../../../components/ui/Button";

const HostelInformation = ({ activeTab, setActiveTab }) => {
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

  const Hostel = [
    { value: "select hostel", label: "Select Hostel" },
    { value: "phoenix residence", label: "Phoenix Residence" },
    { value: "tranquil haven", label: "Tranquil Haven" },
    { value: "radient tower", label: "Radient Tower" },
  ];

  const RoomNumber = [
    { value: "select room number", label: "Select Room Number" },
    { value: "20", label: "20" },
    { value: "22", label: "22" },
    { value: "34", label: "34" },
  ];

  return (
    <div>
      <h2 className="text-black-default">Hostel Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
        <div className="grid grid-cols-2 gap-7">
          <SelectField
            label="Hostel"
            name="route"
            options={Hostel}
            control={control}
          />
          <SelectField
            label="Room Number"
            name="vehicle number"
            options={RoomNumber}
            control={control}
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

export default HostelInformation;
