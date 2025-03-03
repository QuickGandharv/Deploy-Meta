import { useForm } from "react-hook-form";
import SelectField from "../../../../../components/forms/selectField";

const HostelInformation = () => {
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
    { value: "phoenix residence", label: "Phoenix Residence" },
    { value: "tranquil haven", label: "Tranquil Haven" },
    { value: "radient tower", label: "Radient Tower" },
  ];

  const RoomNumber = [
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
      </form>
    </div>
  );
};

export default HostelInformation;
